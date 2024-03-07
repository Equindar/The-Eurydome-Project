import withBundleAnalyzer from '@next/bundle-analyzer';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  distDir: 'build',
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  analyzerMode: 'static',
  openAnalyzer: false,
  logLevel: 'warn',
});

export default bundleAnalyzer(nextConfig);
