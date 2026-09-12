export const atlasPanels = [
  {id:'world', title:'世界', width:1000, height:430, bounds:[-180,180,-60,85]},
  {id:'europe', title:'欧州', width:600, height:430, bounds:[-17,35,33,64]},
  {id:'asia', title:'アジア', width:600, height:430, bounds:[48,158,-7,57]},
];
export function projectPoint(panel, lon, lat) {
  const [west,east,south,north]=panel.bounds;
  return [(lon-west)/(east-west)*panel.width,(north-lat)/(north-south)*panel.height];
}
export function atlasRegions(regions, articles, positions) {
  return regions.map(region=>{
    const position=positions[region.id];
    if(!position || !atlasPanels.some(p=>p.id===position.panel)) throw new Error(`Missing atlas location: ${region.id}`);
    return {...region,...position,count:articles.filter(a=>a.regions.some(r=>r.id===region.id)).length};
  });
}
