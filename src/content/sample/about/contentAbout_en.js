/**
 * @file contentAbout_en.js
 * @description English content for the About page.
 *
 * This file defines the content for the "About" page in English.
 * The structure is an array of objects, where each object represents a section on the page.
 *
 * The `type` property of each object determines the kind of content to be rendered.
 *
 * Supported types and their properties:
 *
 * 1. type: 'text'
 *    - Renders a text block with a heading and a paragraph.
 *    - `title` (string): The heading for the section.
 *    - `content` (string): The main text content of the paragraph.
 *
 * 2. type: 'image'
 *    - Renders an image with an optional caption.
 *    - `src` (string): The image source, typically imported from `mediaFiles`.
 *    - `alt` (string): The alternative text for the image, for accessibility.
 *    - `caption` (string, optional): A caption to be displayed below the image.
 *
 * 3. type: 'video'
 *    - Renders a video player with an optional caption.
 *    - `src` (string): The video source, which can be a local file (from `mediaFiles`) or a URL.
 *    - `caption` (string, optional): A caption to be displayed below the video.
 */
import { mediaFiles } from '@utils/importMedia';

const contentAbout_en = [
  {
    type: 'text',
    title: 'Our Mission',
    content: 'We’re a San Diego–based community of volunteers, hikers, and ocean lovers working to keep our coastlines clean and thriving. Through regular beach cleanups, nature hikes, and educational events, we aim to protect local wildlife and inspire others to care for the places we all enjoy.'
  },
  {
    type: 'text',
    title: 'Why We Care',
    content: 'Our beaches and wetlands aren’t just beautiful — they’re vital ecosystems that support countless species and protect our coast from erosion. By removing waste and raising awareness, we’re helping preserve San Diego’s natural balance for future generations.'
  },
  {
    type: 'image',
    src: mediaFiles.cleanup,
    alt: 'Volunteers cleaning up trash along the beach',
    caption: 'Every cleanup makes a difference — one piece of trash at a time.'
  },
  {
    type: 'video',
    src: "https://www.youtube.com/watch?v=sWfN5mRosTg",
    caption: 'Discover how coastal conservation efforts protect San Diego’s marine life.'
  },
];

export default contentAbout_en;