import React from "react";
import UserPanelLayout from "../../../components/layout/user-panel";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import phoneBookIcon from "../../../assets/svg/user-panel-phone-book.svg";
import TextBoxLined from "../../../components/base/text-box-lined";
import PhoneBookModal from "./phone-book-modal";

const pageTitle = { icon: phoneBookIcon, title: "دفترچه تلفن" };

const PhoneBookPage = () => {
  return (
    <>
      <Box>
        <UserPanelLayout pageTitle={pageTitle}>
          <Container>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} md={4} item>
                <PhoneBookModal>
                  <TextBoxLined />
                </PhoneBookModal>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <PhoneBookModal>
                  <TextBoxLined />
                </PhoneBookModal>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <PhoneBookModal>
                  <TextBoxLined />
                </PhoneBookModal>
              </Grid>
              <Grid xs={12} sm={6} md={4} item>
                <PhoneBookModal>
                  <TextBoxLined />
                </PhoneBookModal>
              </Grid>
            </Grid>
          </Container>
        </UserPanelLayout>
      </Box>
    </>
  );
};

export default PhoneBookPage;
