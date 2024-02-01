import { useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import classes from "../../styles/HeaderBaner.module.css";
import {
  Form,
  Link,
  useNavigation,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import { StyledNavLink } from "../../styles/NavLink";
import { getTokenDuration } from "../../utils/Token";

const HeaderBaner = () => {
  const [open, setOpen] = useState(false);
  const token: unknown | string = useRouteLoaderData("token-loader");
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={6} xl={6} className={classes.logo}>
          <StyledNavLink to="/">
            <img className={classes.logoIMG} src="../../assets/logo.png" />
          </StyledNavLink>
        </Grid>
        <Grid item xs={6} xl={6} className={classes.login}>
          {!token ? (
            <Button
              color={"secondary"}
              variant="text"
              onClick={handleClickOpen}
            >
              Zaloguj się / Zarejestruj się
            </Button>
          ) : (
            <>
              <Form action="/logout" method="post">
                <StyledNavLink to={"rezerwacje"}>
                  <Button
                    color={"secondary"}
                    variant="outlined"
                    sx={{ marginRight: "1em" }}
                  >
                    Móje rezerwacje
                  </Button>
                </StyledNavLink>
                <Button type="submit" color={"secondary"} variant="outlined">
                  Wyloguj się
                </Button>
              </Form>
            </>
          )}
          <Dialog open={open} onClose={handleClose}>
            <DialogActions>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Zaloguj się
                </Typography>
                <Form method="post">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="login"
                    label="Login"
                    name="login"
                    autoComplete="login"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Hasło"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Button
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: "primary",
                    }}
                    type="submit"
                    fullWidth
                    onClick={handleClose}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    {isSubmitting ? "Logowanie..." : "Zaloguj się"}
                  </Button>
                </Form>
                <Typography textAlign={"center"}>
                  <span>Lub</span>
                </Typography>
                <Link to='zarejestrujsie'>
                  <Button
                    style={{
                      backgroundColor: "primary",
                    }}
                    type="submit"
                    fullWidth
                    onClick={handleClose}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Zarejestruj się
                  </Button>
                </Link>
              </Box>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderBaner;
