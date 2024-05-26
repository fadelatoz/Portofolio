const withPWA = require('next-pwa');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const getConfig = (phase, { defaultConfig }) => {
  const config = {
    ...defaultConfig,
    eslint: {
      ignoreDuringBuilds: process.env.LINTMODE === 'nolint',
    },
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      removeConsole: process.env.NODE_ENV !== "development",
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    pwa: {
      dest: 'public',
      dynamicStartUrl: false,
      register: false,
      skipWaiting: false,
      buildExcludes: [/middleware-manifest\.json$/],
    },
  };

  if (phase === PHASE_PRODUCTION_BUILD) {
    const getBuildId = require('./src/util/buildId.js');
    const getStaticPrecacheEntries = require('./src/util/staticPrecache.js');
    const getGeneratedPrecacheEntries = require('./src/util/precache.js');

    const buildId = getBuildId();

    config.generateBuildId = getBuildId;
    config.pwa.additionalManifestEntries = [
      ...getStaticPrecacheEntries({
        publicExcludes: [
          '!*.png',
          '!*.ico',
          '!browserconfig.xml',
        ],
      }),
      ...getGeneratedPrecacheEntries(buildId),
    ];
  }

  return config;
};

module.exports = withPWA(getConfig);
