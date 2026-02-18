import fs from 'fs/promises'
import path from 'path'

export async function getPortfolioData() {
  const filePath = path.join(process.cwd(), 'public', 'portfolio-data.json')
  const fileContent = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileContent)
}
