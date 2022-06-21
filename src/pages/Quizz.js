import * as React from "react";
import Box from "@mui/material/Box";
import {
  Link as RouterLink,
  Outlet,
} from "react-router-dom";

export default function QuizResults() {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 3,
      }}
    >
      <Outlet />
    </Box>
  );
}
