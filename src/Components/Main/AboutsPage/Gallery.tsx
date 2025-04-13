import Art from "@/Components/UI/Art";
import { useNavigate } from "react-router-dom";
const Gallery = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/home#contact");
  };
  return (
    <section>
      <div className="relative h-[700vh] sm:h-[900vh] w-full bg-white dark:bg-black/60 mt-20 z-20">
        <div className="h-[99vh] shadow-xl text-black dark:text-white dark:bg-black sticky top-0 flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col justify-between items-center">
            <p className="text-lg">A few of my</p>
            <h2 className="text-7xl">Artworks</h2>
          </div>

          <button
            onClick={goToContact}
            className="border border-black dark:border-white py-2 px-6 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer transition-all duration-300"
          >
            I'm interested
          </button>
        </div>
        <Art
          top="top-1/4 sm:top-1/5"
          title="Afloat"
          size="16x24 inches"
          bg="/Artworks/Image.jpg"
        />
        <Art
          bottom="bottom-1/5 sm:bottom-1/4"
          right="lg:right-[500px] md:right-[350px] right-[0px]"
          title="Heritage"
          size="20x30 inches"
          bg="/Artworks/Image1.jpg"
        />
        <Art
          top="top-[800px]"
          right="right-[0px] sm:right-[150px]"
          title="Nil"
          size="16x20 inches"
          bg="/Artworks/Image2.jpg"
        />
        <Art
          top="top-1/2"
          left="left-[60px] sm:left-[50px]"
          title="Adumasha"
          size="22x30 inches"
          bg="/Artworks/Image3.jpg"
        />
        <Art
          top="top-1/3"
          left="sm:left-1/2"
          translate="sm:-translate-x-1/2"
          title="Mercedes Dream"
          size="16x20 inches"
          bg="/Artworks/Image4.jpg"
        />
        <Art
          bottom="bottom-1/9 sm:bottom-1/5"
          right="sm:right-[10px]"
          title="Nil"
          size="36x48 inches"
          bg="/Artworks/Image5.jpg"
        />
        <Art
          bottom="bottom-1/3 sm:bottom-1/9"
          right="lg:right-[600px] md:right-[400px]"
          title="Olamide"
          size="16x20 inches"
          bg="/Artworks/Image6.jpg"
        />
      </div>
    </section>
  );
};

export default Gallery;
