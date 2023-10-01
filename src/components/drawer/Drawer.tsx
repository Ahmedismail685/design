import Drawer, { drawerClasses } from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../context/hooks";
import { OrderActions } from "../context/order/orderReducer";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, IconButton, Stack } from "@mui/material";

export default function TemporaryDrawer() {
  const dispatch = useAppDispatch();
  const subtotal = useAppSelector((s) => s.order.subtotal);
  const items = useAppSelector((i) => i.order.items);

  const open = useAppSelector((s) => s.order.open);
  function handleOpen() {
    dispatch(OrderActions.show());
  }
  function handleQuantity(id: string, sign: string) {
    dispatch(OrderActions.changeQuantity({ id, sign }));
  }

  return (
    <Drawer
      open={open}
      onClose={handleOpen}
      anchor="right"
      sx={{ zIndex: (t) => t.zIndex.modal, [`.${drawerClasses.paper}`]: { width: 350 } }}
      variant="temporary"
    >
      <Box width={"100%"} bgcolor={"ActiveBorder"} color={"white"} position={"fixed"} top={0} zIndex={100}>
        <Box py={3} display={"flex"} alignItems={"center"} mx={2} mt={3}>
          <IconButton aria-label="close" onClick={handleOpen} sx={{ color: "white" }}>
            <ArrowBackIos />
          </IconButton>
          <Typography variant="h5" ml={9}>
            Cart
          </Typography>
        </Box>
      </Box>
      <Box p={4} pt={0} mt={12} pb={30}>
        {items.map((item) => (
          <div key={item.id}>
            <Stack direction={"row"} spacing={2} mt={5} mb={2}>
              <Box>
                <Avatar src={item.url + ".webp"} variant="square" sx={{ width: 100, height: 100 }} />
              </Box>
              <Box>
                <Typography variant="body1">{item.title}</Typography>
                <Typography variant="body2" fontWeight={"bolder"}>
                  ${item.price}
                </Typography>
                <Stack spacing={0.5} direction={"row"} mt={2} alignItems={"center"}>
                  <IconButton aria-label="increase" onClick={() => handleQuantity(item.id, "-")}>
                    <ArrowBackIos />
                  </IconButton>
                  <Typography variant="body2">{item.quantity}</Typography>
                  <IconButton aria-label="decrease" onClick={() => handleQuantity(item.id, "+")}>
                    <ArrowForwardIos />
                  </IconButton>
                </Stack>
              </Box>
            </Stack>
            <Divider />
          </div>
        ))}
      </Box>
      <Box position={"fixed"} bottom={100} bgcolor={"#fff"} width={"100%"} height={100} py={2}>
        <Typography variant="h5" ml={5}>
          Subtotal : <br />${subtotal}
        </Typography>
        <Divider />
      </Box>
      <Box position={"fixed"} bottom={0} bgcolor={"white"} width={"100%"} height={100}>
        <Button variant="contained" sx={{ width: 250, mt: 3.5, ml: 6 }}>
          view cart
        </Button>
      </Box>
    </Drawer>
  );
}
