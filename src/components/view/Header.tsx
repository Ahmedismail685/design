import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Button, Typography, ButtonGroup } from "@mui/material";
import { useAppSelector } from "../context/hooks";
import { useNavigate, useParams } from "react-router";

function Header() {
  const { id } = useParams();
  const navigate = useNavigate();
  const shirts = useAppSelector((i) => i.shirt.shirt);
  const shirt = shirts.filter((x) => x.id === id)[0];
  const index = shirts.indexOf(shirt);

  function handleChange(change: number) {
    navigate({ pathname: "/view/" + shirts[index + change].id });
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography flexGrow={1}>Header</Typography>
      <ButtonGroup aria-label="control-skep-prev">
        <Button variant="text" color="inherit" startIcon={<ArrowBackIos />} aria-label="previous" onClick={() => handleChange(-1)}>
          Prev
        </Button>
        <Button variant="text" color="inherit" endIcon={<ArrowForwardIos />} aria-label="next" onClick={() => handleChange(1)}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Header;
