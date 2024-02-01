import { Button, Grid, Paper, Rating, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import classes from "../../styles/CompanyList.module.css";
import { StyledNavLink } from "../../styles/NavLink";

const CompanyList = () => {
  const company = useLoaderData() as CompanyType[];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12} textAlign={"center"}>
        <h1>{company[0].specialization}</h1>
      </Grid>
      {company.map((a) => (
        <Grid key={a._id} item xs={12} xl={12} textAlign={"center"}>
          <Paper elevation={3} className={classes.paper}>
            <img
              src={`../../assets/uploads/${a.picture}`}
              alt="placeholder"
              className={classes.image}
            />
            <div>
              <Typography variant="h5" gutterBottom>
                {a.name}
              </Typography>
              <Typography variant="body1">
                <Rating
                  name="text-feedback"
                  value={a.rate}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </Typography>
              <Typography variant="body2" pt={3}>
                <StyledNavLink to={`../${a._id}`}>
                  <Button variant="outlined">Umów wizyte</Button>
                </StyledNavLink>
              </Typography>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default CompanyList;
