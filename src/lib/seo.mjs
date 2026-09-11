export function seoConfig(origin='', enabled=false){
 let url=null; if(origin){const parsed=new URL(origin);if(parsed.protocol!=='https:'||parsed.pathname!=='/'||parsed.search||parsed.hash||parsed.username||parsed.password||/^(localhost|127\.|.*\.localhost$)/.test(parsed.hostname))throw new Error('SITE_URL must be an HTTPS production origin');url=parsed.origin;}
 if(enabled&&!url)throw new Error('SITE_INDEXABLE requires a verified SITE_URL');
 return {origin:url,indexable:enabled,absolute:path=>url?url+path:null};
}
export const safeJson=value=>JSON.stringify(value).replace(/</g,'\\u003c');
