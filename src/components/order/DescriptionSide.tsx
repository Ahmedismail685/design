import Typography from "@mui/material/Typography";
import { TextField, Button } from "@mui/material";
import { shirt } from "../context/shirt";
import { useState } from "react";
import { ShirtActions } from "../context/shirtReducer";
import { useAppDispatch } from "../context/hooks";
import { OrderActions } from "../context/order/orderReducer";
import Footer from "./Footer";
import OrderButton from "./OrderButton";
import Color from "./Color";
import Size from "./Size";
import BodyHeader from "./BodyHeader";

function DescriptionSide({ id, price, title, quantity, Favorite: isFavorite, colors, information, police, size, url }: shirt) {
  const [selectColor, setSelectColor] = useState(colors ? colors[0] : undefined);
  const [selectSize, setSelectSize] = useState(size ? size[0] : undefined);
  const [selectQuantity, setSelectQuantity] = useState(quantity);

  const dispatch = useAppDispatch();

  function handleColor(color: string) {
    setSelectColor(color);
  }
  function handleFavorite() {
    dispatch(ShirtActions.addFavorite());
  }
  function handleOrder() {
    dispatch(OrderActions.show({ state: "view" }));
    dispatch(OrderActions.addOrder({ id, price, quantity, title, url }));
  }

  return (
    <div style={{ width: 500, paddingLeft: 20, paddingTop: 0 }}>
      <BodyHeader id={id} price={price} title={title} />
      {size && <Size selectSize={selectSize} setSelectSize={selectSize} size={size} />}
      {colors && <Color colors={colors} handleColor={handleColor} selectColor={selectColor} />}
      <TextField
        id={id + " quantity"}
        label="Quantity"
        type="number"
        sx={{ display: "block", mt: 2 }}
        value={selectQuantity}
        size="small"
        onChange={(e) => setSelectQuantity((prev) => prev + Number(e.target.value))}
      />
      <OrderButton handleFavorite={handleFavorite} handleOrder={handleOrder} isFavorite={isFavorite} />
      <Button variant="contained" fullWidth>
        Buy now
      </Button>
      <Footer information={information} police={police} />
    </div>
  );
}

export default DescriptionSide;
