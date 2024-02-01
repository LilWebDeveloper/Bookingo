import { styled } from "@mui/material/styles";

export const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: "center",
    fontSize: '1.2rem'
  }));

export const Menu = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "rgba(0, 0, 0, 0.6)",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    button: {
        fontSize: '0.8em',
        "@media (min-width:1300px)": {
            fontSize: '1.1em'
        },
        "&:hover": {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            color: '#000'
        }
    },
  }));