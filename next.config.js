/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  async redirects() {
    return [
      {
        source: '/ds',
        destination: 'https://dsc.gg/nekocorp',
        permanent: true,
      },
      {
        source: '/tg',
        destination: 'https://t.me/necorp',
        permanent: true,
      },
      {
        source: '/wz',
        destination: 'https://wesleezz.netlify.app',
        permanent: true,
      },
    ]
  },
}
