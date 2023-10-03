import { Box } from "@mui/material";
import Accordion from "./Accordion";

function Footer({ information, police }: { information?: string; police?: string }) {
  return (
    <Box mt={3} overflow={"hidden"}>
      {information && <Accordion title="PRODUCT INFO" description={information} />}
      {police && <Accordion title="RETURN AND REFUND POLICY" description={police} />}
    </Box>
  );
}

export default Footer;
