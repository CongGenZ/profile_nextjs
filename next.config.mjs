/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // ✅ Tắt Turbopack để tránh lỗi
  },
};

export default nextConfig;
