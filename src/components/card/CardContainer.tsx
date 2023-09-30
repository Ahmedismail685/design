import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Header from "./Header";
import Body from "./Body";
import ImageSide from "./ImageSide";
import DescriptionSide from "./DescriptionSide";
import { useAppDispatch, useAppSelector } from "../context/hooks";
import { ShirtActions } from "../context/shirtReducer";

function CardContainer() {
  const id = useAppSelector((s) => s.shirt.inView).id;
  const shirt = useAppSelector((s) => s.shirt.shirt).filter((s) => s.id === id)[0];

  const dispatch = useAppDispatch();
  function handleClose() {
    dispatch(ShirtActions.view(id));
  }
  return (
    <Dialog open={true} onClose={handleClose} maxWidth={"lg"}>
      <DialogTitle>
        <Header />
      </DialogTitle>
      <DialogContent>
        <Body>
          <ImageSide url={shirt.url} />
          <DescriptionSide {...shirt} />
        </Body>
      </DialogContent>
    </Dialog>
  );
}

export default CardContainer;
