import fs from "fs/promises"
import path from "path"

function normalizeText(value = "") {
  return value
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

function titleFromFileName(fileName) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/\(\d+\)\s*$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function buildPublicFileUrl(...segments) {
  return `/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`
}

function isAdvancedComputerNetworksCertificate(fileName) {
  return normalizeText(titleFromFileName(fileName)) === "advanced computer networks"
}

async function getCertificatesFromPublic(baseCertificates = []) {
  const certificatesDir = path.join(process.cwd(), "public", "certificate")
  let entries = []

  try {
    entries = await fs.readdir(certificatesDir, { withFileTypes: true })
  } catch (error) {
    if (error.code !== "ENOENT") throw error
    return baseCertificates
  }

  const pdfFiles = entries
    .filter((entry) => entry.isFile() && /\.pdf$/i.test(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => {
      const aShouldBeLast = isAdvancedComputerNetworksCertificate(a)
      const bShouldBeLast = isAdvancedComputerNetworksCertificate(b)

      if (aShouldBeLast !== bShouldBeLast) {
        return aShouldBeLast ? 1 : -1
      }

      return a.localeCompare(b)
    })

  if (pdfFiles.length === 0) return baseCertificates

  const byFileName = new Map(
    baseCertificates
      .filter((certificate) => certificate.fileName)
      .map((certificate) => [certificate.fileName.toLowerCase(), certificate])
  )

  const byTitle = new Map(
    baseCertificates
      .filter((certificate) => certificate.title)
      .map((certificate) => [normalizeText(certificate.title), certificate])
  )

  return pdfFiles.map((fileName) => {
    const parsedTitle = titleFromFileName(fileName)
    const matchedMeta =
      byFileName.get(fileName.toLowerCase()) || byTitle.get(normalizeText(parsedTitle)) || {}

    return {
      ...matchedMeta,
      title: matchedMeta.title || parsedTitle,
      fileName,
      fileUrl: buildPublicFileUrl("certificate", fileName),
    }
  })
}

export async function getPortfolioData() {
  const filePath = path.join(process.cwd(), "public", "portfolio-data.json")
  const fileContent = await fs.readFile(filePath, "utf8")
  const data = JSON.parse(fileContent)

  data.certificates = await getCertificatesFromPublic(data.certificates || [])

  return data
}
