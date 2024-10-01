const { readFileSync, writeFileSync } = require('fs')

const getName = (filter) =>
  filter == 'yt-neuter'
    ? filter
    : `yt-neuter ${filter.replace('filter/', '')}`

function generateInstallLink(filter) {
  filter = filter.replace('filters/', 'filter/')
  const listURL = `https://neuter.mchang.xyz/${filter}`
  const installURL = `https://subscribe.adblockplus.org/?location=${encodeURIComponent(listURL)}&title=${encodeURIComponent(getName(filter))}`
  return `# Install\n\n[Subscribe](${installURL}) | [View List](${listURL})\n`
}

function syncReadFile(filter) {
  const filename = `./${filter}.txt`
  const contents = readFileSync(filename, 'utf-8')
  const arr = contents.split(/\r?\n/)
  // remove header
  arr.shift()
  while (arr[0].startsWith('!') && arr[0] !== '') arr.shift()
  const commentLines = arr.filter(line => line.startsWith('!'))
  // format comments into markdown
  const comments = commentLines.map(line => line
    .replace(/\#(\d+)/, '[#$1](https://github.com/mchangrh/yt-neuter/issues/$1)')
    .replace(/\! install link/, generateInstallLink(filter))
    .replace(/\!\!\!\!/, '##')
    .replace(/\!\!\!/, '###')
    .replace(/\!\!/, '*')
    .replace(/\!/, '  *')
  )
  return comments.join('\n')
}

const filters = [
  "yt-neuter",
  "filters/hyper",
  "filters/misc",
  "filters/nolive",
  "filters/nomusic",
  "filters/noshorts",
  "filters/notrack",
  "filters/noview",
  "filters/premium",
  "filters/requests",
  "filters/sponsorblock",
  "filters/ytkids"
]

for (const filter of filters) {
  const result = syncReadFile(filter)
  writeFileSync(`./docs/${filter}.md`, result)
}
