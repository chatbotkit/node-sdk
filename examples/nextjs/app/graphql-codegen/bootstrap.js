const fs = require('fs')
const cp = require('child_process')
const packageJson = require('./package.json')

for (const dep in packageJson.dependencies) {
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
console.log('   1. Edit .env file with your ChatBotKit API secret')
console.log('   2. Run: npm run codegen (to generate GraphQL types)')
console.log('   3. Run: npm run dev (to start the development server)')
console.log('\nHappy coding!\n')
