import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              frame-ancestors 'self' https://osivamh5v2wvbf2.in.qlikcloud.com;
              frame-src https://osivamh5v2wvbf2.in.qlikcloud.com;
              connect-src 'self' https://osivamh5v2wvbf2.in.qlikcloud.com;
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data:;
              object-src 'none';
            `.replace(/\s{2,}/g, " "), // Removes extra spaces for cleaner output
          },
        ],
      },
    ];
  },
};

export default nextConfig;
