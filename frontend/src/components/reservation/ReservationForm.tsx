import * as React from "react";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Button, MenuItem, Box, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

const ReservationForm = ({
  employees,
  services,
  reservations,
}: ReservationForm) => {
  const [employee, setEemployee] = useState("");
  const [service, setService] = useState("");
  const [reservation, setReservation] = useState<Date | null>(null);

  const navigate = useNavigate();

  const token = useRouteLoaderData("token-loader") as string;

  const date = new Date(reservation!);
  const companyId = employees[0].company;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!employee || !service || !reservation) {
        throw new Error("Please fill all fields");
      }

      await axios.post(
        "http://localhost:5050/reservation/add",
        {
          userId: token,
          companyId: companyId,
          employeeId: employee,
          serviceId: service,
          date: date,
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      setEemployee("");
      setService("");
      setReservation(null);
      navigate("/rezerwacje");
    } catch (error) {
      console.log(error);
    }
  };

  const tenAM = dayjs().set("hour", 10).startOf("hour");
  const twentyPM = dayjs().set("hour", 20).startOf("hour");

  return (
    <Box
      component="div"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      {!token ? (
        <Typography gutterBottom variant="h6" component="h2">
          <p>Chcesz zarezerwować wizytę? Zaloguj się lub załóź konto.</p>
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Umów sie na wizyte poniżej</h3>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                sx={{ minWidth: "80%" }}
                ampm={false}
                label="Wybierz date i godzine wizyty"
                format="DD-MM-YYYY HH:mm"
                minDate={dayjs().add(1, "day")}
                minTime={tenAM}
                maxTime={twentyPM}
                minutesStep={30}
                onChange={(newValue: Dayjs | null) =>
                  setReservation(newValue ? newValue.toDate() : null)
                }
              />
            </LocalizationProvider>
            <TextField
              id="outlined-select-currency"
              select
              label="Wybierz pracownika"
              onChange={(e) => setEemployee(e.target.value)}
            >
              {employees.map((employee) => (
                <MenuItem key={employee._id} value={employee._id}>
                  {employee.name} {employee.surname}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              label="Wybierz usługę"
              onChange={(e) => setService(e.target.value)}
            >
              {services.map((service) => (
                <MenuItem key={service._id} value={service._id}>
                  {service.name}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button type="submit" variant="outlined">
            Zarezerwuj wizytę
          </Button>
        </form>
      )}
    </Box>
  );
};

export default ReservationForm;
