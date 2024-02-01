import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarIcon from '@mui/icons-material/Star';
import { CardActionArea, Rating } from "@mui/material";
import { StyledNavLink } from "../../styles/NavLink";

const CompanyCard = (company: CompaniesType) => {
  const data = company.company;
  return (
    <Card sx={{ maxWidth: "16.5em", textDecoration: "none" }}>
      <StyledNavLink to={data._id}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`../../assets/uploads/${data.picture}`}
            alt="green iguana"
            sx={{maxHeight: "14em"}}
          />
          <CardContent sx={{height: '7.5rem'}}>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Rating
                name="text-feedback"
                value={data.rate}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledNavLink>
    </Card>
  );
};

export default CompanyCard;
