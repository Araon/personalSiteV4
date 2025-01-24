// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "styles.redditmedia.com",
      "user-images.githubusercontent.com",
      "upload.wikimedia.org",
      "github.com",
      "tailwindui.com",
      "images.unsplash.com",
      "cdn.dribbble.com",
      "m.media-amazon.com",
      "ik.imagekit.io",
      "miro.medium.com",
      "store.storeimages.cdn-apple.com",
      "www.apple.com",
      "i.ytimg.com",
      "media.licdn.com",
      "uploads-ssl.webflow.com",
      "j.gifs.com",
      "dicebear.com",
      "raw.githubusercontent.com",
      "i.scdn.co" // Spotify album artwork
    ],
  },
};

module.exports = withContentlayer(nextConfig);
