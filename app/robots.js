// Generates /robots.txt — disallow all crawlers.
export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: [{ userAgent: '*', disallow: '/' }],
  }
}
