import rk from "@/sites/rk-construction/config";

const sites: Record<string, any> = {
  "rk-construction": rk,
  // "timber-park": timber,
};

export function loadSite(site: string = "rk-construction") {
  return sites[site] || rk;
}