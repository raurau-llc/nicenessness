export const materialStages={raw:'原料・原皮の産地',spinning:'紡ぐ場所',weaving:'織る場所',tanning:'鞣す場所',finishing:'染色・仕上げ',sourcing:'選定・調達先',tannery:'タンナーの所在地','material-making':'素材の製作地',making:'衣服の製作地','material-origin':'素材の産地'};
export const materialPlaces={us:'米国',in:'インド',jp:'日本',it:'イタリア',fr:'フランス',uk:'英国',nz:'ニュージーランド',europe:'欧州'};
export function matchesMaterial(entry,filter,definitions){
 const materials=entry.materials.map(id=>definitions.find(d=>d.id===id));
 if(!materials.some(m=>(!filter.family||m?.family===filter.family)&&(!filter.material||m?.id===filter.material||m?.parent===filter.material)))return false;
 // The place and process must belong to the same provenance statement.
 if((filter.place||filter.stage)&&!entry.origins.some(o=>(!filter.place||o.place===filter.place)&&(!filter.stage||o.stage===filter.stage)))return false;
 return true;
}
