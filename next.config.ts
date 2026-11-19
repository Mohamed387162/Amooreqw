import type {NextConfig} from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const normalizedBasePath =
  rawBasePath && rawBasePath !== '/'
    ? `/${rawBasePath.replace(/^\/+|\/+$/g, '')}`
    : '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  ...(isGitHubPages
    ? {
        output: 'export',
        trailingSlash: true,
        ...(normalizedBasePath
          ? {
              basePath: normalizedBasePath,
              assetPrefix: `${normalizedBasePath}/`,
            }
          : {}),
        images: {
          unoptimized: true,
        },
      }
    : {
        output: 'standalone',
        // Allow access to remote image placeholder.
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'picsum.photos',
              port: '',
              pathname: '/**', // This allows any path under the hostname
            },
          ],
        },
      }),
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
