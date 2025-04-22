import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, {once: false})

  return (
    // About me section
    // TODO: add a button that asks to know more about me
    <motion.section
      ref={sectionRef}
      animate={inView ? {y: "0px", opacity: 1} : {y: "100px", opacity: 0}}
      className="mt-20  mx-auto px-4 sm:px-8 flex flex-col z-10"
      transition={{
        duration: 1
      }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 z-10">
        About Me
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 text-lg sm:text-xl leading-relaxed z-10">
        My name is Aniyajuwon OluwaPelumi, but most of my friends call me Smart
        and you can as well🙂. I am a software engineer majoring frontend web
        development and also a freelance visual artist. I am passionate about
        creating beautiful and user-friendly digital products that make a
        positive impact on people's lives/businesses and as an artist it is
        simply a lifestyle for me to create beautiful experiences for my clients
        and users both on canvas🖼️ and on a webpage🌐.
      </p>
      <p className="text-center text-gray-600 dark:text-gray-300 text-lg sm:text-xl mt-6 leading-relaxed z-10">
        My approach is simple but proven to be extremely effective: I listen,
        innovate and deliver. By combining cutting-edge technology with creative
        design, I ensure that every project I lay my hands on not only meets but
        exceeds client's expectations. Let me help transform your ideas into
        reality and take your business to the next level.
      </p>
      <Link to='/about' className="mt-10 mx-auto w-1/2 sm:w-1/3 text-right text-xl py-3 check relative flex justify-center items-center align-middle whitespace-nowrap hover:text-blue-700 cursor-pointer transition-all duration-300 z-10">
        <p>More about me</p>
      </Link>
    </motion.section>
  );
};

export default About;
