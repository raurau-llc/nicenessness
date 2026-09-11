import {seo} from '../lib/settings';
export function GET(){return new Response(`User-agent: *\nAllow: /\n${seo.indexable?`Sitemap: ${seo.origin}/sitemap.xml\n`:''}`,{headers:{'Content-Type':'text/plain'}})}
