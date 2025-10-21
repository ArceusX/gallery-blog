/**
 * @file contentPosts_en.js
 * @description English content for blog posts.
 *
 * This file defines the content for the blog posts in English.
 * The structure is an array of post objects. Each object represents a single blog post.
 *
 * Each post object has the following properties:
 *
 * - `id` (number): A unique identifier for the post.
 * - `author` (string): The name of the post's author.
 * - `date` (string): The publication date in "YYYY-MM-DD" format.
 * - `title` (string): The main title of the post.
 * - `subtitle` (string): The subtitle that appears below the main title.
 * - `tags` (string[]): An array of strings for filtering and categorization.
 * - `items` (object[]): An array of content blocks that make up the body of the post.
 *
 * The `items` array can contain objects of different types:
 *
 * 1. type: 'text'
 *    - Renders a paragraph of text.
 *    - `content` (string): The text content.
 *
 * 2. type: 'image'
 *    - Renders an image with a caption.
 *    - `src` (string): The image source from `mediaFiles`.
 *    - `alt` (string): The alternative text for the image.
 *    - `caption` (string): The caption displayed below the image.
 *
 * 3. type: 'video'
 *    - Renders a video player with a caption.
 *    - `src` (string): The video source (URL or local file).
 *    - `caption` (string): The caption displayed below the video.
 */
import { mediaFiles } from '@utils/importMedia';

const contentPosts_en = [
  {
    id: 1,
    author: "Jane Doe",
    date: "2025-05-20",
    title: "Impact of Microplastics on Coastal Ecosystems",
    subtitle: "Understanding pollution on our beaches",
    tags: ["pollution", "microplastics", "environment"],
    items: [
      {
        type: 'image',
        src: 'https://static.scientificamerican.com/sciam/cache/file/B7B4EC45-7FAF-4A26-B4AE872ABC0DD2CF_source.jpg',
        alt: "A fish with microplastic particles in its stomach",
        caption: "Microplastics ingested by fish accumulate in their digestive systems, entering the food chain up into humans' diets",
      },
      {
        type: "text",
        content:
          "Microplastics are a growing concern along San Diego's coast. These tiny fragments can be ingested by marine life, leading to health issues and bioaccumulation in the food chain. Studies show that beach cleanups can significantly reduce local concentrations, but broader strategies are needed to tackle the root causes of plastic pollution.",
      },
    ],
  },

  {
    id: 2,
    author: "John Smith",
    date: "2025-05-22",
    title: "Coastal Hiking and Wildlife Observation",
    subtitle: "How recreational activities intersect with local ecology",
    tags: ["wildlife", "coastal trails", "ecology"],
    items: [
      {
        type: "text",
        content:
          "Hiking along San Diego's coastal trails offers more than scenic views—it provides opportunities for wildlife observation. Birds such as pelicans, egrets, and shorebirds are highly sensitive to human presence. Proper trail etiquette, including keeping distance and avoiding disturbing nesting areas, helps preserve their natural behavior while allowing for educational experiences.",
      },
      {
        type: "image",
        src: mediaFiles.banner,
        alt: "Scenic view from Torrey Pines State Park trail",
        caption: "Torrey Pines State Park offers breathtaking views and diverse wildlife.",
      },
    ],
  },

  {
    id: 3,
    author: "Emily Green",
    date: "2025-05-28",
    title: "Importance of Wetlands",
    subtitle: "Protecting habitats in urban environments",
    tags: ["wetlands", "biodiversity", "conservation"],
    items: [
      {
        type: "video",
        src: 'https://www.youtube.com/watch?v=OKggI7WkRp4',
        caption: "From providing homes for birds to protecting coastlines from floods, wetlands are nature’s multitaskers keeping our environment thriving",
      },
      {
        type: "image",
        src: 'https://scwrp.org/wp-content/uploads/2013/12/San_Elijo_Lagoon_TimBuss-570x358.jpg',
        alt: "San Elijo Lagoon",
        caption: "The San Elijo Lagoon spans across 979-acres in the city of Encinitas and hosts over 700 species of plants and wildlife, including some rare and endangered species. ",
      },
      {
        type: "text",
        content:
          "Mission Bay's wetlands are critical habitats for migratory birds, fish, and native plants. Conservation efforts, such as controlling invasive species and monitoring water quality, are essential to maintain biodiversity. Studies indicate that even small-scale interventions by local communities can improve ecological resilience and habitat quality.",
      },
    ],
  },
];

export default contentPosts_en;