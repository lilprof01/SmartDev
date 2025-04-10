import { Header } from "@/Components/Main";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { NotebookText, BriefcaseBusiness, Palette } from "lucide-react";
import { Hero } from "@/Components/Main/AboutsPage";
import { Divider, Gradient } from "@/Components/UI";

const Abouts = () => {
  return (
    <main className="relative dark:bg-black p-8 sm:pt-16 sm:px-16 transition-all duration-500">
      <Header />
      <Gradient />
      <Hero />
      <Section
        title="About Me"
        cardTitle="Bio"
        image="/new2.jpg"
        cardNumber={1}
      />
      <Section
        title="Resume"
        cardTitle="Experience"
        image="/laptop2.jpg"
        cardNumber={2}
      />
      <Section
        title="More!!!"
        cardTitle="Hobbies"
        image="/laptop1.jpg"
        cardNumber={3}
      />
      <div className="h-[300px] w-full bg-blue-600 mt-10"></div>
    </main>
  );
};

export default Abouts;

interface SectionProps {
  title: string;
  cardTitle: string;
  image: string;
  cardNumber: number;
}

const Section: React.FC<SectionProps> = ({
  title,
  cardTitle,
  image,
  cardNumber,
}) => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const springY = useSpring(y, {
    stiffness: 40,
    damping: 15,
    mass: 1
  })
  return (
    <section className="">
      <h1 className="text-7xl text-center mb-4">{title}</h1>
      <div
        ref={sectionRef}
        className="h-[200vh] relative flex justify-between items-start align-middle gap-8"
      >
        <Left title={cardTitle} image={image} cardNumber={cardNumber} />
        <Divider y={springY} />
        <Right inView={inView} cardNumber={cardNumber} />
      </div>
    </section>
  );
};

interface LeftProps {
  title: string;
  image: string;
  cardNumber: number;
}

const Left: React.FC<LeftProps> = ({ title, image, cardNumber }) => {
  return (
    <motion.div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`bg-center bg-cover h-[500px] w-full z-10 text-4xl flex justify-end items-center gap-4 py-4 sticky top-0 rounded-3xl`}
    >
      <div className="absolute h-full w-full bg-black/60 rounded-3xl"></div>
      <h2 className="z-10">{title}</h2>{" "}
      {cardNumber === 1 && <NotebookText size={50} className="z-10" />}
      {cardNumber === 2 && <BriefcaseBusiness size={50} className="z-10" />}
      {cardNumber === 3 && <Palette size={50} className="z-10" />}
    </motion.div>
  );
};

interface RightProps {
  inView: boolean;
  cardNumber: number;
}

import { jobs } from "@/Constants/data";

const Right: React.FC<RightProps> = ({ inView, cardNumber }) => {
  return (
    <motion.div
      animate={inView ? { y: "0", scale: 1 } : { y: "100px", scale: 0.8 }}
      transition={{ duration: 1.5 }}
      className="bg-black h-full w-full z-10 rounded-3xl p-8 flex flex-col justify-start align-middle gap-6"
    >
      {cardNumber === 1 && (
        <h3 className="text-2xl font-semibold">Who Is Aniyajuwon</h3>
      )}
      {cardNumber === 2 && (
        <h3 className="text-2xl font-semibold">Work Experience</h3>
      )}
      {cardNumber === 3 && (
        <h3 className="text-2xl font-semibold">Things I Love to Do</h3>
      )}
      {cardNumber === 1 && (
        <div className="text-lg flex flex-col gap-2 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum
            quas qui nesciunt doloribus voluptatum aspernatur adipisci quos!
            Sapiente expedita consequuntur eaque illo similique nihil vero,
            perferendis consectetur. Possimus, nisi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum
            quas qui nesciunt doloribus voluptatum aspernatur adipisci quos!
            Sapiente expedita consequuntur eaque illo similique nihil vero,
            perferendis consectetur. Possimus, nisi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum
            quas qui nesciunt doloribus voluptatum aspernatur adipisci quos!
            Sapiente expedita consequuntur eaque illo similique nihil vero,
            perferendis consectetur. Possimus, nisi!
          </p>
        </div>
      )}
      {cardNumber === 2 && (
        <div>
          <ul className="text-xl flex flex-col justify-between align-middle gap-8 whitespace-nowrap">
            {jobs.map((job) => (
              <li className="flex justify-between items-center gap-2">
              <p className="">{job.position}: {job.company}</p>{" "}
              <div className="h-[1px] w-1/2 bg-white" />{" "}
              <p className="">{job.date}</p>
            </li>
            ))}
          </ul>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Education</h3>
            <ul className="text-xl flex flex-col justify-between align-middle gap-8 whitespace-nowrap">
              <li className="flex justify-between items-center gap-2">
                <p className="">Position: Company Company</p>{" "}
                <div className="h-[1px] w-1/2 bg-white" />{" "}
                <p className="">date</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
};
