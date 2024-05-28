import withBundleAnalyzer from '@next/bundle-analyzer';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  distDir: 'build',

  webpack: (config) => {
    // Add rule for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  analyzerMode: 'static',
  openAnalyzer: false,
  logLevel: 'warn',
});

export default bundleAnalyzer(nextConfig);
