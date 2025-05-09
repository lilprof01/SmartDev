import { Footer, Header } from "@/Components/Main";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import {
  NotebookText,
  BriefcaseBusiness,
  Palette,
  Laptop,
  Gamepad2,
} from "lucide-react";
import { Blog, Gallery, Hero } from "@/Components/Main/AboutsPage";
import { Divider, Gradient, ThemeToggle } from "@/Components/UI";

// Abouts Page
const Abouts = () => {
  return (
    <main className="relative dark:bg-black p-8 sm:pt-16 sm:px-16 transition-all duration-500">
      <Header />
      <Gradient />
      <Hero />
      <Section
        title="About Me"
        cardTitle="Bio"
        image="/LeftDiv/new2.jpg"
        cardNumber={1}
      />
      <Section
        title="Resume"
        cardTitle="Exp"
        image="/LeftDiv/laptop2.jpg"
        cardNumber={2}
      />
      <Section
        title="More!!!"
        cardTitle="Fun"
        image="/LeftDiv/laptop1.jpg"
        cardNumber={3}
      />
      <Gallery />
      <Blog />
      <Footer />
      <ThemeToggle className="fixed bottom-5 right-5 sm:hidden hover:cursor-pointer" />
    </main>
  );
};

export default Abouts;

// Section component
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
    damping: 20,
  });
  return (
    <section className="mb-10">
      <h1 className="text-3xl sm:text-7xl text-center mb-4">{title}</h1>
      <div
        ref={sectionRef}
        className="h-full relative flex justify-between items-start align-middle gap-8"
      >
        <Left title={cardTitle} image={image} cardNumber={cardNumber} />
        <Divider y={springY} />
        <div className=""></div>
        <Right inView={inView} cardNumber={cardNumber} />
      </div>
    </section>
  );
};

// Left Div component
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
      className={`hidden bg-center bg-cover h-[400px] w-full z-10 text-4xl sm:flex justify-end items-center gap-4 py-4 sticky top-0 rounded-3xl`}
    >
      <div className="absolute h-full w-full dark:bg-black/60 rounded-3xl"></div>
      <h2 className="z-10 text-white">{title}</h2>{" "}
      {cardNumber === 1 && (
        <NotebookText size={50} className="z-10 text-white" />
      )}
      {cardNumber === 2 && (
        <BriefcaseBusiness size={50} className="z-10 text-white" />
      )}
      {cardNumber === 3 && <Palette size={50} className="z-10 text-white" />}
    </motion.div>
  );
};

// Right div component
interface RightProps {
  inView: boolean;
  cardNumber: number;
}

import { jobs, Education } from "@/Constants/data";
import { useNavigate } from "react-router-dom";

const Right: React.FC<RightProps> = ({ inView, cardNumber }) => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/home#contact");
  };
  return (
    <motion.div
      animate={inView ? { y: "0", scale: 1 } : { y: "100px", scale: 0.8 }}
      transition={{ duration: 1.5 }}
      className="bg-white dark:bg-black/70 h-full w-full z-10 rounded-3xl p-8 flex flex-col justify-start align-middle gap-6"
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
        <div className="sm:text-lg flex flex-col gap-2 leading-relaxed">
          <p className="font-semibold">
            Hi, my name is Aniyajuwon Oluwapelumi IyanuOluwa but you can call me
            Smart. I hail from a small town on the West African coast — Nigeria
            to be precise.
          </p>
          <p className="mt-5">
            I’m a passionate Frontend Developer with a deep love for crafting
            sleek, interactive, and user-focused web experiences. My journey
            into tech started with curiosity and quickly grew into a full-blown
            dedication to learning how beautiful, responsive interfaces come to
            life — from layout to logic.
          </p>
          <p className="mt-5">
            Over the years, I’ve built and collaborated on projects that
            involved technologies like React, Tailwind CSS, Javascript,
            Typescript and Framer Motion. I love translating ideas into
            pixel-perfect designs, but more than that, I enjoy making interfaces
            feel intuitive and enjoyable to use. I pay special attention to
            animation, accessibility, and performance because I believe great
            user experience is a balance of form and function.
          </p>
          <p className="mt-5">
            When I’m not coding, I am either Creating timepieces on canvas or
            exploring UI trends for future inspirations, or learning new tools,
            or simply sharing my knowledge with others in the dev community.
            Every project I take on teaches me something new — whether it’s
            improving code structure, enhancing page speed, or finding clever
            ways to solve layout challenges. My ultimate goal is to create
            digital products that not only look great but also solve real
            problems. And I’m constantly learning, iterating, and improving to
            make that happen.
          </p>
          <p className="mt-5 font-bold"><span className="text-blue-600">&lt;/</span>one line of code after the other<span className="text-blue-600">&gt;</span></p>
        </div>
      )}
      {cardNumber === 2 && (
        <div>
          <ul className="flex flex-col justify-between align-middle gap-8">
            {jobs.map((job) => (
              <li className="flex justify-between items-center gap-2">
                <div className="">
                  <p className="text-sm sm:text-lg">{job.position}</p>
                  <p className="text-xs sm:text-lg">{job.company}</p>
                </div>
                <div className="h-[1px] w-1/2 bg-black dark:bg-white" />{" "}
                <p className="text-xs sm:text-sm whitespace-nowrap">
                  {job.date}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-5">Education</h3>
            <ul className="text-xl flex flex-col justify-between align-middle gap-8">
              {Education.map((edu) => (
                <li className="flex justify-between items-center gap-2">
                  <div className="">
                    <p className="text-sm sm:text-lg">{edu.discipline}</p>
                    <p className="text-xs sm:text-sm">{edu.institution}</p>
                  </div>
                  <p className="text-xs sm:text-sm">{edu.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {cardNumber === 3 && (
        <div>
          <p>
            <span className="text-lg font-semibold flex items-center gap-1">
              Tech <Laptop size={20} />
            </span>{" "}
            - I extremely love to write code, but I doubt codes share the same
            love for me lol, but I love it still🙂. I have absolutely no background in tech, as a
            matter of fact I studied Agric, funny right? But I developed a
            passion for tech and I nurtured that passion and protected it, and
            today I am slowly able to build things I used to see on the net and
            marvel at.
          </p>
          <p className="mt-10">
            <span className="text-lg font-semibold flex items-center gap-1">
              Art <Palette size={20} />
            </span>{" "}
            - I am an artist by talent, and by constant practice of course. I
            love to paint, draw, sketch, name it-- and closing on a decade of
            Experience on that. I have a little gallery showcasing a few of my
            artworks right below this section, feel free to check it out, and
            bid for one if you'd love to collect🤝.
          </p>
          <p className="mt-10">
            <span className="text-lg font-semibold flex items-center gap-1">
              Games <Gamepad2 size={20} />
            </span>{" "}
            - Oh I love games, games have been embedded into my system since I
            was, say 4 or 5 years old. Games have been a great part of my growth
            and mental development, I started out with games like Tetris in the
            early 20's and have since then grown to love strategic games like
            chess, mancala and the likes. Yes I play mordern games like the
            viral CODM and as a matter of fact if you'd like to go at a 1v1 with
            me, just hmu from my{" "}
            <span
              onClick={goToContact}
              className="underline hover:text-blue-600 cursor-pointer transition-all duration-300"
            >
              contact section
            </span>
            .
          </p>
        </div>
      )}
    </motion.div>
  );
};
