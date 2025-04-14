import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Artprops {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  translate?: string;
  title: string;
  size: string;
  bg: string;
}
const Art: React.FC<Artprops> = ({
  top,
  bottom,
  left,
  right,
  translate,
  title,
  size,
  bg
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const inView = useInView(targetRef, { once: true });
  return (
    <motion.div
      animate={inView ? { opacity: 1, y: "-200px" } : { opacity: 0, y: "0px" }}
      transition={{ duration: 1 }}
      ref={targetRef}
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className={`absolute ${top} ${bottom} ${left} ${right} ${translate} bg-cover bg-center h-[40vh] sm:h-[300px] w-full sm:w-[300px] mt-10 flex flex-col justify-end items-end p-2`}
    >
      <p className="text-lg font-bold bg-black/70 text-white">{title}</p>
      <p className="text-xs bg-black/70 text-white">{size}</p>
    </motion.div>
  );
};

export default Art;
