import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function Size({ selectSize, setSelectSize, size }: { size: Array<string>; setSelectSize: any; selectSize?: string }) {
  return (
    <FormControl sx={{ width: 200 }} size="small">
      <InputLabel id="demo-simple-select-label">select</InputLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Size" value={selectSize} onChange={(e) => setSelectSize(e.target.value)}>
        {size.map((z) => (
          <MenuItem key={z} value={z}>
            {z}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Size;
