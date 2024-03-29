import React from "react";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import AppLogo from "../../../assets/svg/app-logo.svg";
import UserProfileMenu from "../../common/user-profile-menu";
import style from "./style.module.scss";
import { theme } from "../../../assets/themes/theme";

const HeaderLayout = () => {
  return (
    <header className={style.appHeader}>
      <Container xs={12}>
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
            <UserProfileMenu color={theme.palette.text.light} />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default HeaderLayout;
