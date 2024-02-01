import { styled } from "@mui/material/styles";

export const Content = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  paddingBottom: theme.spacing(5),
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(20),
  paddingRight: theme.spacing(20),
  "@media (max-width:1535px)": {
    paddingLeft: theme.spacing(25),
    paddingRight: theme.spacing(25),
  },
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  textAlign: "justify",
  color: theme.palette.primary.main,
  fontSize: 20,
}));

export const Image = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  textAlign: "center",
}));
