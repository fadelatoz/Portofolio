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
    register: true,
    
    skipWaiting: true,
    sw: '/sw.js',
    // runtimeCaching: [
    //   {
    //     urlPattern: "/",
    //     handler: 'NetworkFirst',
    //     options: {
    //       cacheName: 'pages-cache',
    //     },
    //   },
    // ],    
    // disable: process.env.NODE_ENV === 'development'
  })
  
  // Export the combined configuration for Next.js with PWA support
  module.exports = withPWA(nextConfig)