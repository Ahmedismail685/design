import { Avatar, Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
export default function Slice() {
  //

  const [items, setItems] = useState([1, 2, 3, 2, 1, 2, 1, 3]);
  const imgW = 370;

  const [step, setStep] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStep((p) => p + imgW);
      items.push(items[0]);
      console.log(items);
    }, 6000);
  }, [step]);

  return (
    <Box width={"100%"} overflow={"hidden"}>
      <Stack direction={"row"} spacing={1}>
        {items.map((item, index) => (
          <Avatar
            key={index}
            src={item + ".webp"}
            alt={item + " image"}
            variant="square"
            sx={{ width: imgW, height: "370px", transform: `translateX(-${step}px)`, transition: "all ease-out 6s" }}
          />
        ))}
      </Stack>
    </Box>
  );
}
