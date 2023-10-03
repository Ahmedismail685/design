import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Box, IconButton, Stack } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Accordion from "./Accordion";
import { shirt } from "../context/shirt";
import { useState } from "react";
import { ShirtActions } from "../context/shirtReducer";
import { useAppDispatch } from "../context/hooks";
import { OrderActions } from "../context/order/orderReducer";

function DescriptionSide({ id, price, title, quantity, Favorite: isFavorite, colors, information, police, size, url }: shirt) {
  const [selectColor, setSelectColor] = useState(colors ? colors[0] : undefined);
  const [selectSize, setSelectSize] = useState(size ? size[0] : undefined);

  const dispatch = useAppDispatch();

  function handleColor(color: string) {
    setSelectColor(color);
  }
  function handleFavorite() {
    dispatch(ShirtActions.addFavorite());
  }
  function handleOrder() {
    dispatch(OrderActions.show());
    dispatch(OrderActions.addOrder({ id, price, quantity, title, url }));
  }
  return (
    <div style={{ width: 500, paddingLeft: 20, paddingTop: 0 }}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h6">SKU: {id}</Typography>
      <Typography variant="h5" my={3}>
        ${price}
      </Typography>

      {/* size */}

      {size && (
        <FormControl sx={{ width: 200 }} size="small">
          <InputLabel id="demo-simple-select-label">select</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Size" value={selectSize} onChange={(e) => setSelectSize(e.target.value)}>
            {size.map((z) => (
              <MenuItem key={z} value={z}>
                {z}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/*  color s */}
      {colors && (
        <>
          <Typography variant="body2" my={1}>
            Color : {selectColor}
          </Typography>
          <Stack direction={"row"} spacing={1} mb={2}>
            {colors.map((color) => (
              <Box
                key={color}
                sx={[{ ":hover": { border: 2, borderColor: color } }, selectColor !== undefined && selectColor === color && { border: 2, borderColor: color }]}
                border={2}
                borderColor={"transparent"}
                p={0.4}
                borderRadius={"50%"}
                onClick={() => handleColor(color)}
              >
                <Box sx={{ width: 15, height: 15, bgcolor: color, borderRadius: "50%" }} />
              </Box>
            ))}
          </Stack>
        </>
      )}

      <TextField id={id + " quantity"} label="Quantity" type="number" sx={{ display: "block", mt: 2 }} value={quantity} size="small" />
      <Box mt={5} display={"flex"} mb={2}>
        <Button variant="outlined" color="secondary" fullWidth onClick={handleOrder}>
          Add to card
        </Button>
        <IconButton aria-label="favorite" color="error" sx={{ border: 1, ml: 2 }} onClick={handleFavorite}>
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </Box>
      <Button variant="contained" fullWidth>
        Buy now
      </Button>
      <Box mt={3} overflow={"hidden"}>
        {information && <Accordion title="PRODUCT INFO" description={information} />}
        {police && <Accordion title="RETURN AND REFUND POLICY" description={police} />}
      </Box>
    </div>
  );
}

export default DescriptionSide;
