import { Outlet } from "react-router-dom";
import Baner from "../components/header/Baner";
import Footer from "../components/footer/Footer";
import { Box } from "@mui/material";

const Root = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight:'100vh'}}>
      <Baner />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Root
