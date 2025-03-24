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
              "default-src 'self'; style-src 'self' 'unsafe-inline' https://osivamh5v2wvbf2.in.qlikcloud.com; frame-src https://osivamh5v2wvbf2.in.qlikcloud.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://osivamh5v2wvbf2.in.qlikcloud.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
