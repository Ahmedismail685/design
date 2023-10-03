import NavAppBar from "./components/nav/NavAppBar";
import Slice from "./components/slice/Slice";
import ItemContainer from "./components/item/ItemContainer";
import ViewContainer from "./components/view/ViewContainer";
import Order from "./components/sideBar/Order";
import MyCart from "./components/cart/MyCart";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <NavAppBar />
      <Slice />
      <ItemContainer />
      <Routes>
        <Route path="/view/:id" element={<ViewContainer />} />
        <Route path="cart" element={<MyCart />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
