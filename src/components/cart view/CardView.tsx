import { Box, Typography, Divider, IconButton, Button } from "@mui/material";
import ItemImage from "../cart/ItemImage";
import { Close } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../context/hooks";
import { OrderActions } from "../context/order/orderReducer";
import ContainerValue from "../cart/ContainerValue";

function CardView() {
  const {
    items,
    summary: { country, deliver, subtotal, total },
  } = useAppSelector((s) => s.order);

  const dispatch = useAppDispatch();

  function handleQuantity(id: string, sign: string, value = 1) {
    dispatch(OrderActions.changeQuantity({ id, sign, value }));
  }
  return (
    <Box
      position={"absolute"}
      p={"10% 0 0 20%"}
      top={70}
      bgcolor={"white"}
      height={"calc(100% - 70px)"}
      width={"100%"}
      boxSizing={"border-box"}
      display={"flex"}
    >
      <Box width={"45%"} mr={3}>
        <Typography variant="h5" mb={2}>
          My cart
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {/* header end */}

        {items.map(({ color, id, price, quantity, size, title, total, url }) => (
          <Box display={"flex"} my={3}>
            <ItemImage url={url} id={id} />
            <Box ml={2} width={"100%"}>
              <Box display={"flex"} mb={1} alignItems={"center"}>
                <Typography variant="body1" flexGrow={1}>
                  {title}
                </Typography>
                <ContainerValue id={id} quantity={quantity} handleQuantity={handleQuantity} />
                <Typography variant="body1" mx={2}>
                  ${total}
                </Typography>
                <IconButton aria-label="close">
                  <Close />
                </IconButton>
              </Box>
              <Typography variant="body2" fontWeight={"bolder"}>
                ${price}
              </Typography>
              <Typography variant="body2">Size : {size}</Typography>
              <Typography variant="body2">Color : {color}</Typography>
            </Box>
            <Divider />
          </Box>
        ))}
      </Box>

      {/*  oder summary  */}
      <Box width={"25%"}>
        <Typography variant="h5" mb={2}>
          Order summary
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box display={"flex"} justifyContent={"space-between"} mb={2}>
          <Typography>Subtotal</Typography>
          <Typography>${subtotal}</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} mb={1}>
          <Typography>Deliver</Typography>
          <Typography>{deliver === 0 ? "FREE" : deliver}</Typography>
        </Box>
        <Typography sx={{ textDecoration: "underline" }}>{country}</Typography>
        <Divider sx={{ my: 2 }} />
        <Box display={"flex"} justifyContent={"space-between"} mb={3}>
          <Typography>Total</Typography>
          <Typography>${total}</Typography>
        </Box>
        <Button variant="contained" sx={{ width: "80%", ml: "10%" }}>
          Checkout
        </Button>
      </Box>
    </Box>
  );
}

export default CardView;
