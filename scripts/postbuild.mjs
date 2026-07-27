// Runs after `vite build`.
//
// 1. `.nojekyll` stops GitHub Pages from running the build output through Jekyll,
//    which would otherwise ignore any file or folder starting with an underscore.
// 2. `404.html` is a copy of the app shell, so a deep link that Pages can't resolve
//    still loads the site instead of GitHub's default 404 page.
import { copyFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const out = join(process.cwd(), 'docs')

writeFileSync(join(out, '.nojekyll'), '')
copyFileSync(join(out, 'index.html'), join(out, '404.html'))

console.log('postbuild: wrote docs/.nojekyll and docs/404.html')
