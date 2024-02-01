import Description from "../components/home/Description";
import RecomendedServices from "../components/home/RecomendedServices";
import { useLoaderData } from "react-router-dom";

function Home() {
  const companies = useLoaderData() as CompanyType[]
  
  return (
    <>
      <RecomendedServices companies={companies}/>
      <Description />
    </>
  );
}

export default Home;
