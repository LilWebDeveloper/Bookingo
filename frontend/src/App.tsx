import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import {
  highRateCompanyLoader,
  hairdressersCompanyLoader,
  massagesCompanyLoader,
  beautySalonsLoader,
} from "./services/loaders/CompaniesLoader";
import Root from "./pages/Root";
import CompanyList from "./components/company/CompanyList";
import loginAction from "./services/actions/LoginAction";
import { tokenLoader } from "./utils/Token";
import { logoutAction } from "./services/actions/LogoutAction";
import CompanyItem from "./components/company/CompanyItem";
import CompanyLoader from "./services/loaders/CompanyLoader";
import UserReservations from "./components/reservation/UserReservations";
import ReservationLoader from "./services/loaders/ReservationsLoader";
import registerAction from "./services/actions/RegisterAction";
import RegisterForm from "./components/RegisterForm";

const router = createBrowserRouter([
  {
    id: "token-loader",
    loader: tokenLoader,
    children: [
      {
        path: "logout",
        action: logoutAction,
      },
      {
        path: "/",
        element: <Root />,
        action: loginAction,
        children: [
          {
            index: true,
            element: <Home />,
            loader: highRateCompanyLoader,
          },
          {
            path: "fryzjer",
            element: <CompanyList />,
            loader: hairdressersCompanyLoader,
          },
          {
            path: "salon-kosmetyczny",
            element: <CompanyList />,
            loader: beautySalonsLoader,
          },
          {
            path: "masaz",
            element: <CompanyList />,
            loader: massagesCompanyLoader,
          },
          {
            path: ":companyId",
            element: <CompanyItem />,
            loader: CompanyLoader,
          },
          {
            path: "rezerwacje",
            element: <UserReservations />,
            loader: ReservationLoader,
          },
          {
            path: "zarejestrujsie",
            element: <RegisterForm />,
            action: registerAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
