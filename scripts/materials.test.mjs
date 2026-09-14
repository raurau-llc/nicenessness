import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {matchesMaterial,materialStages,materialPlaces} from '../src/lib/materials.mjs';
const read=p=>JSON.parse(readFileSync(new URL(p,import.meta.url)));const data=read('../content/materials.json'),articles=read('../content/articles.json'),release=read('../content/release.v10.json');
test('every material entry cites this season item and adopted NICENESS facts',()=>{
 for(const entry of data.entries){const a=articles.find(a=>a.id===entry.articleId);assert(a);assert(a.products.some(p=>p.id===entry.productId));const facts=release.articles.find(r=>r.topicId===a.id).facts;
 assert(entry.factRefs.length);for(const ref of entry.factRefs){const f=facts.find(f=>f.id===ref);assert(f);assert.equal(f.kind,'brand_statement');assert(f.sourceIds.every(id=>a.sources.some(s=>s.id===id&&s.kind==='brand')));}
 assert(entry.materials.every(id=>data.materials.some(m=>m.id===id)));for(const o of entry.origins){assert(materialStages[o.stage]);assert(materialPlaces[o.place]);}
 }
});
test('material, place and process must match the same component and same origin claim',()=>{
 const horse=data.entries.find(e=>e.articleId==='T025');assert(matchesMaterial(horse,{material:'horse',place:'europe',stage:'raw'},data.materials));assert(matchesMaterial(horse,{material:'horse',place:'jp',stage:'tanning'},data.materials));assert(!matchesMaterial(horse,{place:'jp',stage:'raw'},data.materials));assert(!matchesMaterial(horse,{material:'cotton',place:'jp'},data.materials));
 const bag=data.entries.filter(e=>e.articleId==='T090');assert(!bag.some(e=>matchesMaterial(e,{material:'cow',place:'uk'},data.materials)));assert(bag.some(e=>matchesMaterial(e,{material:'lamb',place:'uk',stage:'sourcing'},data.materials)));
});
test('calf is included in cow leather, and missing provenance is never a country match',()=>{
 const calf=data.entries.find(e=>e.materials.includes('calf'));assert(matchesMaterial(calf,{material:'cow',family:'leather'},data.materials));assert(!matchesMaterial(calf,{material:'cow',family:'fiber'},data.materials));assert(!matchesMaterial(calf,{place:'fr'},data.materials));
});
