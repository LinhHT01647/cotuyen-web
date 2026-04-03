const fs = require('fs');

const vi = JSON.parse(fs.readFileSync('messages/vi.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const zh = JSON.parse(fs.readFileSync('messages/zh.json', 'utf8'));

function getKeys(obj, prefix = '') {
  let keys = [];
  for (const k in obj) {
    const fullPath = prefix ? `${prefix}.${k}` : k;
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      keys = keys.concat(getKeys(obj[k], fullPath));
    } else {
      keys.push(fullPath);
    }
  }
  return keys;
}

const viKeys = new Set(getKeys(vi));
const enKeys = new Set(getKeys(en));
const zhKeys = new Set(getKeys(zh));

const allKeys = new Set([...viKeys, ...enKeys, ...zhKeys]);

const missingInVi = [];
const missingInEn = [];
const missingInZh = [];

for (const k of allKeys) {
  if (!viKeys.has(k)) missingInVi.push(k);
  if (!enKeys.has(k)) missingInEn.push(k);
  if (!zhKeys.has(k)) missingInZh.push(k);
}

console.log('--- Missing Translation Keys ---');
console.log('Missing in VI:', missingInVi.length);
if (missingInVi.length > 0) console.log(missingInVi);

console.log('Missing in EN:', missingInEn.length);
if (missingInEn.length > 0) console.log(missingInEn);

console.log('Missing in ZH:', missingInZh.length);
if (missingInZh.length > 0) console.log(missingInZh);
