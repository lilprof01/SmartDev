import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const position = useTransform(scrollYProgress, [0, 1], ["0", "100px"]);

  return (
    <section className="h-[120vh] relative">
      <div
        ref={targetRef}
        className="sticky top-0 z-10 rounded-3xl overflow-clip h-[80vh] flex justify-center items-center mt-12"
      >
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            scale: fade,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-full h-full bg-[url(/light1.jpg)] dark:bg-[url(/hero3.jpg)] bg-cover bg-center z-10 text-center flex flex-col justify-center items-center gap-3"
        >
          <motion.div style={{opacity: fade}} className="absolute h-full w-full bg-neutral-100/80 dark:bg-neutral-950/70"></motion.div>
          <motion.h3
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
            style={{
              y: position,
            }}
            className="text-xl sm:text-4xl mt-24 z-10"
          >
            I'm Aniyajuwon Pelumi
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, x: 250 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
            style={{
              y: position,
            }}
            className="text-2xl sm:text-5xl z-10"
          >
            A Frontend Web Developer
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.8, ease: "easeInOut" }}
            style={{
              y: position,
            }}
            className="h-[50px] w-[25px] rounded-full border-2 dark:border-white flex justify-center items-center z-10 mt-16 sm:mt-0"
          >
            <motion.div
              initial={{
                y: "-20px",
                opacity: 0.6,
              }}
              animate={{ y: "15px", opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
              className="h-1 w-1 bg-black dark:bg-white rounded-full"
            ></motion.div>
          </motion.div>
          <motion.p style={{ y: position }} className="z-10">Scroll</motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
