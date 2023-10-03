import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, Button, alpha, Box } from "@mui/material";
import { useAppDispatch } from "../context/hooks";
import { ShirtActions } from "../context/shirtReducer";
import { shirt } from "../context/shirt";
import { OrderActions } from "../context/order/orderReducer";

function Item(shirt: shirt) {
  const { id, price, title, url } = shirt;

  const dispatch = useAppDispatch();

  function handleView() {
    dispatch(ShirtActions.view(id));
  }
  function handleOrder() {
    dispatch(OrderActions.addOrder({ id, price, title, url, quantity: 1 }));
  }

  return (
    <>
      <Card sx={{ width: 300 }}>
        <CardHeader
          onClick={handleView}
          sx={{ p: 0, ":hover #quick": { bottom: 0 } }}
          avatar={
            <Box width={300} position={"relative"} overflow={"hidden"}>
              <Box
                id="quick"
                sx={(t) => ({
                  position: "absolute",
                  borderRadius: 0,
                  bottom: -30,
                  zIndex: 500,
                  transition: "ease-in",
                  bgcolor: "gray",
                  width: "100%",
                  height: "25px",
                  textAlign: "center",
                  color: "white",
                  ...t.typography.body2,
                  cursor: "pointer",
                  transitionDuration: (t) => t.transitions.duration.shortest + "ms",
                })}
                color="inherit"
              >
                Quick view
              </Box>
              <Avatar src={url + ".webp"} alt={title + " image"} variant="square" sx={{ width: "100%", height: 300, cursor: "pointer" }} />
            </Box>
          }
        />
        <CardContent sx={{ p: 1, pl: 2 }}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2">${price}</Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ bgcolor: "#000", color: "White", ":hover": { bgcolor: alpha("#000", 0.75) } }} fullWidth onClick={handleOrder}>
            Add to card
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Item;
