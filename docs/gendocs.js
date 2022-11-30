const { readFileSync, writeFileSync } = require('fs')

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8')
    const arr = contents.split(/\r?\n/)
    // remove header
    arr.shift()
    while (arr[0].startsWith('!') && arr[0] !== "")
        arr.shift()
    const commentLines = arr.filter(line => line.startsWith('!'))
    // format comments into markdown
    const comments = commentLines.map(line => line
        .replace(/\#(\d+)/, '[#$1](https://github.com/mchangrh/yt-neuter/issues/$1)')
        .replace(/\!\!\!/, '#')
        .replace(/\!\!/, '##')
        .replace(/\!/, '*')
    );
    return comments.join("\n")
}
const filters = [
    "yt-neuter",
    "filters/misc",
    "filters/nolive",
    "filters/noshorts",
    "filters/notrack",
    "filters/reflow"
]

for (const filter of filters) {
    const result = syncReadFile(`./${filter}.txt`)
    writeFileSync(`./docs/${filter}.md`, result)
}