/** @type {import('next').NextConfig} */
import { hostname } from "node:os";
import path, { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // 配置图片
  images: {
    // 还可以配置多个域
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      },{
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  }
};

export default nextConfig;
