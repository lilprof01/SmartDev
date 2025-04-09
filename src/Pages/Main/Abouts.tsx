import { Header } from "@/Components/Main";
import { Gradient } from "@/Components/UI";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { NotebookText } from "lucide-react";

const Abouts = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end"],
  });

  const fade = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const position = useTransform(scrollYProgress, [0, 1], ["-250px", "100px"]);
  return (
    <main className="relative bg-black p-8 sm:pt-16 sm:px-16 transition-all duration-500">
      <Header />
      {/* <Gradient /> */}
      <div className="sticky top-0 z-10 rounded-3xl overflow-clip h-[80vh] w-full mt-12 flex">
        <motion.div
          ref={targetRef}
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            opacity: fade,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full bg-[url(/hero3.jpg)] bg-cover bg-center z-10 text-center flex flex-col justify-center items-center gap-3"
        >
          <motion.h3
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
            style={{
              y: position,
            }}
            className="text-4xl"
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
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 2, delay: 1.8, ease: "easeInOut"}}
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
          <motion.p style={{y: position}}>Scroll</motion.p>
        </motion.div>
      </div>
      <Section title="About Me" image="/new2.jpg" />
      <Section title="More" image="/laptop2.jpg" />
      <Section title="More!!!" image="/laptop1.jpg" />
      <div className="h-[300px] w-full bg-blue-600 mt-10"></div>
    </main>
  );
};

export default Abouts;

interface SectionProps {
  title: string;
  image: string;
}

const Section: React.FC<SectionProps> = ({ title, image }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section className="">
      <h1 className="text-7xl text-center mb-4">{title}</h1>
      <div
        ref={sectionRef}
        className="h-[200vh] relative flex justify-between items-start align-middle gap-8"
      >
        <div
          className={`bg-[url(${image})] bg-center bg-cover h-[500px] w-full z-10 text-7xl flex justify-end items-center gap-4 py-4 sticky top-0 rounded-3xl`}
        >
          Bio <NotebookText size={50} />
        </div>
        <Divider y={y} />
        <div className="bg-black h-full w-full z-10 rounded-3xl"></div>
      </div>
    </section>
  );
};

interface DividerProps {
  y: any;
}

const Divider: React.FC<DividerProps> = ({ y }) => {
  return (
    <motion.div
      style={{
        height: y,
      }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="w-[10px] bg-white bg-gradient-to-b from-blue-600 via-blue-600 to-green-600 z-10"
    />
  );
};
