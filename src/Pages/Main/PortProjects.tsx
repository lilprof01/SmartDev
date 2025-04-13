import CallToAction from "@/Components/UI/CallToAction";
import { useState, useRef, ReactElement } from "react";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { Gradient } from "@/Components/UI";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFirebase,
  SiFramer,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";

interface projectProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
  icon1?: ReactElement;
  icon2?: ReactElement;
  icon3?: ReactElement;
  icon4?: ReactElement;
}

// TODO: find a way to display tags on project cards
const projects: projectProps[] = [
  {
    title: "WoodMetal",
    description:
      "A fully functional e-commerce platform with payment integration.",
    image: "https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1744538761/wm2_ayn43t.png",
    link: "https://woodmetal.vercel.app/",
    tags: ["eCommerce", "React", "Node.js", "Stripe", "All"],
    icon1: <FaReact size={20} />,
    icon2: <SiTailwindcss size={20} />,
    icon3: <FaGitAlt size={20} />,
    icon4: <SiJavascript size={20} />,
  },
  {
    title: "My Portfolio",
    description:
      "A sleek and modern portfolio website to showcase my skills and expertise.",
    image: "https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1744538760/portfolio_zlhxws.png",
    link: "/",
    tags: [
      "Portfolio",
      "React",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
      "All",
    ],
    icon1: <FaReact size={20} />,
    icon2: <SiTailwindcss size={20} />,
    icon3: <SiTypescript size={20} />,
    icon4: <SiFramer size={20} />,
  },
  {
    title: "PAYXYZ",
    description:
      "A scalable social media app with real-time chat and notifications.",
    image: "https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1744538764/xyzhome_myozd9.png",
    link: "https://payxyz.vercel.app/",
    tags: ["Fintech", "HTML", "CSS", "Vanila JS", "All"],
    icon1: <FaHtml5 size={20} />,
    icon2: <FaCss3Alt size={20} />,
    icon3: <SiJavascript size={20} />,
    icon4: <FaGitAlt size={20} />,
  },
  {
    title: "lexi",
    description:
      "A language practice web app with interactive quizzes and games.",
    image: "https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1744538759/lexi3_lnbwqj.png",
    link: "https://lexi-flax.vercel.app/",
    tags: ["React", "Firebase", "Markdown", "All", "App"],
    icon1: <FaReact size={20} />,
    icon2: <SiFirebase size={20} />,
    icon3: <SiTailwindcss size={20} />,
    icon4: <SiJavascript size={20} />,
  },
  {
    title: " AutoWorld",
    description:
      "A scalable social media app with real-time chat and notifications.",
    image: "https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1744538760/AutoWorld_y9ebfb.png",
    link: "https://aw-landing.vercel.app/",
    tags: ["React", "TailwindCSS", "All", "Landing page"],
    icon1: <FaReact size={20} />,
    icon2: <SiTailwindcss size={20} />,
    icon3: <SiJavascript size={20} />,
    icon4: <FaGitAlt size={20} />,
  },
  {
    title: "Space Tour",
    description:
      "A scalable social media app with real-time chat and notifications.",
    image: "https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1744538760/space-tour_f0luew.png",
    link: "https://space-tour-orpin.vercel.app/",
    tags: ["React", "Node.js", "Firebase", "All"],
    icon1: <FaReact size={20} />,
    icon2: <SiTypescript size={20} />,
    icon3: <SiTailwindcss size={20} />,
    icon4: <FaGitAlt size={20} />,
  },
  {
    title: "Adviser App",
    description:
      "A scalable social media app with real-time chat and notifications.",
    image: "https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1744538759/adviser_iaqtze.png",
    link: "https://adviser-ten.vercel.app/",
    tags: ["App", "React", "Node.js", "Firebase", "All"],
    icon1: <FaReact size={20} />,
    icon2: <SiTailwindcss size={20} />,
    icon3: <SiJavascript size={20} />,
    icon4: <FaGitAlt size={20} />,
  },
  {
    title: "Cart",
    description:
      "A scalable social media app with real-time chat and notifications.",
    image: "https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1744538760/cartex2_vqyq92.png",
    link: "https://cart-ex.vercel.app/",
    tags: ["eCommerce", "React", "Node.js", "Firebase", "All"],
    icon1: <FaReact size={20} />,
    icon2: <SiTailwindcss size={20} />,
    icon3: <SiJavascript size={20} />,
    icon4: <FaGitAlt size={20} />,
  },
  {
    title: "Todo App",
    description:
      "A scalable social media app with real-time chat and notifications.",
    image: "https://res.cloudinary.com/dzvqnpdqo/image/upload/q_auto,f_auto/v1744538760/todo_fgkoqh.png",
    link: "https://to-do-ashen-chi.vercel.app/",
    tags: ["App", "React", "Node.js", "Firebase", "All"],
    icon1: <FaReact size={20} />,
    icon2: <SiTailwindcss size={20} />,
    icon3: <SiJavascript size={20} />,
    icon4: <FaGitAlt size={20} />,
  },
];

