import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

function Description({ title, price, children }: { title: string; price: number; children: ReactNode }) {
  return (
    <Box>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body2" fontWeight={"bolder"}>
        ${price}
      </Typography>
      {children}
    </Box>
  );
}

export default Description;
