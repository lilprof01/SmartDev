import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LoadUp = () => {
  // TODO: implement loader to help load data and web images before navigation
  const mainRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const textArray: Array<string> = ["Welcome🙂"]; // Array of texts to type out
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Split text into an array of graphemes (to handle emojis properly)
  const splitText = (text: string) => [...text];

  // Typing effect logic
  useEffect(() => {
    if (isComplete) return; // Stop further updates if typing is complete

    const currentText = splitText(textArray[0]); // Split current text into graphemes
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 120);

      return () => clearTimeout(timeout);
    } else {
      // Mark as complete after the last text is typed
      const completeTimeout = setTimeout(() => {setIsComplete(true);}, 400); // Delay before marking as complete
      return () => clearTimeout(completeTimeout);
    }
  }, [charIndex, textArray, isComplete]);

  // Handle fade-out animation and navigation when typing is complete
  useEffect(() => {
    if (!isComplete) return;

    const fadeTimeout = setTimeout(() => {
      mainRef.current?.classList.add(
        "fixed",
        "bottom-0",
        "top-0",
        "right-0",
        "left-0",
        "scale-200",
        "opacity-0"
      );
    }, 2000); // Delay for fade-out animation so user has time to read the text

    const navigateTimeout = setTimeout(() => {
      navigate("/home");
    }, 2500); // Delay for navigation after fade-out

    return () => {
      clearTimeout(fadeTimeout); // Clear fade timeout
      clearTimeout(navigateTimeout); // Clear navigation timeout
    };
  }, [isComplete, navigate]);

  return (
    // LoadUp component before main page
    <motion.main
      ref={mainRef}
      className="h-screen flex flex-col justify-start items-center transition-all duration-500 pt-10"
    >
      <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-black bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="flex flex-col items-center gap-4 relative w-full h-[70%] p-20 lg:p-10">
        <div className="h-60 w-40 py-5 rounded-full bg-[url('/avatar.png')] bg-center bg-cover"></div>
        <h1 className="text-xl text-center font-bold">I'm Aniyajuwon Pelumi</h1>
        <div className="">
          <h1 className={`text-4xl text-center ${!isComplete ? "" : "fade-out"}`}>
            {displayText}
            <span className={`${!isComplete ? 'blink' : ''}`}>_</span>
          </h1>
        </div>
        <div className={`wrapper ${isComplete ? "fade-in" : "hidden"}`}>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      </div>
    </motion.main>
  );
};

export default LoadUp;
