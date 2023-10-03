import { ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Decrease({ id, handleQuantity }: { id: string; handleQuantity: any }) {
  return (
    <IconButton aria-label="decrease" onClick={() => handleQuantity(id, "+")} sx={{ m: 0, p: 0.5 }}>
      <ArrowForwardIos />
    </IconButton>
  );
}

export default Decrease;