// function to render projects on filter
const filter = (name: string) => {
  return projects.filter((project) => project.tags?.includes(name));
};
const selector = [
  { name: "All", filter: "All" },
  { name: "Fintech", filter: "Fintech" },
  { name: "eCommerce", filter: "eCommerce" },
  { name: "App", filter: "App" },
];

// projects page project component - seperate with full projects
const PortProjects = () => {
  const navigate = useNavigate();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selected, setSelected] = useState("All");
  const goToContact = () => {
    navigate("/home#contact");
  };
  const handleSelected = (name: string) => {
    setSelected(name);
  };
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null); // Ensure correct type
  const inView = useInView(sectionRef, { once: false });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });

  // Animation for the section container and children
  const fade = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const moveUp = useTransform(scrollYProgress, [0, 1], ["80%", "0%"]);
  const moveDown = useTransform(scrollYProgress, [0, 1], ["-80%", "0%"]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: fade }}
      transition={{ duration: 0.15 }}
      className="mt-20 relative bg-gradient-to-br from-blue-200 to-white dark:from-blue-950 dark:via-black dark:to-black p-8 sm:p-16 transition-all duration-500 z-10"
    >
      <Gradient />

      {/* Hero Section */}
      <div
        ref={textRef} // Ensure textRef is assigned here
        className="flex flex-col items-center justify-start gap-2 h-full w-full text-center sm:p-8 lg:max-w-4/6 mx-auto select-none"
      >
        <motion.h1
          className="font-bold text-4xl sm:text-6xl overflow-hidden whitespace-nowrap"
          style={{ opacity: fade, y: moveDown }}
          initial={{ width: "0" }}
          animate={inView ? { width: "100%" } : { width: "0" }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          Explore{" "}
          <motion.span
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-blue-700 dark:to-blue-700 bg-clip-text text-transparent hover:text-blue-900 dark:hover:text-blue-900 transition-all duration-500 cursor-pointer"
          >
            Projects
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-xl mt-4"
          style={{ opacity: fade, y: moveUp }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Here are some of the projects I've worked on. Click on any project to view.
        </motion.p>
      </div>

      {/* Filter Section */}
      <div className="w-full">
        <ul className="flex justify-center flex-wrap gap-4 p-8">
          {selector.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setFilteredProjects(filter(item.filter));
                handleSelected(item.name);
              }}
              className={`px-4 py-2 bg-[white] hover:text-white rounded-full cursor-pointer hover:bg-blue-800 transition-all duration-300 border-2 border-gray-400 z-10 ${
                selected === item.name
                  ? "bg-blue-800 dark:bg-blue-800 text-white"
                  : "dark:bg-transparent"
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Section */}
      <div ref={cardRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-blue-300 dark:hover:shadow-blue-600 cursor-pointer transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6 flex flex-col text-center justify-between items-center">
                <h3 className="text-xl font-bold group-hover:text-blue-700 dark:group-hover:text-blue-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
                <div className="flex justify-between w-full mt-8">
                  <div className="w-full flex gap-2 items-center">
                    {project.icon1} {project.icon2} {project.icon3}{" "}
                    {project.icon4}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="hover:text-blue-600 underline transition-all duration-300 text-xs w-full"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Call to action section for projects */}
      <CallToAction
        title="Have a project in mind?"
        description="Let's discuss your ideas and I'll help bring them to life."
        buttonText="I'm in🤝"
        func={goToContact}
      />
    </motion.section>
  );
};

export default PortProjects;

