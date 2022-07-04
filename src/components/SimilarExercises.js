import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ marginTop: { lg: "110px", xs: "0px" } }}>
      <Typography variant="h3" color="initial">
        Exercise for{" "}
        <span
          style={{
            color: "#ff2625",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          Same Muscle Group
        </span>{" "}
      </Typography>
      <Stack direction="row" mt="40px" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader color={"#ff2625"} />
        )}
      </Stack>
      <Typography variant="h3" color="initial">
        Exercise for{" "}
        <span
          style={{
            color: "#ff2625",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          Same Equipment
        </span>{" "}
      </Typography>
      <Stack direction="row" mt="40px" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader color={"#ff2625"} />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
