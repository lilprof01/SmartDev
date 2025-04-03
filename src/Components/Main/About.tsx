import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section
      ref={sectionRef}
      className="mt-20 max-w-7xl mx-auto px-4 sm:px-8 z-10"
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        About Me
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 text-lg sm:text-xl leading-relaxed">
        We are a team of passionate developers, designers, and strategists
        dedicated to creating innovative digital solutions. Our mission is to
        empower businesses to thrive in the digital age by delivering
        high-quality, user-friendly, and visually stunning websites and
        applications. With years of experience in the industry, we specialize
        in crafting custom solutions tailored to meet the unique needs of our
        clients. Whether you're a startup looking to establish your online
        presence or an established business aiming to enhance your digital
        footprint, we have the expertise to help you succeed.
      </p>
      <p className="text-center text-gray-600 dark:text-gray-300 text-lg sm:text-xl mt-6 leading-relaxed">
        Our approach is simple yet effective: we listen, we innovate, and we
        deliver. By combining cutting-edge technology with creative design, we
        ensure that every project we undertake not only meets but exceeds our
        clients' expectations. Let us help you transform your ideas into
        reality and take your business to the next level.
      </p>
    </motion.section>
  );
};

export default About;
