import * as React from "react";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import Cart from "../shopping-cart";
import style from "./style.module.scss";

import MenuItemFood from "../../base/menu-item-food";
// import { Container } from "@mui/system";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function MenuInTab({ menuData }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  return (
    <>
      <Box className={style.menuType}>
        {menuData.map((item, index) => {
          return (
            <Button key={index}>
              <img src={item.groupIcon} alt="منو" />
              {item.groupTitle}
            </Button>
          );
        })}
      </Box>
      <Box sx={{ bgcolor: "#f0f0f0", width: "100%" }}>
        <AppBar
          position="static"
          sx={{ bgcolor: "#f0f0f0", width: "100%", boxShadow: "none" }}
        >
          <Tabs
            sx={{
              color: "#444444",
              borderBottom: "1px solid lightgray",
              height: "55px",
            }}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            {/* {menuData.map((item, index) => {
              return (
                <Tab
                  label={item.category[index].categoryTitle}
                  {...a11yProps({ index })}
                />
              );
            })} */}

            <Tab label="انواع اسموتی" {...a11yProps(0)} />
            <Tab label="قهوه و شیک" {...a11yProps(1)} />
            <Tab label="دمنوش ها" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        {/* <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}> */}

        <Grid container>
          <Grid item md={8}>
            {menuData.map((cat, index) => {
              // console.log("*****subcat:", index, cat);

              return (
                <TabPanel
                  value={value}
                  index={index}
                  dir={theme.direction}
                  key={index}
                >
                  {cat.category.map((item, i) => {
                    // console.log("+++++nested:", index, item);
                    return (
                      <Box
                        key={i}
                        sx={{
                          direction: "rtl",
                          display: "flex",
                        }}
                      >
                        <MenuItemFood menuItem={item.subCategory} />
                      </Box>
                    );
                  })}
                </TabPanel>
              );
            })}
          </Grid>
          <Grid item md={4}>
            <Box>
              <Cart />
            </Box>
          </Grid>
        </Grid>

        {/* </SwipeableViews> */}
      </Box>
    </>
  );
}
