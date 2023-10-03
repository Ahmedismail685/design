import Drawer, { drawerClasses } from "@mui/material/Drawer";
import { useAppDispatch, useAppSelector } from "../context/hooks";
import { OrderActions } from "../context/order/orderReducer";
import Header from "./Header";
import Footer from "./Footer";
import { ItemContainer } from "./ItemContainer";

export default function SideBar() {
  //
  const dispatch = useAppDispatch();
  const subtotal = useAppSelector((s) => s.order.subtotal);

  const open = useAppSelector((s) => s.order.open);
  function handleOpen() {
    dispatch(OrderActions.show());
  }

  return (
    <Drawer
      open={open}
      onClose={handleOpen}
      anchor="right"
      sx={{ zIndex: (t) => t.zIndex.modal, [`.${drawerClasses.paper}`]: { width: 350 } }}
      variant="temporary"
    >
      <Header handleOpen={handleOpen} />
      <ItemContainer />
      <Footer subtotal={subtotal} />
    </Drawer>
  );
}
