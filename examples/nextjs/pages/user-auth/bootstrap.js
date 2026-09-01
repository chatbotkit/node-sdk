/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const fs = require('fs')
const cp = require('child_process')
const packageJson = require('./package.json')

for (const dep of Object.keys(packageJson.dependencies)) {
  if (dep.startsWith('@chatbotkit/')) {
    packageJson.dependencies[dep] = 'latest'
  }
}

fs.writeFileSync(
  './package.json',
  JSON.stringify(packageJson, null, 2),
  'utf-8'
)

fs.copyFileSync('./.env.example', './.env')

cp.execSync('npm install', { stdio: 'inherit' })

console.log('\nSetup complete!\n')
console.log('Next steps:')
console.log('   1. Edit .env file with your ChatBotKit credentials')
console.log('   2. Run: npm run dev')
console.log('\nHappy coding!\n')
