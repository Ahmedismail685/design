import { Box, Typography, Divider, Button } from "@mui/material";
import { useAppDispatch } from "../context/hooks";
import { OrderActions } from "../context/order/orderReducer";
import { ShirtActions } from "../context/shirtReducer";

function Footer({ subtotal }: { subtotal: number }) {
  const dispatch = useAppDispatch();

  function handleCartOpen() {
    dispatch(OrderActions.show({ state: "cart" }));
    dispatch(ShirtActions.view());
  }
  return (
    <>
      <Box position={"fixed"} bottom={100} bgcolor={"#fff"} width={"100%"} height={100} py={2}>
        <Typography variant="h5" ml={5}>
          Subtotal : <br />${subtotal}
        </Typography>
        <Divider />
      </Box>
      <Box position={"fixed"} bottom={0} bgcolor={"white"} width={"100%"} height={100}>
        <Button variant="contained" sx={{ width: 250, mt: 3.5, ml: 6 }} onClick={handleCartOpen}>
          view cart
        </Button>
      </Box>
    </>
  );
}

export default Footer;
