import { Grid } from "@mui/material";
import Item from "./Item";
import { useAppSelector } from "../context/hooks";

function ItemContainer() {
  const items = useAppSelector((s) => s.shirt.shirt);

  return (
    <Grid container mt={2} spacing={1} justifyContent={"center"}>
      {items.map((item) => (
        <Grid item xs={"auto"} key={item.id}>
          <Item {...item} />
        </Grid>
      ))}
    </Grid>
  );
}
export default ItemContainer;
