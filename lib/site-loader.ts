import rk from "@/sites/rk-construction/config";
import timber from "@/sites/timber-park/config/site"; // 👈 Add your timber config import

const sites: Record<string, any> = {
  "rk-construction": rk,
  "timber-park": timber, // 👈 Register key
};

export function loadSite(site: string = "rk-construction") {
  return sites[site] || rk;
}