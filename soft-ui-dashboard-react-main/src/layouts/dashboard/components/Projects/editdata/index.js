// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import tear from "assets/images/dot.png"

import { Button } from "@mui/material";

export default function data() {
  return {
    editcolumns: [
      { name: "goals", align: "left" },
      { name: "consumption", align: "center" },
      { name: "status", align: "center" },
      { name: "delete", align: "center"},
    ],

    editrows: [
      {
        goals: [tear, "Use up to 1000L of water for washing"],
        consumption: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            600L
          </SoftTypography>
        ),
        status: (
          <SoftBox width="15rem" textAlign="left">
            <SoftProgress value={60} color="info" variant="gradient" label={false} />
          </SoftBox>
        ),
        delete: (
          <Button variant="contained" color="error"
            sx={{
              '&:hover': {
                backgroundColor: 'red',
                boxShadow: 'none',
                color: 'white !important'}, 
            }}>Delete</Button>
        ),
      },
      {
        goals: [tear, "Use up to 20,000L in room shower facilities"],
        consumption: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            2000L
          </SoftTypography>
        ),
        status: (
          <SoftBox width="15rem" textAlign="left">
            <SoftProgress value={10} color="success" variant="gradient" label={false} />
          </SoftBox>
        ),
        delete: (
          <Button variant="contained" color="error"
            sx={{
              '&:hover': {
                backgroundColor: 'red',
                boxShadow: 'none',
                color: 'white !important'}, 
            }}>Delete</Button>
        ),
      },
      {
        goals: [tear, "Use up to 10,000L for flushing across hotel"],
        consumption: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            8000L
          </SoftTypography>
        ),
        status: (
          <SoftBox width="15rem" textAlign="left">
            <SoftProgress value={80} color="warning" variant="gradient" label={false} />
          </SoftBox>
        ),
        delete: (
          <Button variant="contained" color="error"
            sx={{
              '&:hover': {
                backgroundColor: 'red',
                boxShadow: 'none',
                color: 'white !important'}, 
            }}>Delete</Button>
        ),
      },
      {
        goals: [tear, "Use maximum 300L for management tap water usage"],
        consumption: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            350L
          </SoftTypography>
        ),
        status: (
          <SoftBox width="15rem" textAlign="left">
            <SoftProgress value={100} color="error" variant="gradient" label={false} />
          </SoftBox>
        ),
        delete: (
          <Button variant="contained" color="error"
            sx={{
              '&:hover': {
                backgroundColor: 'red',
                boxShadow: 'none',
                color: 'white !important'}, 
            }}>Delete</Button>
        ),
      },  
    ],
  };
}
