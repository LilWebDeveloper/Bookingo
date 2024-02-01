import { createTheme } from "@mui/material";


export const Theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "::-webkit-scrollbar": {
            display: 'none'
          }
        },
      },
    },

  },
});
