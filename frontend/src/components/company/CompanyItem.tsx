import {
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { StyledCard } from "../../styles/ComapnyItem";
import classes from "../../styles/Photo.module.css";
import ReservationForm from "../reservation/ReservationForm";
import { StyledTableCell, StyledTableRow } from "../../styles/Tables";

const CompanyItem = () => {
  const data = useLoaderData() as CompanyInfo;

  const company = data.company;
  const services = data.service;
  const employees = data.employee;
  const reservations = data.reservation;

  return (
    <Grid item sx={{ m: "1em" }} xs={12} sm={6} md={4}>
      <StyledCard>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h4" component="h2">
            <p>{company.name}</p>
          </Typography>
          <img
            className={classes.imgCompany}
            alt={company.name}
            src={`../../../assets/uploads/${company.picture}`}
          />
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Usługi:</strong> {company.services}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>Opinia:</strong> {company.rate}/5
          </Typography>
        </CardContent>
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Usługa</StyledTableCell>
                  <StyledTableCell align="right">Cena</StyledTableCell>
                  <StyledTableCell align="right">
                    Czas wykonania
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {services.map((service) => (
                  <StyledTableRow key={service._id}>
                    <StyledTableCell component="th" scope="row">
                      {service.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {service.price} zł
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {service.time} min
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardContent sx={{ textAlign: "center" }}>
          <ReservationForm
            employees={employees}
            services={services}
            reservations={reservations}
          />
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

export default CompanyItem;
