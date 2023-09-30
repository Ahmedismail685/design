import { Avatar, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
export default function Slice() {
  const p = [1, 2, 3];
  return (
    <Carousel autoPlay indicators={false} navButtonsAlwaysVisible animation="slide" fullHeightHover duration={2500} interval={4000}>
      {p.map((item) => {
        return (
          <Grid container columnSpacing={1} wrap="nowrap" overflow={"hidden"} key={item}>
            {[item, 1, 2, 3, 1, 3].map((i, index) => (
              <Grid item xs={"auto"} columnSpacing={1} width={370} height={370} key={index}>
                <Avatar src={i + ".webp"} alt={i + " image"} variant="square" sx={{ width: "370px", height: "370px" }} />
              </Grid>
            ))}
          </Grid>
        );
      })}
    </Carousel>
  );
}
