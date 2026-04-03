const fs = require('fs');
const path = require('path');

function getTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getTsxFiles(filePath, fileList);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const tsxFiles = getTsxFiles(path.join(__dirname, 'src'));
const viJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'messages/vi.json'), 'utf8'));
const enJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'messages/en.json'), 'utf8'));
const zhJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'messages/zh.json'), 'utf8'));

let hasError = false;

function resolvePath(obj, pathStr) {
  return pathStr.split('.').reduce((o, p) => (o ? o[p] : undefined), obj);
}

tsxFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Find namespace: e.g. const t = useTranslations('Community'); or getTranslations({..., namespace: 'Metadata'})
  let namespace = '';
  const nsMatch = content.match(/useTranslations\(\s*['"]([^'"]+)['"]\s*\)/);
  if (nsMatch) namespace = nsMatch[1];
  else {
    const getServerMatch = content.match(/getTranslations\(\{[^}]*namespace:\s*['"]([^'"]+)['"]/);
    if (getServerMatch) namespace = getServerMatch[1];
  }

  // Find all t('key') or t("key") or t(`key`)
  const tRegex = /\bt\(\s*['"`]([^'"`\$]+)['"`]\s*\)/g;
  let match;
  while ((match = tRegex.exec(content)) !== null) {
    const key = match[1];
    
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const valVi = resolvePath(viJson, fullKey);
    const valEn = resolvePath(enJson, fullKey);
    const valZh = resolvePath(zhJson, fullKey);
    
    if (valVi === undefined || valEn === undefined || valZh === undefined) {
      console.log(`❌ MISSING KEY in ${file.replace(__dirname, '')}`);
      console.log(`   Namespace: "${namespace}", Key used: "t('${key}')" => Looked for path: "${fullKey}"`);
      if (valVi === undefined) console.log(`   - Missing in vi.json`);
      if (valEn === undefined) console.log(`   - Missing in en.json`);
      if (valZh === undefined) console.log(`   - Missing in zh.json`);
      console.log('');
      hasError = true;
    }
  }
});

if (!hasError) {
  console.log("✅ ALL keys matched successfully across all 3 languages!");
}
