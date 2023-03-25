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
        destination: 'https://discord.com/invite/RAJ4uJ4KZU',
        permanent: true,
      },
      {
        source: '/tg',
        destination: 'https://t.me/necorp',
        permanent: true,
      },
      {
        source: '/tt',
        destination: 'https://www.tiktok.com/@nekocorp.gq',
        permanent: true,
      },
      {
        source: '/tw',
        destination: 'https://twitch.tv/wesleezz',
        permanent: true,
      },
    ]
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths: [path.join(__dirname, "styles")],
            },
          },
        },
      ],
    });

    return config;
  },
};