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

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function PlatformSettings() {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <Card>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Personalised Suggestions
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          low-flow toilets 🚽
        </SoftTypography>
        <SoftBox mt={1}>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Low-flow toilets use no more than six litres of water per flush and reduce water usage
              by as much as 30%
            </SoftTypography>
          </SoftBox>
        </SoftBox>

        <SoftBox mt={3}>
          <SoftTypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            Aerated shower heads 🚿
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={1}>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Blends water with air, creating larger droplets and a more luxurious feeling … reduces
              water by 50%.
            </SoftTypography>
          </SoftBox>
        </SoftBox>

        <SoftBox mt={3}>
          <SoftTypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            Native Plants 🌱
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={1}>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Change landscape to low-water-consumption plants or native species that do not require
              as much human intervention.
            </SoftTypography>
          </SoftBox>
        </SoftBox>

        <SoftBox mt={3}>
          <SoftTypography
            variant="caption"
            fontWeight="bold"
            color="text"
            textTransform="uppercase"
          >
            graywater systems 💧
          </SoftTypography>
        </SoftBox>
        <SoftBox mt={1}>
          <SoftBox width="80%" ml={2}>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              Implement graywater systems where wastewater from laundry, dishwashing, bathing, etc.
              is treated and recycled to be used for irrigation and toilet flushing.
            </SoftTypography>
          </SoftBox>
        </SoftBox>

        <SoftBox display="flex" py={1} mb={0.25}></SoftBox>
      </SoftBox>
    </Card>
  );
}

export default PlatformSettings;
