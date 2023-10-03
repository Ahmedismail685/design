import { Typography, Stack, Box } from "@mui/material";

function Color({ colors, handleColor, selectColor }: { selectColor?: string; colors: Array<string>; handleColor: any }) {
  return (
    <>
      <Typography variant="body2" my={1}>
        Color : {selectColor}
      </Typography>
      <Stack direction={"row"} spacing={1} mb={2}>
        {colors.map((color) => (
          <Box
            key={color}
            sx={[{ ":hover": { border: 2, borderColor: color } }, selectColor !== undefined && selectColor === color && { border: 2, borderColor: color }]}
            border={2}
            borderColor={"transparent"}
            p={0.4}
            borderRadius={"50%"}
            onClick={() => handleColor(color)}
          >
            <Box sx={{ width: 15, height: 15, bgcolor: color, borderRadius: "50%" }} />
          </Box>
        ))}
      </Stack>
    </>
  );
}

export default Color;
