import { Box, Typography } from "@mui/material";
import TopSelectedCard from "../cards/TopSelectedCard";
import { checkScreenSize, getColorByString } from "@/app/lib/utils";
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
    <Box id={id} className="flex flex-col items-center bg-topArea pb-20 ">
      <Typography
        className="pb-10 font-bold text-foreground text-center pt-10"
        variant="h2"
      >
        Top Projects
      </Typography>

      <Box
        className={`flex items-center justify-center gap-2 ${
          checkScreenSize() && "flex-col"
        }`}
      >
        {checkScreenSize() ? (
          <SelectedCard
            title={erciyesAIContentCreator?.name || ""}
            cardType={getColorByString(erciyesAIContentCreator?.name || "")}
            description={erciyesAIContentCreator?.name || ""}
            updated_at={erciyesAIContentCreator?.updated_at || ""}
            repoUrl={erciyesAIContentCreator?.html_url || ""}
            imgUrl={"/ai.png"}
          />
        ) : (
          <TopSelectedCard
            title={erciyesAIContentCreator?.name || ""}
            cardType={getColorByString(erciyesAIContentCreator?.name || "")}
            description={erciyesAIContentCreator?.name}
            updated_at={erciyesAIContentCreator?.updated_at || ""}
            repoUrl={erciyesAIContentCreator?.html_url || ""}
          />
        )}

        <Box
          className={`flex flex-col justify-between${
            checkScreenSize() ? "" : "h-[80vh]"
          }  `}
        >
          {otherRepoData
            .filter((_, index) => [0, 4, 3].includes(index))
            .map((item, itemIndex) => (
              <SelectedCard
                title={item.name}
                cardType={getColorByString(item.name)}
                key={item.name}
                description={item.name}
                updated_at={item.updated_at}
                repoUrl={item.html_url}
                imgUrl={imgList[itemIndex]}
                cardSx={checkScreenSize() ? { mb: 1 } : {}}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default TopArea;
