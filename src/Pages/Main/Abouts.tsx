import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/Components/Main";

const Abouts = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"], // stick from top until end reaches top
  });

  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="relative bg-gradient-to-br from-blue-200 to-white dark:from-blue-950 dark:via-black dark:to-black transition-all duration-500">
      <Header />

      {/* Sticky Section */}
      <section className="h-[200vh]" ref={scrollRef}>
        <div className="sticky top-0 h-screen flex items-center justify-center z-10 p-8">
          <motion.div
            style={{ scale: fade }}
            className="text-4xl bg-black/70 h-full w-full flex flex-col items-center justify-center rounded-3xl"
          >
            <motion.div
              style={{
                opacity: fade,
                y: useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]),
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-3xl bg-[url('/avatar.png')] bg-cover bg-center w-64 h-64 rounded-full mb-4"
            >
              
            </motion.div>
            <motion.div
              style={{
                opacity: fade,
                y: useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]),
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-3xl"
            >
              Welcome back
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* After the scroll section */}
      <section className="h-screen w-full bg-blue-500 z-0 flex items-center justify-center text-white text-4xl">
        I'm after the sticky section
      </section>
    </main>
  );
};

export default Abouts;
