import site from '../../content/site.json';
import allArticles from '../../content/articles.json';
export const articles = allArticles.filter(a=>a.status==='ready');
export const regions=[{id:'uk',name:'英国'},{id:'ca',name:'カナダ'},{id:'us',name:'米国'},{id:'jp',name:'日本'}];
export const eras=[{id:'edo',name:'江戸末期',note:'由来の伝承'},{id:'meiji',name:'明治以降',note:'日々に使う布'},{id:'1920s',name:'1920s',note:'配達の記憶'},{id:'1930s',name:'1930s',note:'残された袋'},{id:'1940s',name:'1940s',note:'袋と軍装'},{id:'1950s',name:'1950s',note:'変わる前開き'}];
export const tags=[...new Set(articles.flatMap(a=>a.tags))];
export const tagPath=(tag:string)=>'/tags/'+encodeURIComponent(tag)+'/';
export const repo=import.meta.env.CONTRIBUTION_REPO ?? site.contributionRepo;
