import { Box, Typography, Stack } from "@mui/material";
import Decrease from "./Decrease";
import Increase from "./Increase";
import QuantityFelid from "./QuantityFelid";

function Description({ id, handleQuantity, quantity, title, price }: { id: string; quantity: number; title: string; price: number; handleQuantity: any }) {
  return (
    <Box>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body2" fontWeight={"bolder"}>
        ${price}
      </Typography>
      <Stack spacing={0.5} direction={"row"} mt={2} alignItems={"center"}>
        <Increase handleQuantity={handleQuantity} id={id} />
        <QuantityFelid handleQuantity={handleQuantity} id={id} quantity={quantity} />
        <Decrease handleQuantity={handleQuantity} id={id} />
      </Stack>
    </Box>
  );
}

export default Description;
