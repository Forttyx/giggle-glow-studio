import { Download } from "lucide-react";
import s01 from "@/assets/callan/callan_stage_01.zip.asset.json";
import s02 from "@/assets/callan/callan_stage_02.zip.asset.json";
import s03 from "@/assets/callan/callan_stage_03.zip.asset.json";
import s04 from "@/assets/callan/callan_stage_04.zip.asset.json";
import s05 from "@/assets/callan/callan_stage_05.zip.asset.json";
import s06 from "@/assets/callan/callan_stage_06.zip.asset.json";
import s07 from "@/assets/callan/callan_stage_07.zip.asset.json";
import s08 from "@/assets/callan/callan_stage_08.zip.asset.json";

function mb(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const stages = [
  { stage: 1, range: "1 – 9", asset: s01 },
  { stage: 2, range: "10 – 19", asset: s02 },
  { stage: 3, range: "20 – 29", asset: s03 },
  { stage: 4, range: "30 – 39", asset: s04 },
  { stage: 5, range: "40 – 49", asset: s05 },
  { stage: 6, range: "50 – 59", asset: s06 },
  { stage: 7, range: "60 – 69", asset: s07 },
  { stage: 8, range: "70 – 77", asset: s08 },
];

export function CallanDownloads() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stages.map(({ stage, range, asset }) => (
        <a
          key={stage}
          href={asset.url}
          download={asset.original_filename}
          className="group flex flex-col rounded-3xl bg-card p-5 sticker sticker-hover"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-royal font-display text-lg font-bold text-royal-foreground">
              {stage}
            </span>
            <span className="text-xs font-semibold text-muted-foreground">{mb(asset.size)} · ZIP</span>
          </div>
          <div className="mt-4">
            <div className="font-display text-lg font-bold text-foreground">Stage {stage}</div>
            <div className="text-sm text-muted-foreground">Lekce {range}</div>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-british-red">
            <Download className="h-4 w-4" /> Stáhnout MP3 balíček
          </div>
        </a>
      ))}
    </div>
  );
}