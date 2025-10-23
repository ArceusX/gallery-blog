import useLanguageStore from "../store/languageStore";
import Gallery from "../components/Gallery";
import Banner from "../components/Banner";
import "./css/Home.css";

function Home({ items, images, text }) {
  const { language } = useLanguageStore();

  return (
    <div className="home-container">
      <Banner images={images} text={text[language.code]} />
      <div className="home-divider"></div>
      <Gallery items={items} />
    </div>
  );
}

export default Home;
