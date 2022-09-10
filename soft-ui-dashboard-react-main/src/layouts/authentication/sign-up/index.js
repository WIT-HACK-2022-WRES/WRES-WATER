/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

// width
import { sizing } from "@mui/system";

function SignUp() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  function calculateWaterFootprint() {
    let meteredValue = parseInt(document.getElementById("metered").value);
    let unmeteredValue = parseInt(document.getElementById("unmetered").value);
    let externalValue = parseInt(document.getElementById("external").value);
    let laundryValue = parseInt(document.getElementById("laundry").value);
    let toiletsValue = parseInt(document.getElementById("toilets").value);
    let greeneryValue = parseInt(document.getElementById("greenery").value);

    localStorage.setItem("meteredValue", meteredValue);
    localStorage.setItem("unmeteredValue", unmeteredValue);
    localStorage.setItem("externalValue", externalValue);
    localStorage.setItem("laundryValue", laundryValue);
    localStorage.setItem("toiletsValue", toiletsValue);
    localStorage.setItem("greeneryValue", greeneryValue);

    let total =
      meteredValue + unmeteredValue + externalValue + laundryValue + toiletsValue + greeneryValue;
    console.log(total);
  }

  return (
    <BasicLayout
      title="Welcome to WRES WATER!"
      description="Calculate your water footprint and get a personalized water saving plan for your company."
      image={curved6}
    >
      <Card sx={{ width: 500 }} mr={300}>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Enter information about your water usage
          </SoftTypography>
        </SoftBox>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}></SoftBox>
            <SoftBox mb={2}>
              <SoftTypography variant="caption" fontWeight="light">
                How much metered water was used from the municipal supply?
              </SoftTypography>
              <SoftInput id="metered" type="number" />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="caption" fontWeight="light">
                How much unmetered water was used from the municipal supply?
              </SoftTypography>
              <SoftInput id="unmetered" type="number" />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="caption" fontWeight="light">
                How much water was delivered from an external source?
              </SoftTypography>
              <SoftInput id="external" type="number" />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="caption" fontWeight="light">
                How much water is used in outsourced laundry?
              </SoftTypography>
              <SoftInput id="laundry" type="number" />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="caption" fontWeight="light">
                How many toilets are on premise?
              </SoftTypography>
              <SoftInput id="toilets" type="email" />
            </SoftBox>

            <SoftBox mb={2}>
              <SoftTypography variant="caption" fontWeight="light">
                Estimate the surface area of greenery that needs to be watered
              </SoftTypography>
              <SoftInput id="greenery" type="number" />
            </SoftBox>

            <SoftBox mt={4} mb={1}>
              <SoftButton
                component={Link}
                to="/profile"
                onClick={calculateWaterFootprint}
                variant="gradient"
                color="dark"
                fullWidth
              >
                calculate
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
