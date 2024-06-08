import path from 'node:path'

export const __dirname = path.resolve()
export const rootPath = path.resolve(__dirname, '../../')

export const tsconfigPath = path.resolve(rootPath, './tsconfig.json')

// scripts
export const scriptsPath = path.resolve(rootPath, './scripts')

// packages
export const packagesPath = path.resolve(rootPath, './packages')
export const componentsPath = path.resolve(packagesPath, './components')
