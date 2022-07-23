/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      type: 'asset/resource',
    });

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.alias,
          ...{ '@': './src/' },
        },
      },
    };
  },
};

module.exports = nextConfig;
