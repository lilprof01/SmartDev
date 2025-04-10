import { Header } from "@/Components/Main";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { NotebookText } from "lucide-react";
import { Hero } from "@/Components/Main/AboutsPage";
import Divider from "@/Components/UI/Divider";

const Abouts = () => {
  return (
    <main className="relative bg-black p-8 sm:pt-16 sm:px-16 transition-all duration-500">
      <Header />
      <Hero />
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
  const inView = useInView(sectionRef, { once: false });
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
        <motion.div
          initial={{ y: "200px" }}
          animate={inView ? { y: "0" } : { y: "200px" }}
          transition={{ duration: 1.5 }}
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`bg-center bg-cover h-[500px] w-full z-10 text-7xl flex justify-end items-center gap-4 py-4 sticky top-0 rounded-3xl`}
        >
          Bio <NotebookText size={50} />
        </motion.div>
        <Divider y={y} />
        <motion.div
          className="bg-blue-500 h-full w-full z-10 rounded-3xl"
        ></motion.div>
      </div>
    </section>
  );
};
