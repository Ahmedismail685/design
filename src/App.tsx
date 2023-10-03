import NavAppBar from "./components/nav/NavAppBar";
import Slice from "./components/slice/Slice";
import ItemContainer from "./components/item/ItemContainer";
import CardContainer from "./components/order/CardContainer";
import SideBar from "./components/sideBar/SideBar";
import CardView from "./components/cart view/MyCart";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <NavAppBar />
      <Slice />
      <ItemContainer />
      <Routes>
        <Route path="cart" element={<CardContainer />} />
        <Route path="view" element={<CardView />} />
      </Routes>
      <SideBar />
    </>
  );
}

export default App;
