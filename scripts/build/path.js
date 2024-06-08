import path from 'node:path'

export const __dirname = path.resolve()
export const packagesPath = path.resolve(__dirname, './packages')
export const componentsPath = path.resolve(packagesPath, './components')