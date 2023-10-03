import { ArrowBackIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Increase({ id, handleQuantity }: { id: string; handleQuantity: any }) {
  return (
    <IconButton aria-label="increase" onClick={() => handleQuantity(id, "-")} sx={{ m: 0, p: 0.5 }}>
      <ArrowBackIos />
    </IconButton>
  );
}

export default Increase;
