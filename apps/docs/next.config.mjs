import createBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type{import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
}

export default withBundleAnalyzer(config)
