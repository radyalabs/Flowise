// 
// Run this code after pnpm install and execute using `node post-install.js` 
// Then build with `pnpm build-force`
// OR
// run `pnpm postinstall` for execute post-install and build

const fs = require('fs')

const currentDate = new Date();
const dateString = currentDate.toISOString()

var dir = './backup'
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
}

// Backup Embed and replace
const dirEmbed = './packages/ui/node_modules/flowise-embed/dist/web.js';
const backupEmbed = `./backup/web_${dateString}.js`;
if(!fs.existsSync(dirEmbed)){
    fs.copyFile(dirEmbed, backupEmbed, (err) => {
        if (err) throw err
        console.log('backup web.js on flowise-embed')
    })
}

fs.copyFile('web.js', dirEmbed, (err) => {
    if (err) throw err
    console.log('replace web.js to flowise-embed')
})
// END Backup Embed

// Backup React Embed and replace
const dirReactEmbed = `./packages/ui/node_modules/flowise-embed-react/dist/index.js`;
if(!fs.existsSync(dirReactEmbed)){
    fs.copyFile(dirReactEmbed, `./backup/index_${dateString}.js`, (err) => {
        if (err) throw err
        console.log('backup web.js flowise-embed')
    })
}

fs.copyFile('index-embed-react.js', dirReactEmbed, (err) => {
    if (err) throw err
    console.log('replace web.js flowise-embed')
})
// END Backup React Embed and replace

// Delete build
const dirBuild = './ui/build';
if(!fs.existsSync(dirBuild)){
    fs.rm(dirBuild, { recursive: true, force: true }, (err) => {
        if (err) {
        console.error('Error deleting the folder build:', err);
        } else {
        console.log('Folder and its contents build deleted successfully!');
        }
    });
}