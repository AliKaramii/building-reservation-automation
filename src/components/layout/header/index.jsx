import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import AppLogo from "../../../assets/svg/app-logo.svg";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <header className={style.appHeader}>
      {/* {children} */}
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3} className={style.logo}>
            <Link to="/">
              <img src={AppLogo} alt="AppLogo" />
            </Link>
          </Grid>
          <Grid item xs={6} className={style.headerSections}>
            <Typography component="h2" className={style.title}>
              سامانه مدیریت برج مهر آفرین
            </Typography>
          </Grid>
          <Grid item xs={3} className={style.profile}>
            PROFILE
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;