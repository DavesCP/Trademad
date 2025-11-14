/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 🔥 obrigatório para GitHub Pages
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // necessário para export
  },
};

export default nextConfig;
