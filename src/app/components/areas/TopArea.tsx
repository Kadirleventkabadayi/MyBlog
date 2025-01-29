import { Box, Typography } from "@mui/material";
import TopSelectedCard from "../cards/TopSelectedCard";
import { getColorByString } from "@/app/lib/utils";
import SelectedCard from "../cards/SelectedCard";
import { RepoData } from "@/app/lib/types";
import { imgList } from "@/app/lib/consts";

interface TopAreaProps {
  id: string;
  repoData: RepoData[];
}

function TopArea({ id, repoData }: TopAreaProps) {
  const erciyesAIContentCreator = repoData?.find(
    (item: RepoData) => item.name === "Erciyes-AI-Content-Creator"
  );

  const otherRepoData = repoData?.filter(
    (item: RepoData) => item.name !== "Erciyes-AI-Content-Creator"
  );
  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "var(--topArea)",
        height: "100vh",
        pt: 5,
      }}
    >
      <Typography
        sx={{
          pb: 5,
          fontWeight: "bold",
          color: "var(--foreground)",
          textAlign: "center",
        }}
        variant="h2"
      >
        Top Projects
      </Typography>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          gap: 2,
        }}
      >
        <TopSelectedCard
          title={erciyesAIContentCreator?.name || ""}
          cardType={getColorByString(erciyesAIContentCreator?.name || "")}
          description={erciyesAIContentCreator?.name}
          updated_at={erciyesAIContentCreator?.updated_at || ""}
          repoUrl={erciyesAIContentCreator?.html_url || ""}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "80vh",
          }}
        >
          {otherRepoData
            .filter((_, index) => [0, 4, 3].includes(index))
            .map((item, itemIndex) => (
              <SelectedCard
                title={item.name}
                cardType={getColorByString(item.name)}
                key={item.name}
                desciption={item.name}
                updated_at={item.updated_at}
                repoUrl={item.html_url}
                imgUrl={imgList[itemIndex]}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default TopArea;
