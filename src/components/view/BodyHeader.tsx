import { Typography } from "@mui/material";

function BodyHeader({ id, price, title }: { id: string; title: string; price: number }) {
  return (
    <>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h6">SKU: {id}</Typography>
      <Typography variant="h5" my={3}>
        ${price}
      </Typography>
    </>
  );
}

export default BodyHeader;
