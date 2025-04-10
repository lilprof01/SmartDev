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
            <div ref={targetRef} className="sticky top-0 z-10 rounded-3xl overflow-clip h-[80vh] flex justify-center items-center mt-12">
              <motion.div
                initial={{ opacity: 0, y: -250 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  opacity: fade,
                  scale: fade,
                }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="w-full h-full bg-[url(/hero3.jpg)] bg-cover bg-center z-10 text-center flex flex-col justify-center items-center gap-3"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -250 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
                  style={{
                    y: position,
                  }}
                  className="text-4xl mt-24"
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
                  className="text-5xl"
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
                  className="h-[70px] w-[40px] rounded-full border-2 border-white flex justify-center items-center"
                >
                  <motion.div
                    initial={{
                      y: "-30px",
                      opacity: 1,
                    }}
                    animate={{ y: "30px", opacity: 0.8 }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="h-1 w-1 bg-white rounded-full"
                  ></motion.div>
                </motion.div>
                <motion.p style={{ y: position }}>Scroll</motion.p>
              </motion.div>
            </div>
          </section>
  )
}

export default Hero
