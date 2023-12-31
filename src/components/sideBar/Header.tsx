import { ArrowBackIos } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  return (
    <Box width={"100%"} bgcolor={"ActiveBorder"} color={"white"} position={"fixed"} top={0} zIndex={100}>
      <Box py={3} display={"flex"} alignItems={"center"} mx={2} mt={3}>
        <IconButton aria-label="close" onClick={() => navigate("/")} sx={{ color: "white" }}>
          <ArrowBackIos />
        </IconButton>
        <Typography variant="h5" ml={9}>
          Cart
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
