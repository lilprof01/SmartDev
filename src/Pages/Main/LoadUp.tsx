import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoadUp = () => {
  const mainRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const textArray: Array<string> = [
    "Welcome🙂",
    "It's Time to Level Up your Digital Identity!🚀",
  ]; // Array of texts to type out
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0); // Index of the current text in the array
  const [charIndex, setCharIndex] = useState(0); // Index of the current character in current text
  const [isComplete, setIsComplete] = useState(false); // Tracks if all texts are typed out and animation is complete

  // Split text into an array of graphemes (to handle emojis properly)
  const splitText = (text: string) => [...text]; // Spread operator splits text into graphemes

  // Typing effect logic
  useEffect(() => {
    if (isComplete) return; // Stop further updates if typing is complete

    const currentText = splitText(textArray[textIndex]); // Split current text into graphemes
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 120);

      return () => clearTimeout(timeout); // Clear timeout on re-render
    } else if (textIndex < textArray.length - 1) {
      // Pause before starting the next text
      const pauseTimeout = setTimeout(() => {
        setDisplayText(""); // Clear the current text
        setCharIndex(0); // Reset character index for new text
        setTextIndex((prev) => prev + 1); // repeat typing for the new text
      }, 2000); // Pause duration after finishing a text

      return () => clearTimeout(pauseTimeout); // Clear this timeout on re-render
    } else {
      // Mark as complete after the last text is typed
      setIsComplete(true);
    }
  }, [charIndex, textIndex, textArray, isComplete]);

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
    }, 800); // Delay for fade-out animation so user has time to read the text

    const navigateTimeout = setTimeout(() => {
      navigate("/home");
    }, 1300); // Delay for navigation after fade-out

    return () => {
      clearTimeout(fadeTimeout); // Clear fade timeout
      clearTimeout(navigateTimeout); // Clear navigation timeout
    };
  }, [isComplete, navigate]);

  return (
    <main
      ref={mainRef}
      className="h-screen flex flex-col justify-start items-center transition-all duration-500 pt-10"
    >
      <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-black bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="flex flex-col items-center gap-4 relative w-full h-[70%] p-20 lg:p-10">
        <div className="h-60 w-40 py-5 rounded-full bg-[url('/avatar.png')] bg-center bg-cover"></div>
        <h1 className="text-xl text-center font-bold">I'm Aniyajuwon Pelumi</h1>
        <div className="absolute bottom-0">
          <h1 className="text-4xl text-center">
            {displayText}
            <span className="blink">_</span>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default LoadUp;
