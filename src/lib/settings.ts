import { seoConfig } from './seo.mjs';
import site from '../../content/site.json';
export const seo=seoConfig(import.meta.env.SITE_URL ?? site.origin,import.meta.env.SITE_INDEXABLE!==undefined?import.meta.env.SITE_INDEXABLE==='true':site.indexable);
export const siteDescription='服のディテールと、その背景にある各地の暮らし・歴史・文化を読むNICENESSの非公式ファンジャーナル。歴史をたどった先でNICENESSのアイテムに出会えます。';
