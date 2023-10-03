import Drawer, { drawerClasses } from "@mui/material/Drawer";
import { useAppSelector } from "../context/hooks";
import Header from "./Header";
import Footer from "./Footer";
import { ItemContainer } from "./ItemContainer";
import { useNavigate } from "react-router";

export default function Order() {
  //
  const subtotal = useAppSelector((s) => s.order.summary.subtotal);

  const navigate = useNavigate();

  return (
    <Drawer
      open={true}
      onClose={() => navigate("/")}
      anchor="right"
      sx={{ zIndex: (t) => t.zIndex.modal, [`.${drawerClasses.paper}`]: { width: 350 } }}
      variant="temporary"
    >
      <Header />
      <ItemContainer />
      <Footer subtotal={subtotal} />
    </Drawer>
  );
}
