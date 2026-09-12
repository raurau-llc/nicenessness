export const atlasPanels = [
  {id:'world', title:'世界', width:1000, height:430, bounds:[-180,180,-60,85]},
  {id:'north-america',title:'北米',width:600,height:430,bounds:[-170,-50,10,80]},
  {id:'oceania',title:'オセアニア・太平洋',width:600,height:430,bounds:[95,225,-55,45]},
  {id:'europe', title:'欧州', width:600, height:430, bounds:[-17,35,33,64]},
  {id:'asia', title:'アジア', width:600, height:430, bounds:[48,158,-7,57]},
];
export function projectPoint(panel, lon, lat) {
  const [west,east,south,north]=panel.bounds;
  if(east>180 && lon<west) lon+=360;
  return [(lon-west)/(east-west)*panel.width,(north-lat)/(north-south)*panel.height];
}
export function atlasRegions(regions, articles, positions) {
  return regions.map(region=>{
    const position=positions[region.id];
    if(!position || !atlasPanels.some(p=>p.id===position.panel)) throw new Error(`Missing atlas location: ${region.id}`);
    return {...region,...position,count:articles.filter(a=>a.regions.some(r=>r.id===region.id)).length};
  });
}

export const atlasAreas = [
 {id:'north-america',name:'北米',lon:-105,lat:47,label:[140,95]},
 {id:'europe',name:'欧州',lon:5,lat:50,label:[435,40]},
 {id:'asia',name:'アジア',lon:100,lat:28,label:[680,140]},
 {id:'oceania',name:'オセアニア・太平洋',lon:155,lat:-15,label:[745,330]},
];
export function resolveAtlasArea(area,region,positions) {
 return positions[region]?.panel || (atlasAreas.some(a=>a.id===area)?area:'');
}
export function matchesAtlasArea(ids,area,positions) {
 return !area || ids.some(id=>positions[id]?.panel===area);
}
