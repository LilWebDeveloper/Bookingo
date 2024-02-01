import { Grid } from "@mui/material";
import ServicesList from "./ServicesList";
import { Menu } from "../../styles/NavBar";
import videoClasses from "../../styles/Video.module.css";
import SearchBar from "./SearchBar";
import HomeTitle from "./HomeTitle";
import HeaderBaner from "./HeaderBaner";

function Baner() {
  return (
    <Grid container spacing={2}>
      <Grid item md={12} className={videoClasses.content}>
        <video
          className={videoClasses.video}
          autoPlay
          muted
          loop
          id="video-background"
        >
          <source src="../../assets/Horizontal_PL_1.webm" type="video/webm" />
        </video>
        <Menu className={videoClasses.content}>
          <HeaderBaner />
        </Menu>
        <Menu className={videoClasses.content}>
          <HomeTitle />
        </Menu>
        <Menu className={videoClasses.content}>
          <SearchBar />
        </Menu>
        <Menu className={videoClasses.content}>
          <ServicesList />
        </Menu>
      </Grid>
    </Grid>
  );
}

export default Baner;
