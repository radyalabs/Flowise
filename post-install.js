const fs = require('fs')

var dir = './backup'
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
}
fs.copyFile('./packages/ui/node_modules/flowise-embed/dist/web.js', './backup/web.js', (err) => {
    if (err) throw err
    console.log('backup web.js flowise-embed')
})

fs.copyFile('web.js', './packages/ui/node_modules/flowise-embed/dist/web.js', (err) => {
    if (err) throw err
    console.log('replace web.js flowise-embed')
})
