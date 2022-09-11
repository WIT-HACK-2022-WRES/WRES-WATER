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

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import ivancik from "assets/images/ivancik.jpg";
import tear from "./tear.png";

function WorkWithTheRockets() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" flexDirection="column" position="relative" height="100%" p={2}>
        <SoftBox mb={3} pt={1}>
          <SoftTypography variant="h5" color="black" fontWeight="bold">
            My Water Footprint
          </SoftTypography>
        </SoftBox>
        <SoftBox
          height="70%"
          py={10}
          px={10}
          borderRadius="lg"
          sx={{
            backgroundImage: `url(${tear})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></SoftBox>
        <SoftBox>
          <SoftTypography
            component="a"
            href="#"
            variant="button"
            color="black"
            fontWeight="medium"
            sx={{
              mt: "auto",
              mr: "auto",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          >
            Read More
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default WorkWithTheRockets;
