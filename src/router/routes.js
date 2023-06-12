import pathes from "./pathes";
import Login from "../pages/login";
import HomePage from "../pages/home-page";
import CheckoutPage from "../pages/checkout";
import ReceiptPage from "../pages/receipt";
import CafeIntroSelectionPage from "../modules/cafe/cafe-intro-selection-page.jsx";
import CafeReservationPage from "../modules/cafe/cafe-reservation-page.jsx";
import VenueIntroSelectionPage from "../modules/venue/venue-intro-selection-page";
import VenueReservationPage from "../modules/venue/venue-reservation-page.jsx";
import NotFoundPage from "../pages/not-found";
import CafeFormSecondStepPage from "../modules/cafe/form-step-2-page";
import VenueFormStepPage from "../modules/venue/form-step-page";

export const routesList = [
  {
    name: "LOGIN",
    path: pathes.LOGIN,
    component: Login,
    exact: true,
    needAuth: false,
  },
  {
    name: "HOMEPAGE",
    path: pathes.HOMEPAGE,
    component: HomePage,
    exact: true,
    needAuth: false,
  },
  {
    name: "CAFERESERVATIONDATA",
    path: pathes.CAFERESERVATIONDATA,
    component: CafeFormSecondStepPage,
    exact: true,
    needAuth: false,
  },
  {
    name: "VENUERESERVATIONDATA",
    path: pathes.VENUERESERVATIONDATA,
    component: VenueFormStepPage,
    exact: true,
    needAuth: false,
  },
  {
    name: "CHECKOUT",
    path: "/checkout",
    component: CheckoutPage,
    exact: true,
    needAuth: false,
  },
  {
    name: "RECEIPT",
    path: "/receipt",
    component: ReceiptPage,
    exact: true,
    needAuth: false,
  },
  {
    name: "CAFEINTROSELECTION",
    path: pathes.CAFEINTROSELECTION,
    component: CafeIntroSelectionPage,
    exact: true,
    needAuth: false,
  },
  // {
  //   name: "CAFERESERVATION",
  //   path: pathes.CAFERESERVATION,
  //   component: CafeReservationPage,
  //   exact: true,
  //   needAuth: false,
  // },

  {
    name: "VENUEINTROSELECTION",
    path: pathes.VENUEINTROSELECTION,
    component: VenueIntroSelectionPage,
    exact: true,
    needAuth: false,
  },
  {
    name: "NOTFOUND",
    path: pathes.NOTFOUND,
    component: NotFoundPage,
    exact: true,
    needAuth: false,
  },
];

export const routesParamList = [
  {
    name: "CAFERESERVATION",
    path: pathes.CAFERESERVATION,
    component: CafeReservationPage,
    exact: true,
    needAuth: false,
  },
  {
    name: "VENUERESERVATION",
    path: pathes.VENURESERVATION,
    component: VenueReservationPage,
    exact: true,
    needAuth: false,
  },
];
