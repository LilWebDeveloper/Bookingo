import { Grid } from "@mui/material";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Grid item sx={{ backgroundColor: "black", height: "4rem", mt: 'auto'}}>
      <Copyright />
    </Grid>
  );
};

export default Footer;
