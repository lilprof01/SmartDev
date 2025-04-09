import { Header } from "@/Components/Main";
import { Gradient } from "@/Components/UI";
import { motion, spring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Abouts = () => {
  return (
    <main className="relative bg-gradient-to-br from-blue-200 to-white dark:from-blue-950 dark:via-black dark:to-black p-8 sm:pt-16 sm:px-16 transition-all duration-500">
      <Header />
      <Gradient />
      <div className="h-[300px] w-full bg-blue-600 mt-10"></div>
      <Section title="About Me" />
      <Section title="More" />
      <Section title="More!!!" />
      <div className="h-[300px] w-full bg-blue-600 mt-10"></div>
    </main>
  );
};

export default Abouts;

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({title}) => {
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
        className="h-screen flex justify-between items-start align-middle gap-8"
      >
        <div className="bg-black h-[80%] w-full z-10"></div>
        <Divider y={y} />
        <div className="bg-black h-[80%] w-full z-10"></div>
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
      transition={{ type: spring }}
      className="w-[10px] bg-white bg-gradient-to-b from-blue-600 via-blue-600 to-green-600"
    />
  );
};
