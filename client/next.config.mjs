/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.eu-west-1.amazonaws.com",
        port: "",
        pathname: "/s3.inventorymanagement/**",
      },
    ],
  },
};

export default nextConfig;
