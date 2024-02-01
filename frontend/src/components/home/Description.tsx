import { Grid } from "@mui/material";
import { Content, Image } from "../../styles/Content";
import classes from '../../styles/Photo.module.css'

function Description() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={6}>
          <Content>
            <h1>Umów się online</h1>
            <p>
              Planujesz wizytę u fryzjera, barbera, stylistki paznokci lub w
              salonie masażu? Poszukujesz profesjonalistów, którzy zadbasz o
              Twoją brodę, brwi lub zapewnią relaksujący masaż?{" "}
            </p>
            <p>
              Bookingo, darmowa aplikacja do rezerwacji, ułatwia znalezienie
              wolnego terminu i wygodne umówienie się na wizytę. Bez
              konieczności dzwonienia, teraz możesz rezerwować w dowolnym czasie
              i miejscu.
            </p>
            <p>Odkrywaj nowe miejsca w okolicy i planuj wizyty z Bookingo!</p>
          </Content>
        </Grid>
        <Grid item xs={12} xl={6}>
          <Image>
            <img src="../../assets/umówsieonline.png" className={classes.img} />
          </Image>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction={{ xs: "column-reverse", xl: "row" }}
      >
        <Grid item xs={12} xl={6}>
          <Image>
            <img src="../../assets/cościwypadło.png" className={classes.img} />
          </Image>
        </Grid>
        <Grid item xs={12} xl={6}>
          <Content>
            <h1>Coś ci wypadło? Nie szkodzi!</h1>
            <p>
              Ściągnij Bookingo – bezpłatną aplikację do rezerwacji – i
              efektywnie zarządzaj swoimi wizytami, niezależnie od miejsca, w
              którym się znajdujesz. Dostosuj daty i godziny swoich wizyt lub
              zrezygnuj z nich, bez potrzeby dzwonienia.
            </p>
            <p>
              Zdajemy sobie sprawę, że każdego dnia masz pełne ręce roboty,
              dlatego wysyłamy regularne przypomnienia o nadchodzących wizytach.
              Dzięki nim z łatwością utrzymasz kontrolę nad swoim kalendarzem i
              nigdy nie przegapisz ważnego terminu!
            </p>
          </Content>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} xl={6}>
          <Content>
            <h1>Najlepsi specjaliści w okolicy</h1>
            <p>
              W Bookingo odkryjesz najlepsze salony w dziedzinie zdrowia i urody
              w Twojej okolicy.
            </p>
            <p>
              Zapoznaj się z ich profilami na platformie Bookingo, przeczytaj
              recenzje innych klientów oraz przejrzyj ich portfolio. Dzięki
              Bookingo oszczędzisz czas, a proces rezerwacji wizyt stanie się
              niezwykle łatwy i bezpłatny.
            </p>
            <p>
              Nie martw się o nic – Bookingo umożliwia Ci szybkie i
              bezproblemowe umawianie się na wizyty!
            </p>
          </Content>
        </Grid>
        <Grid item xs={12} xl={6}>
          <Image>
            <img src="../../assets/specjalisci.png" className={classes.img} />
          </Image>
        </Grid>
      </Grid>
    </>
  );
}

export default Description;
