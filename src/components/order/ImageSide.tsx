import { Avatar, ButtonGroup, Button, Typography } from "@mui/material";

function ImageSide({ url }: { url: string }) {
  return (
    <div style={{ width: 450, height: 420 }}>
      <Avatar variant="square" sx={{ width: "100%", height: "100%" }} src={url + ".webp"} />
      <ButtonGroup variant="text" aria-label="colors">
        <Button>
          <Avatar variant="square" sx={{ width: 50, height: 50 }} src={url + ".webp"} />
        </Button>
        <Button>
          <Avatar variant="square" sx={{ width: 50, height: 50 }} src={url + ".webp"} />
        </Button>
      </ButtonGroup>
      <Typography variant="subtitle1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas recusandae quae explicabo molestiae non harum, dolorem debitis minima deserunt?
      </Typography>
    </div>
  );
}

export default ImageSide;
