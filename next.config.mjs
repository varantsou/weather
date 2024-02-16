/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    // Добавляем правило для обработки SVG файлов с помощью @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Возвращаем измененную конфигурацию
    return config;
  },
};

export default nextConfig;
