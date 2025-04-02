import CallToAction from "@/Components/UI/CallToAction";
import { Gradient } from "../UI";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A fully functional e-commerce platform with payment integration.",
    image: "/code.jpg",
    link: "/projects/ecommerce",
  },
  {
    title: "Portfolio Website",
    description: "A sleek and modern portfolio website for showcasing your work.",
    image: "/code.jpg",
    link: "/projects/portfolio",
  },
  {
    title: "Blog Platform",
    description: "A responsive blog platform with a content management system.",
    image: "/code.jpg",
    link: "/projects/blog",
  },
  {
    title: "Fintech App",
    description: "A scalable social media app with real-time chat and notifications.",
    image: "/code.jpg",
    link: "/projects/social",
  },
  {
    title: " App",
    description: "A scalable social media app with real-time chat and notifications.",
    image: "/code.jpg",
    link: "/projects/social",
  },
  {
    title: "Social Media App",
    description: "A scalable social media app with real-time chat and notifications.",
    image: "/code.jpg",
    link: "/projects/social",
  },
];

const Projects = () => {
  return (
    <section className="mt-20 relative bg-gradient-to-br from-blue-200 to-white dark:from-blue-950 dark:via-black dark:to-black p-8 sm:p-16 transition-all duration-500">
      <Gradient />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-start gap-2 h-full w-full mt-28 sm:mt-20 text-center sm:p-8 max-w-5/6 lg:max-w-4/6 mx-auto select-none">
        <h1 className="font-bold text-4xl sm:text-6xl">
          Explore Our{" "}
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-blue-700 dark:to-blue-700 bg-clip-text text-transparent hover:text-blue-900 dark:hover:text-blue-900 transition-all duration-500 cursor-pointer">
            Projects
          </span>
        </h1>
        <p className="text-sm sm:text-xl mt-4">
          Discover the innovative solutions we've built to help businesses thrive.
        </p>
      </div>

      {/* Projects Section */}
      <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:scale-105 hover:shadow-blue-300 dark:hover:shadow-blue-600 cursor-pointer transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col text-center justify-between items-center">
                <h3 className="text-xl font-bold group-hover:text-blue-700 dark:group-hover:text-blue-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-block mt-4 px-4 py-2 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action section for projects */}
      <CallToAction
        title="Have a project in mind?"
        description="Contact us today to discuss your ideas and bring them to life."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </section>
  );
};

export default Projects;