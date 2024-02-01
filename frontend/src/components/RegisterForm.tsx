import { Box, Button, TextField, Typography } from "@mui/material";
import { Form, useNavigate, useNavigation } from "react-router-dom";

const RegisterForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();

  const routeChange = () => {
    let path = "../";
    navigate(path);
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        height: "",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Zarejestruj się
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
          onClick={routeChange}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {isSubmitting ? "Rejestrowanie..." : "Zarejestruj się"}
        </Button>
      </Form>
    </Box>
  );
};

export default RegisterForm;
