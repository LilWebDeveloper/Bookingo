import { Container, Grid, Paper, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import classes from "../../styles/Photo.module.css";

const UserReservations = () => {
  const reservations = useLoaderData() as ReservationType[];

  if (reservations.length === 0) {
    return <Typography variant="h4" mt="1em" sx={{textAlign: 'center'}}>Dokonaj rezerwacja</Typography>;
  } else {
    return (
      <Container>
        <Grid container spacing={2} m={1}>
          {reservations.map((reservation) => (
            <Grid key={reservation._id} item xs={12} sm={12} md={12} lg={12}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Grid container>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Typography variant="h4">Rezerwacja</Typography>
                    <Typography variant="h6">
                      {reservation.companyId.name}
                    </Typography>
                    <Typography>
                      Data wizyty:{" "}
                      {new Date(reservation.date).toLocaleString("pl-PL", {
                        timeZone: "Europe/Warsaw",
                        hour: "2-digit",
                        minute: "2-digit",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Typography>
                    <Typography>
                      Pracownik: {reservation.employeeId.name}{" "}
                      {reservation.employeeId.surname}
                    </Typography>
                    <Typography>
                      Usługa: {reservation.serviceId.name}
                    </Typography>
                  </Grid>
                  <Grid item textAlign={"right"} xs={8} sm={8} md={8} lg={8}>
                    <img
                      className={classes.imgCompany}
                      src={`../../../assets/uploads/${reservation.companyId.picture}`}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
};

export default UserReservations;
