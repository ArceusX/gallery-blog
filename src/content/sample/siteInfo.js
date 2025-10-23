/**
 * @file siteInfo.js
 * @description Site configuration.
 * This file contains the configuration data for the application.
 * Customize these values to configure the site's metadata, navigation, internationalization, and features for a production environment.
 */

import { mediaFiles } from '@utils/importMedia';

const siteInfo = {

  /**
   * @property {object} meta - General site metadata.
   * @property {string} appName - The name of the application, displayed in the navbar and footer.
   * @property {file} icon - The site's icon, displayed in the navbar and footer.
   * @property {file} banner: Image(s) shown at the top of the home page
   * @property {string} bannerText: Text overlaid over banner
   */
  meta: {
    appName: "Beautify SD",
    icon: mediaFiles.turtle,
    banner: [mediaFiles.banner, mediaFiles.coastal, mediaFiles.mission_bay, ],
    bannerText: {
      en: "Cleaning Beaches & Documenting Wildlife in San Diego",
      es: "Cuidando playas y fauna en San Diego",
    }
  },

  /**
   * @property {object} personal - Personal and contact information.
   * @property {string} author - Name, displayed in the footer.
   * @property {string} authorEmail - Email, displayed in the footer.
   * @property {string} github - A link to the author's GitHub profile.
   * @property {string} contactEmail - The recipient email for the contact form.
   *   This address should be registered with an email service like SendGrid to handle form submissions.
   */
  personal: {
    author: "Triet Lieu",
    authorEmail: "trielieu@gmail.com",
    github: "https://github.com/ArceusX/gallery-blog",
    address: "4667 Ocean Blvd, San Diego, CA 92109",
    contactEmail: "PUT_OWN_EMAIL@gmail.com",
  },

  /**
   * @property {object[]} navbarPaths - Defines the links in the main navigation bar.
   * @property {string} path - The URL path for the link (e.g., "/about").
   * @property {string} label - The key for the link's text, used for translation.
   */
  navbarPaths: [
    { path: "/about", label: "About" },
    { path: "/calendar", label: "Calendar" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ],
  localeMap: {
    en: "en-US",
    es: "es-ES",
    cn: "zh-CN",
  },

  /**
   * @property {object[]} languages - Defines the languages available in the language selector.
   * @property {string} code - The ISO 639-1 language code (e.g., "en").
   * @property {string} name - The English name of the language.
   * @property {string} nativeName - The name of the language in its native script.
   * @property {string} flag - A URL to an image of the language's flag.
   */
  languages: [
    {
      code: "en",
      name: "English",
      nativeName: "English",
      flag: "https://flagcdn.com/w40/gb.png"
    },
    {
      code: "es",
      name: "Spanish",
      nativeName: "Español",
      flag: "https://flagcdn.com/w40/es.png"
    },
    {
      code: "cn",
      name: "Chinese",
      nativeName: "中文",
      flag: "https://flagcdn.com/w40/cn.png"
    }
  ],

  /**
   * Shown on About page if active == true, but unused of == false
   * 
   * @property {object} fundraising - Configuration for the fundraising progress bar.
   * @property {boolean} active - Set to true to display the progress bar.
   * @property {string} mission - The fundraising mission statement.
   * @property {string} description - Elaborates on mission
   * @property {number} raised - The total amount raised.
   * @property {number} goal - The fundraising goal.
   * @property {number} nDonors - The number of donors.
   */
  fundraising: {
    active: true,
    mission: "To restore San Diego’s beaches and wetlands",
    description: "We’re raising funds to support monthly cleanups, provide cleanup supplies like gloves and reusable bags, and expand our reach to neglected coastal areas. Every donation helps us protect marine life, preserve natural beauty, and inspire community action for a cleaner, healthier coast.",
    image: mediaFiles.clean,
    raised: 6000,
    goal: 10000,
    nDonors: 26,
  },
};

export default siteInfo;
