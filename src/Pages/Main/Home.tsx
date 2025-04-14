import { About, Contact, Footer, Header, Hero, Projects } from "@/Components/Main";
import { Gradient, ThemeToggle } from "@/Components/UI";
import FeatureCard from "@/Components/UI/FeaturesCard";
import { useEffect, useRef } from "react";
import Stack from "@/Components/Main/Stack";
import { motion } from "framer-motion";

const Home = () => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    mainRef.current?.classList.add("scale-150", "opacity-50");
    const timeout = setTimeout(() => {
      mainRef.current?.classList.remove("scale-150", "opacity-50");
    }, -100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main
      ref={mainRef}
      className="relative dark:bg-black p-6 sm:pt-16 sm:px-16 transition-all duration-500"
    >
      <Header />
      <Gradient />
      <Hero />
      <About />
      {/* Features Section */}
      <section className="flex flex-col mt-20 max-w-7xl mx-auto px-4 sm:px-8 z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 z-10">
          What You'll Get
        </h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <FeatureCard
            icon="Code"
            title="Custom Development"
            description="Custom built solutions to meet your unique business needs."
          />
          <FeatureCard
            icon="Smartphone"
            title="Responsive Design"
            description="Your website will look great on any device, from desktop to mobile."
          />
          <FeatureCard
            icon="Rocket"
            title="Fast Performance"
            description="Optimized for speed to ensure a seamless user experience."
          />
        </motion.div>
      </section>

      <Stack />

      <Projects />
      <Contact />

      {/* Footer Section */}
      <Footer />

      <ThemeToggle className="fixed bottom-5 right-5 sm:hidden hover:cursor-pointer" />
    </main>
  );
};

export default Home;
