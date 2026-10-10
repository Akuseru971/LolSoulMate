/** Community CDN splash art keyed by internal champion id. */
export function championSplashUrl(championId: string, skinIndex = 0): string {
  const key =
    championId.charAt(0).toUpperCase() + championId.slice(1).replace(/[^a-zA-Z0-9]/g, "");
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_${skinIndex}.jpg`;
}
