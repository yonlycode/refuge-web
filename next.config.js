const { resolve } = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      type: 'asset/resource',
    });

    config.resolve.alias['@'] = resolve(
      __dirname,
      'src',
    );

    return config;
  },
};

module.exports = nextConfig;
