/** @type {import('next').NextConfig} */

const path = require("path")

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  // add @import 'styles/_functions'; to all scss files.
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import 'styles/_functions';`,
  },
  // redirects: async () => {
  //   return [
  //     {
  //       source: "/home",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
