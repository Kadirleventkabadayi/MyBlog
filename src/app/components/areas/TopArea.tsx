import { Box } from "@mui/material";
import TopSelectedCard from "../cards/TopSelectedCard";
import { getColorByString } from "@/app/lib/utils";
import SelectedCard from "../cards/SelectedCard";

const DUMMY_DATA = ["Tech", "Robot", "Laptop"];

function TopArea() {
  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        gap: 2,
        backgroundColor: "var(--topArea)",
        height: "95vh",
      }}
    >
      <TopSelectedCard title="GADGET" cardType={getColorByString("GADGET")} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "80vh",
        }}
      >
        {DUMMY_DATA.map((item) => (
          <SelectedCard
            title={item}
            cardType={getColorByString(item)}
            key={item}
          />
        ))}
      </Box>
    </Box>
  );
}

export default TopArea;
