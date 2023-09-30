import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, Button, alpha, Box } from "@mui/material";
import { useAppDispatch } from "../context/hooks";
import { ShirtActions } from "../context/shirtReducer";
import { shirt } from "../context/shirt";

function Item(shirt: shirt) {
  const { id, price, title, url } = shirt;

  const dispatch = useAppDispatch();

  function handleView() {
    dispatch(ShirtActions.view(id));
  }

  return (
    <>
      <Card sx={{ width: 300, ":hover #quick": { bottom: 0 } }} onClick={handleView}>
        <CardHeader
          sx={{ p: 0 }}
          avatar={
            <Box width={300} position={"relative"} overflow={"hidden"}>
              <Avatar src={url + ".webp"} alt={title + " image"} variant="square" sx={{ width: "100%", height: 300 }} />
              <Button
                id="quick"
                sx={{
                  position: "absolute",
                  borderRadius: 0,
                  bottom: -30,
                  transition: "ease-in",
                  transitionDuration: (t) => t.transitions.duration.shortest + "ms",
                }}
                disableElevation
                size="small"
                color="inherit"
                variant="contained"
                fullWidth
              >
                Quick view
              </Button>
            </Box>
          }
        />
        <CardContent sx={{ p: 1, pl: 2 }}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2">${price}</Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ bgcolor: "#000", color: "White", ":hover": { bgcolor: alpha("#000", 0.75) } }} fullWidth>
            Add to card
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Item;
