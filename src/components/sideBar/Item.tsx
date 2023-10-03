import { Stack } from "@mui/material";
import { ReactNode } from "react";

function Item({ children }: { children: ReactNode }) {
  return (
    <Stack direction={"row"} spacing={2} mt={5} mb={2}>
      {children}
    </Stack>
  );
}

export default Item;
