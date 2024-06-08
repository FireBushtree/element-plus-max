import { execa } from 'execa'

run()

function run() {
  execa(
    'gulp',
    [
      '-f',
      './scripts/build/components.js',
    ],
    { stdio: 'inherit' },
  )
}
