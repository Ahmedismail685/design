import { Box, Avatar } from "@mui/material";
import { useAppDispatch } from "../context/hooks";
import { ShirtActions } from "../context/shirtReducer";
import { OrderActions } from "../context/order/orderReducer";

function ItemImage({ url, id }: { id: string; url: string }) {
  const dispatch = useAppDispatch();
  function handleView() {
    dispatch(ShirtActions.view(id));
    dispatch(OrderActions.show());
  }
  return (
    <Box onClick={handleView}>
      <Avatar src={url + ".webp"} variant="square" sx={{ width: 100, height: 100, cursor: "pointer" }} />
    </Box>
  );
}

export default ItemImage;
