import { stack } from "@/Constants/data";
import { ReactElement } from "react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiJavascript, SiFirebase, SiBootstrap } from "react-icons/si";

interface iconProps {
  icon: ReactElement;
}

const icons: iconProps[] = [
  { icon: <FaReact /> },
  { icon: <SiTypescript /> },
  { icon: <SiJavascript /> },
  { icon: <SiTailwindcss /> },
  { icon: <FaNodeJs /> },
  { icon: <FaPython /> },
  { icon: <FaHtml5 /> },
  { icon: <FaCss3Alt /> },
  { icon: <SiBootstrap /> },
  { icon: <SiFirebase /> },
  { icon: <FaGitAlt /> },
];

const Stack = () => {
  return (
    <div className="flex flex-col gap-6 py-10">
      <h3 className="text-3xl font-sora font-bold text-center">Libraries & Tools</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stack.map((tool) => (
          <li
            key={tool.name}
            className="group flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="text-4xl text-blue-700 dark:text-blue-500 group-hover:text-blue-900 dark:group-hover:text-blue-300 transition-colors duration-300">
              {icons[stack.findIndex(t => t.name === tool.name)]?.icon}
            </div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-500 transition-colors duration-300">
              {tool.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stack;