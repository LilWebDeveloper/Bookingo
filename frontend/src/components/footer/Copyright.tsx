import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyright = () => {
    return (
      <Typography
        variant="body2"
        color="primary.contrastText"
        align="center"
        sx={{pt: '1.2rem'}}
      >
        {"Copyright © "}
        <Link color="primary.contrastText" href="https://github.com/LilWebDeveloper">
          Website by Bookingo
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  export default Copyright
