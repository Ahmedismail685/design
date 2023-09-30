import { ReactNode } from "react";
import { Box } from "@mui/material";

function Body({ children }: { children: ReactNode }) {
  return <Box sx={{ display: "flex", justifyContent: "center", width: "100%", height: 850 }}>{children}</Box>;
}

export default Body;
