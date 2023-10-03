import NavAppBar from "./components/nav/NavAppBar";
import Slice from "./components/slice/Slice";
import ItemContainer from "./components/item/ItemContainer";
import CardContainer from "./components/order/CardContainer";
import { useAppSelector } from "./components/context/hooks";
import SideBar from "./components/cart/SideBar";
import CardView from "./components/cart view/CardView";

function App() {
  const openView = useAppSelector((s) => s.order.open.openView);
  const openCart = useAppSelector((s) => s.order.open.openCart);
  return (
    <>
      <NavAppBar />
      <Slice />
      <ItemContainer />
      {openView && <CardContainer />}
      <SideBar />
      {openCart && <CardView />}
    </>
  );
}

export default App;
