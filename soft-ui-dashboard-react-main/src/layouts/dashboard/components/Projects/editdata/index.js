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

import { Button } from "@mui/material";

export default function data() {
  return {
    editcolumns: [
      { name: "goals", align: "left" },
      { name: "consumption", align: "center" },
      { name: "completion", align: "center" },
      { name: "delete", align: "center"},
    ],

    editrows: [
      {
        goals: [logoXD, "Soft UI XD Version"],
        consumption: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="12rem" textAlign="left">
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
        goals: [logoAtlassian, "Add Progress Track"],
        consumption: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="12rem" textAlign="left">
            <SoftProgress value={10} color="info" variant="gradient" label={false} />
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
        goals: [logoSlack, "Fix Platform Errors"],
        consumption: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Not set
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="12rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={false} />
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
        goals: [logoSpotify, "Launch our Mobile App"],
        consumption: (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $20,500
          </SoftTypography>
        ),
        completion: (
          <SoftBox width="12rem" textAlign="left">
            <SoftProgress value={100} color="success" variant="gradient" label={false} />
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
