/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_QLIK_WEB_INTEGRATION_ID: "XnURs8yKWbNLCPO2Wfsgb39TAiAlb6Xu",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://osivamh5v2wvbf2.in.qlikcloud.com; default-src 'self'; script-src 'self' 'unsafe-inline'; connect-src 'self' https://osivamh5v2wvbf2.in.qlikcloud.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
