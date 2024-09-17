/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:3001',
    },
  };
  
  export default nextConfig;
  