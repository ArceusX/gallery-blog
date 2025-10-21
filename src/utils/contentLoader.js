/*
 * contentLoader.js dynamically imports files from `content`
 * folder & organizes them into `content` object it returns.
 *
 * For this code to work correctly, ensure
 *  1. Folder name (e.g., "posts") matches a key in `content`.
 *  2. Filename (excluding extension, e.g., "contentPosts_en")
 *     ends with a 2-letter language code (e.g., "_en")
 **/

import { sortByDateAndId } from '@utils/sort';

// Dynamically import everything inside /content subfolders
const contentModules = import.meta.glob('@content/*/*.js', { eager: true });

// Initialize structure
const content = {
  posts: {},
  media: {},
  about: {},
  events: {},
};

// Loop through the imports
for (const [path, module] of Object.entries(contentModules)) {
  // Extract folder and file name
  const match = path.match(/([^/]+)\/([^/]+)\.js$/);
  if (!match) continue;
  const [, folder, filename] = match;

  // Extract language code (e.g. "_en", "_vn")
  const langMatch = filename.match(/_(\w+)$/);
  const lang = langMatch ? langMatch[1] : 'en';

  // Grab the default export
  const data = module.default;

  // Sort only posts and media
  if (folder === 'posts' || folder === 'media') {
    content[folder][lang] = [...data].sort(sortByDateAndId);
  } else {
    content[folder][lang] = data;
  }
}

export { content };
