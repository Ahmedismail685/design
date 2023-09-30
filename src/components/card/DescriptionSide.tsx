import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, Select, MenuItem, TextField, Button, Box, IconButton } from "@mui/material";
import { Favorite, FavoriteOutlined } from "@mui/icons-material";
import Accordion from "./Accordion";
import { shirt } from "../context/shirt";

function DescriptionSide({ id, price, title, quantity, Favorite: favour, information, police, size }: shirt) {
  return (
    <div style={{ width: 500, paddingLeft: 20, paddingTop: 0 }}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h6">SKU: {id}</Typography>
      <Typography variant="h5" my={3}>
        ${price}
      </Typography>
      {size?.available && (
        <FormControl sx={{ width: 200 }}>
          <InputLabel id="demo-simple-select-label">select</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Size">
            {size.size.map((z) => (
              <MenuItem value={z}>{z}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <TextField id="quantity" label="Quantity" type="number" sx={{ display: "block", mt: 2 }} value={quantity} />
      <Box mt={5} display={"flex"} mb={2}>
        <Button variant="outlined" color="secondary" fullWidth>
          Add to card
        </Button>
        <IconButton aria-label="favorite" color="error" sx={{ border: 1, ml: 2 }}>
          {favour ? <Favorite /> : <FavoriteOutlined />}
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
