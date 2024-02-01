
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material";
import { buttonTheme } from "../../styles/Button";
import { StyledNavLink } from "../../styles/NavLink";

function ServicesList() {
  return (
    <ThemeProvider theme={buttonTheme}>
      <Stack spacing={7} direction="row" justifyContent={"center"}>
        <StyledNavLink to="fryzjer">
          <Button variant="text">Fryzjer</Button>
        </StyledNavLink>
        <StyledNavLink to="salon-kosmetyczny">
          <Button variant="text">Salon kosmetyczny</Button>
        </StyledNavLink>
        <StyledNavLink to="masaz">
          <Button variant="text">Masaż</Button>
        </StyledNavLink>
      </Stack>
    </ThemeProvider>
  );
}

export default ServicesList;
