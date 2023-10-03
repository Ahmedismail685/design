import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";

function OrderButton({ handleFavorite, handleOrder, isFavorite }: { handleOrder: any; handleFavorite: any; isFavorite?: boolean }) {
  return (
    <Box mt={5} display={"flex"} mb={2}>
      <Button variant="outlined" color="secondary" fullWidth onClick={handleOrder}>
        Add to card
      </Button>
      <IconButton aria-label="favorite" color="error" sx={{ border: 1, ml: 2 }} onClick={handleFavorite}>
        {isFavorite ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
    </Box>
  );
}

export default OrderButton;
