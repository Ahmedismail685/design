import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Header from "./Header";
import Body from "./Body";
import ImageSide from "./ImageSide";
import DescriptionSide from "./DescriptionSide";
import { useAppSelector } from "../context/hooks";
import { useNavigate, useParams } from "react-router";

function ViewContainer() {
  const { id } = useParams();

  const shirt = useAppSelector((s) => s.shirt.shirt).filter((s) => s.id === id)[0];

  const navigate = useNavigate();

  return (
    <Dialog open={true} onClose={() => navigate("/")} maxWidth={"lg"}>
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

export default ViewContainer;
