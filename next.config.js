/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const nextConfig = {
  reactStrictMode: false,
  ...nextTranslate(),
  // reactStrictMode: true,
  images: {
    domains: [
      "api-host.disdicilo.it",
      "hurrairaaa.disdicilo.it",
      "static.ghost.org"
    ]
  }
}

module.exports = nextConfig