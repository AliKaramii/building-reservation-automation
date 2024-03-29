import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["انتخاب ", "ورود اطلاعات ", " بررسی و پرداخت"];

function FormStepper({ activeStep }) {
  return (
    <Box sx={{ width: "100%", direction: "ltr", paddingBottom: "6vh" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default FormStepper;
