// Get all image and video files in /assets, associate
// with name extracted from file's name, export for use

const media = import.meta.glob('@assets/*.{mp4,jpg,jpeg,png,svg,webp,gif}', { eager: true });
const mediaFiles = {};

for (const path in media) {
  const name = path.match(/\/([\w-]+)\.(mp4|jpg|jpeg|png|svg|webp|gif)$/i)[1];
  mediaFiles[name] = media[path].default;
}

export { mediaFiles };
