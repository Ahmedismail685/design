import { Box, Divider } from "@mui/material";
import Item from "./Item";
import ItemImage from "./ItemImage";
import { OrderActions } from "../context/order/orderReducer";
import { useAppDispatch, useAppSelector } from "../context/hooks";
import Description from "./Description";
import ContainerValue from "./ContainerValue";

export function ItemContainer() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((i) => i.order.items);
  function handleQuantity(id: string, sign: string, value = 1) {
    dispatch(OrderActions.changeQuantity({ id, sign, value }));
  }
  return (
    <Box p={4} pt={0} mt={12} pb={30}>
      {items.map(({ id, price, quantity, title, url }) => (
        <div key={id}>
          <Item>
            <ItemImage url={url} id={id} />
            <Description title={title} price={price}>
              <ContainerValue id={id} quantity={quantity} handleQuantity={handleQuantity} />
            </Description>
          </Item>
          <Divider />
        </div>
      ))}
    </Box>
  );
}
