import { Grid } from "@mui/material";
import NavAppBar from "./components/nav/NavAppBar";
import Slice from "./components/slice/Slice";
import ItemContainer from "./components/item/ItemContainer";
import CardContainer from "./components/card/CardContainer";
import { useAppSelector } from "./components/context/hooks";

function App() {
  const open = useAppSelector((s) => s.shirt.inView).show;
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavAppBar />
      </Grid>
      <Grid item xs={12}>
        <Slice />
      </Grid>
      <Grid item xs={12}>
        <ItemContainer />
        {open && <CardContainer />}
      </Grid>
    </Grid>
  );
}

export default App;
