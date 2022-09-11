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
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import data from "layouts/dashboard/components/Projects/data";
import editdata from "layouts/dashboard/components/Projects/editdata";
import { Button } from "@mui/material";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Projects() {
  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { columns, rows } = data();
  const { editcolumns, editrows } = editdata();
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SoftBox>
          <SoftTypography variant="h5" color="black" fontWeight="bold">
            Goals
          </SoftTypography>
          <SoftBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>3 done</strong> this month
            </SoftTypography>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { error } }) => error.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <SoftTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>1 failed</strong> this month
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox color="text" px={2}>
          <Button onClick={handleOpen} >Edit</Button>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={style}>
              <SoftTypography variant="h5" color="black" fontWeight="bold">
                Current Goals
              </SoftTypography>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={editcolumns} rows={editrows} />
              </SoftBox>
              <br></br>
              <SoftTypography variant="h5" color="black" fontWeight="bold" marginBottom="5px">
                Add Goals
              </SoftTypography>
              <Box display='flex' justifyContent='flex-start' flexDirection='row' gap="30px">
                <TextField id="standard-basic" variant="standard" placeholder="name of goal" />
                <TextField id="standard-basic" variant="standard" placeholder="goal consumption" />
                <Button variant="contained" color="info"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'green',
                      boxShadow: 'none',
                      color: 'white !important'}, 
                  }}>Add
                </Button>
              </Box>
              <br></br>
              <SoftTypography variant="h5" color="black" fontWeight="bold" marginBottom="10px">
                Suggested Goals
              </SoftTypography>
              <Box display='flex' flexDirection='column' gap="15px">
                <Box display='flex' justifyContent='space-between' flexDirection='row' gap="30px">
                  <SoftTypography variant="h6" color="text" fontWeight="medium">
                    Recycle at least 30% of rainwater collected for pool facilities
                  </SoftTypography>
                  <Button variant="contained" color="info"
                    sx={{
                      '&:hover': {
                        backgroundColor: 'green',
                        boxShadow: 'none',
                        color: 'white !important'}, 
                    }}>Add
                  </Button>
                </Box>
                <Box display='flex' justifyContent='space-between' flexDirection='row' gap="30px">
                  <SoftTypography variant="h6" color="text" fontWeight="medium">
                    Use up to 300L of water for cooking and drinks in the main kitchen
                  </SoftTypography>
                  <Button variant="contained" color="info"
                    sx={{
                      '&:hover': {
                        backgroundColor: 'green',
                        boxShadow: 'none',
                        color: 'white !important'}, 
                    }}>Add
                  </Button>
                </Box>
                <Box display='flex' justifyContent='space-between' flexDirection='row' gap="30px">
                  <SoftTypography variant="h6" color="text" fontWeight="medium">
                    Recycle at least 100L of shower and bath water for toilet flush usage
                  </SoftTypography>
                  <Button variant="contained" color="info"
                    sx={{
                      '&:hover': {
                        backgroundColor: 'green',
                        boxShadow: 'none',
                        color: 'white !important'}, 
                    }}>Add
                  </Button>
                </Box>
              </Box>
            </Box>
          </Modal>
        </SoftBox>
        {renderMenu}
      </SoftBox>
      <SoftBox
        sx={{
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor}`,
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} />
      </SoftBox>
    </Card>
  );
}

export default Projects;
