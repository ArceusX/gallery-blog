/**
 * @file contentAbout_es.js
 * @description Spanish content for the About page.
 */
import { mediaFiles } from '@utils/importMedia';

const contentAbout_es = [
  {
    type: 'text',
    title: 'Nuestra Misión',
    content: 'Somos una comunidad de voluntarios, excursionistas y amantes del océano con sede en San Diego, que trabaja para mantener nuestras costas limpias y prósperas. A través de limpiezas regulares de playas, caminatas por la naturaleza y eventos educativos, buscamos proteger la vida silvestre local e inspirar a otros a cuidar los lugares que todos disfrutamos.'
  },
  {
    type: 'text',
    title: 'Por Qué Nos Importa',
    content: 'Nuestras playas y humedales no solo son hermosos — son ecosistemas vitales que sustentan innumerables especies y protegen nuestra costa de la erosión. Al eliminar desechos y crear conciencia, ayudamos a preservar el equilibrio natural de San Diego para las generaciones futuras.'
  },
  {
    type: 'image',
    src: mediaFiles.cleanup,
    alt: 'Voluntarios limpiando basura a lo largo de la playa',
    caption: 'Cada limpieza marca la diferencia — un pedazo de basura a la vez.'
  },
  {
    type: 'video',
    src: "https://www.youtube.com/watch?v=sWfN5mRosTg",
    caption: 'Descubre cómo los esfuerzos de conservación costera protegen la vida marina de San Diego.'
  },
];


export default contentAbout_es;
