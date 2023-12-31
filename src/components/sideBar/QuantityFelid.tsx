import { TextField } from "@mui/material";

function QuantityFelid({ id, handleQuantity, quantity }: { quantity: number; id: string; handleQuantity: any }) {
  //

  return (
    <TextField
      id="quantity"
      type="text"
      value={quantity}
      onChange={(e) => handleQuantity(id, Number(e.target.value))}
      size="small"
      variant="standard"
      sx={{ p: 0, m: 0, width: 50 }}
    />
  );
}

export default QuantityFelid;
