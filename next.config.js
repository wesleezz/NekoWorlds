/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  async redirects() {
    return [
      {
        source: "/ds",
        destination: "https://discord.com/invite/RAJ4uJ4KZU",
        permanent: true,
      },
      {
        source: "/tg",
        destination: "https://t.me/necorp",
        permanent: true,
      },
      {
        source: "/tt",
        destination: "https://www.tiktok.com/@nekocorp.gq",
        permanent: true,
      },
      {
        source: "/tw",
        destination: "https://twitch.tv/wesleezz",
        permanent: true,
      },

      // Шутка на первое апреля
      {
        source: "/end",
        destination: "https://youtu.be/dQw4w9WgXcQ",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: ''
      },
    ],
  },
};
