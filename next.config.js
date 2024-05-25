// Configuration options for Next.js
const nextConfig = {
    reactStrictMode: true, // Enable React strict mode for improved error handling
    swcMinify: true,      // Enable SWC minification for improved performance
    compiler: {
      removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };
  
  // Configuration object tells the next-pwa plugin 
  const withPWA = require('next-pwa')({
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
    // fallbacks: {
    //   document: '/offline.html',  // Tambahkan halaman offline sebagai fallback
    // },
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 tahun
          },
        },
      },
      {
        urlPattern: /^https:\/\/use\.fontawesome\.com\/releases\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'font-awesome',
          expiration: {
            maxEntries: 1,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 tahun
          },
        },
      },
      {
        urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'jsdelivr',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 tahun
          },
        },
      },
      {
        urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'cloudflare',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 tahun
          },
        },
      },
      {
        urlPattern: /\/_next\/image\?url=.+$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'next-image',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
          },
        },
      },
      {
        urlPattern: /^https:\/\/del-portofolio\.vercel\.app\/_next\/.*/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'next-static',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 7 hari
          },
        },
      },
      {
        urlPattern: /.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'default',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 24 * 60 * 60, // 1 hari
          },
        },
      },
      {
        urlPattern: /home.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'default',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 24 * 60 * 60, // 1 hari
          },
        },
      },
    ],
  });
  
  
  // Export the combined configuration for Next.js with PWA support
  module.exports = withPWA(nextConfig)