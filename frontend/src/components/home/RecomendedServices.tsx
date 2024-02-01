import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import classes from "../../styles/Swiper.module.css";
import { Navigation } from "swiper/modules";
import { Grid } from "@mui/material";
import CompanyCard from "./CompanyCard";

function RecomendedServices(companies: RecomendedCompany) {
  const data = companies.companies;

  return (
    <>
      <Grid item xs={12} xl={12} textAlign={"center"}>
        <h1>Najlepsze salony w Bookingo</h1>
      </Grid>
      <Grid m={"2em"}>
        <Swiper
          className={classes.slide}
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={3}
          navigation
        >
          {data.map((company) => (
            <SwiperSlide key={company._id} className={classes.swiperSlide}>
              <CompanyCard company={company} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </>
  );
}

export default RecomendedServices;
