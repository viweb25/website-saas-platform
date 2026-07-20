import rk from "@/sites/rk-construction/config";

const sites = {
  "rk-construction": rk,
  // "timber-park": timber,
};

export function loadSite(site = "rk-construction") {
  return sites[site] || rk;
}