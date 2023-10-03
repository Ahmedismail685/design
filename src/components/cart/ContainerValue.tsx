import { Stack } from "@mui/material";
import Decrease from "./Decrease";
import Increase from "./Increase";
import QuantityFelid from "./QuantityFelid";

function ContainerValue({ id, handleQuantity, quantity = 1 }: { id: string; quantity: number; handleQuantity: any }) {
  return (
    <Stack spacing={0.5} direction={"row"} mt={2} alignItems={"center"}>
      <Increase handleQuantity={handleQuantity} id={id} />
      <QuantityFelid handleQuantity={handleQuantity} id={id} quantity={quantity} />
      <Decrease handleQuantity={handleQuantity} id={id} />
    </Stack>
  );
}

export default ContainerValue;
