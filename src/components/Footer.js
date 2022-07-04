import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px" pb="40px">
        <img src={logo} alt="logo" width="200px" height="40px" />
        <Typography variant="subtitle1" color="initial">
          Made with by ❤ Arnav Thakur
        </Typography>
      </Stack>
    </Box>
  );
};
export default Footer;
