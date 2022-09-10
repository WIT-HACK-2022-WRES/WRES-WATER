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

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import LightbulbIcon from '@mui/icons-material/Lightbulb';

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import ivancik from "assets/images/ivancik.jpg";

function Strategies() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox position="relative" height="100%" p={2}>
        <SoftBox
          display="flex"
          flexDirection="column"
          height="100%"
          py={2}
          px={2}
          borderRadius="lg"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${ivancik})`,
            backgroundSize: "cover",
          }}
        >
          <SoftBox mb={3} pt={1}>
            <SoftTypography variant="h5" color="white" fontWeight="bold">
              Strategies to decrease water consumption
            </SoftTypography>
          </SoftBox>
          <SoftBox sx={{backgroundColor: "white"}}>
            <SoftBox mb={3}>
              <SoftTypography variant="body2" color="white" mb={1}>
                Implement graywater systems where wastewater from laundry, dishwashing, bathing, etc. is treated and recycled to be used for irrigation and toilet flushing.
              </SoftTypography>
              <SoftBox sx={{display: "flex"}}>
                <LightbulbIcon sx={{color: "yellow"}}/>
                <SoftTypography variant="body2" color="white" px={1}>
                  Up to 50% of graywater can be reused after treatment
                </SoftTypography>
              </SoftBox>
            </SoftBox>
            <SoftBox mb={3} sx={{backgroundColor: "white"}}>
              <SoftTypography variant="body2" color="white" mb={1}>
                Install aerated shower heads which blends water with air creating larger droplets and a more luxurious feeling.
              </SoftTypography>
              <SoftBox sx={{display: "flex"}}>
                <LightbulbIcon sx={{color: "yellow"}}/>
                <SoftTypography variant="body2" color="white" px={1}>
                  Reduces water by 50%
                </SoftTypography>
              </SoftBox>
            </SoftBox>
            <SoftBox mb={3} sx={{backgroundColor: "white"}}>
              <SoftTypography variant="body2" color="white" mb={1}>
                Change landscape to low-water-consumption plants or native species that do not require as much human intervention.
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Strategies;
