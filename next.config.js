/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  async redirects() {
    return [
      // Discord
      {
        source: "/ds",
        destination: "https://discord.com/invite/RAJ4uJ4KZU",
        permanent: true,
      },

      // Telegram
      {
        source: "/tg",
        destination: "https://t.me/necorp",
        permanent: true,
      },

      // Support
      {
        source: "/support",
        destination: "https://t.me/newwwobot",
        permanent: true,
      },

      // Twitch
      {
        source: "/tw",
        destination: "https://twitch.tv/wesleezz",
        permanent: true,
      },

      // TikTok
      {
        source: "/tt",
        destination: "https://www.tiktok.com/@nekocorp.gq",
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
      // Discord assets
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },

      // Spotify assets
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },

      // GitHub assets
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};
