import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import bodyPartImg from "../assets/icons/body-part.png";
import targetImg from "../assets/icons/target.png";
import equipmentImg from "../assets/icons/equipment.png";

const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: bodyPartImg,
      name: bodyPart,
    },
    {
      icon: targetImg,
      name: target,
    },
    {
      icon: equipmentImg,
      name: equipment,
    },
  ];

  console.log(exerciseDetail);
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        padding: "20px",
      }}
      alignItems="center"
    >
      <img src={gifUrl} alt={name} className="detail-image" loading="lazy" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h1" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: "#fff2db", borderRadius: "50%" }}>
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography variant="h5" color="initial" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
