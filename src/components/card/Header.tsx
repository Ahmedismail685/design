import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Button, Typography, ButtonGroup } from "@mui/material";
import { useAppDispatch } from "../context/hooks";
import { ShirtActions } from "../context/shirtReducer";

function Header() {
  const dispatch = useAppDispatch();

  function handlePrev() {
    dispatch(ShirtActions.changeView("-"));
  }
  function handleNext() {
    dispatch(ShirtActions.changeView("+"));
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography flexGrow={1}>Header</Typography>
      <ButtonGroup aria-label="control-skep-prev">
        <Button variant="text" color="inherit" startIcon={<ArrowBackIos />} onClick={handlePrev}>
          Prev
        </Button>
        <Button variant="text" color="inherit" endIcon={<ArrowForwardIos />} onClick={handleNext}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Header;
