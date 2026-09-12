import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';
import {atlasPanels,atlasRegions,projectPoint} from '../src/lib/atlas.mjs';
const read=p=>JSON.parse(readFileSync(new URL(p,import.meta.url)));
const articles=read('../content/articles.json').filter(a=>a.status==='ready');
const positions=read('../content/region-map.json');
const source=readFileSync(new URL('../src/lib/data.ts',import.meta.url),'utf8');
const regions=JSON.parse(source.match(/export const regions=(\[.*?\]);/)[1]);
test('every selectable and published region has a map entry and accurate article count',()=>{
 const markers=atlasRegions(regions,articles,positions);
 assert.equal(new Set(markers.map(m=>m.id)).size,regions.length);
 for(const article of articles)for(const region of article.regions)assert(markers.some(m=>m.id===region.id),region.id);
 for(const marker of markers){assert(marker.count>0);assert.equal(marker.count,articles.filter(a=>a.regions.some(r=>r.id===marker.id)).length);}
});
test('a new region without map metadata fails explicitly instead of silently disappearing',()=>{
 assert.throws(()=>atlasRegions([...regions,{id:'new-region',name:'New region'}],articles,positions),/Missing atlas location: new-region/);
});
test('geographic points and separate labels fit each panel without label overlap',()=>{
 for(const panel of atlasPanels){
  const markers=Object.entries(positions).filter(([,m])=>m.panel===panel.id);
  for(const [id,m] of markers){const [x,y]=projectPoint(panel,m.lon,m.lat);assert(x>=0&&x<=panel.width&&y>=0&&y<=panel.height,id);assert(m.label[0]>=0&&m.label[0]+150<=panel.width&&m.label[1]>=0&&m.label[1]+44<=panel.height,id);}
  for(let i=0;i<markers.length;i++)for(let j=i+1;j<markers.length;j++){const a=markers[i][1].label,b=markers[j][1].label;assert(Math.abs(a[0]-b[0])>=150||Math.abs(a[1]-b[1])>=44,`${markers[i][0]} overlaps ${markers[j][0]}`);}
 }
});
