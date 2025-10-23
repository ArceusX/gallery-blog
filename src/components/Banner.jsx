import { useEffect, useState } from "react";
import './css/Banner.css';

/**
 * A hero-style banner that displays a background image (or multiple images)
 * with overlay text. Automatically transition among images when multiple are provided
 *
 * @param {string|string[]} images - A single image URL or an array of URLs to display in rotation.
 * @param {string} text - The text displayed over the banner.
 * @param {number} [interval=4000] - Time in milliseconds between image transitions.
 */
function Banner({ images, text, interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const multiple = Array.isArray(images);
  
  useEffect(() => {
    if (!multiple) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, multiple]);
  
  const currentImage = multiple ? images[currentIndex] : images;
  
  return (
    <div
      className="banner-section"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <div className="banner-overlay"></div>
      <h2 className="banner-text">{text}</h2>
    </div>
  );
}

export default Banner;