import { Box, Typography, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router";

function Footer({ subtotal }: { subtotal: number }) {
  const navigate = useNavigate();

  return (
    <>
      <Box position={"fixed"} bottom={100} bgcolor={"#fff"} width={"100%"} height={100} py={2}>
        <Typography variant="h5" ml={5}>
          Subtotal : <br />${subtotal}
        </Typography>
        <Divider />
      </Box>
      <Box position={"fixed"} bottom={0} bgcolor={"white"} width={"100%"} height={100}>
        <Button variant="contained" sx={{ width: 250, mt: 3.5, ml: 6 }} onClick={() => navigate("/cart")}>
          view cart
        </Button>
      </Box>
    </>
  );
}

export default Footer;
