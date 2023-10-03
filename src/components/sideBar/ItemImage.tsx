import { Box, Avatar } from "@mui/material";
import { useNavigate } from "react-router";

function ItemImage({ url, id }: { id: string; url: string }) {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate("/view/" + id)}>
      <Avatar src={"/" + url + ".webp"} variant="square" sx={{ width: 100, height: 100, cursor: "pointer" }} />
    </Box>
  );
}

export default ItemImage;
