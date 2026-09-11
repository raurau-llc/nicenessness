import {readdirSync,lstatSync,readFileSync,mkdirSync,writeFileSync,existsSync} from 'node:fs';
import {resolve,join,dirname,relative} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const source=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const target=process.argv[2]&&resolve(process.argv[2]);
if(!target)throw new Error('Usage: node scripts/export-community.mjs /absolute/new-directory');
if(existsSync(target))throw new Error('Destination already exists; choose a new directory. Existing files are never overwritten.');
if(target===source||target.startsWith(source+'/'))throw new Error('Export must be outside site/');
const roots=['src','content','public','scripts','.github'];
const singles=['package.json','package-lock.json','astro.config.mjs','.gitignore','.env.example','README.md','CONTRIBUTING.md','GOVERNANCE.md','docs/publishing-and-community.md'];
const entries=[];
function add(rel){const path=join(source,rel),stat=lstatSync(path);if(stat.isSymbolicLink())throw new Error(`Symlink is not exportable: ${rel}`);if(stat.isDirectory()){for(const name of readdirSync(path).sort())add(rel+'/'+name);return;}
if(/(^|\/)(\.git|node_modules|dist|\.astro|\.openai|sources|prompts)(\/|$)/.test(rel)||(/(^|\/)\.env/.test(rel)&&rel!=='.env.example'))throw new Error(`Private path: ${rel}`);
if(!/\.(astro|css|js|mjs|ts|json|md|yml|yaml|svg)$/.test(rel)&&!['.gitignore','.env.example'].includes(rel))throw new Error(`Unreviewed file type: ${rel}`);
const bytes=readFileSync(path);if(/^-----BEGIN (?:[A-Z]+ )?PRIVATE KEY-----$/m.test(bytes.toString('utf8')))throw new Error(`Private key in ${rel}`);entries.push({path:rel,bytes,sha256:createHash('sha256').update(bytes).digest('hex')});}
for(const rel of [...roots,...singles])add(rel);
// Only create output after checking every entry; never copy parent Git history or research inputs.
mkdirSync(target,{recursive:true});for(const item of entries){mkdirSync(dirname(join(target,item.path)),{recursive:true});writeFileSync(join(target,item.path),item.bytes,{flag:'wx'});}
writeFileSync(join(target,'community-export.json'),JSON.stringify({format:1,files:entries.map(({path,sha256})=>({path,sha256})),note:'Standalone site source only. No parent Git history, research input, environment secrets, installed dependencies or build output.'},null,2)+'\n',{flag:'wx'});
console.log(`Exported ${entries.length} checked source files to ${target}`);
