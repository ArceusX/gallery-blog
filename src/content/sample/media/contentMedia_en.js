/**
 * @file contentMedia_en.js
 * @description English content for media items.
 *
 * This file defines content for the Gallery home page in English.
 * The structure is an array of objects, where each object represents a media card.
 *
 * Each object has the following properties:
 *
 * - `id` (number): A unique identifier for the media item.
 * - `date` (string): The date associated with the item, in "YYYY-MM-DD" format.
 * - `title` (string): The title displayed on the media card.
 * - `type` (string): The type of media. Can be 'image' or 'video'.
 * - `src` (string): The source of the media. This can be a URL or a locally imported file
 *   from the `mediaFiles` object (see `src/utils/importMedia.js`).
 * - `tags` (string[]): An array of strings representing tags for filtering.
 * - `text` (string): The descriptive text that appears on the media card.
 */
import { mediaFiles } from '@utils/importMedia';

const contentMedia_en = [
  {
    id: 1,
    date: "2025-01-02",
    title: 'Braving the Winter Shoreline',
    files: [
      { src: mediaFiles.seal, type: 'image' },
      { src: mediaFiles.sea_lion, type: 'image' }
    ],
    tags: ["cleanup", "community"],
    text: 'Our small team cleaned up the beach despite chilly winds, spotting seals along the way.'
  },
  {
    id: 2,
    date: "2025-01-23",
    title: 'Hiking the Coastal Trails',
    files: [
      { src: "https://www.youtube.com/shorts/vRkfjilSc2Q", type: 'video' }
    ],
    tags: ["adventure", "wildlife", "community"],
    text: 'We spent the morning hiking along the coastal trails near La Jolla. The air was crisp, waves crashing below, and we spotted egrets and pelicans along the cliffs. It felt good to be outside, connecting with nature and seeing the wildlife up close.'
  },
  {
    id: 3,
    date: "2025-02-13",
    title: 'Trash Patrol at Mission Bay',
    files: [
      { src: mediaFiles.mission_bay, type: 'image' },
      { src: "https://www.youtube.com/shorts/t_Z8kklpz68", type: 'video' }
    ],
    tags: ["cleanup", "community", "wildlife"],
    text: 'Volunteers spent a sunny afternoon removing litter from Mission Bay, spotting crabs and shorebirds along the way and leaving the area cleaner for everyone.'
  },
  {
    id: 4,
    date: "2025-03-06",
    title: 'Spring Beach Cleanup',
    files: [
      { src: "https://www.youtube.com/watch?v=sWfN5mRosTg", type: 'video' },
      { src: mediaFiles.cleanup, type: 'image' },
      { src: mediaFiles.clean, type: 'image' }
    ],
    tags: ["community", "cleanup", "wildlife"],
    text: 'Volunteers cleared debris while spotting migratory birds returning to the coast—nature and people working together.'
  },
  {
    id: 5,
    date: "2025-03-27",
    title: 'Restoring Hidden Coastal Habitats',
    files: [
      { src: "https://www.youtube.com/shorts/Zp_YxECtrjU", type: 'video' }
    ],
    tags: ["wildlife", "sustainability"],
    text: 'We replanted native grasses and shrubs to give small wildlife a safe space to thrive along the shoreline.'
  },
];


export default contentMedia_en;
