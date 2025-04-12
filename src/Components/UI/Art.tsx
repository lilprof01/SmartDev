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
}
const Art: React.FC<Artprops> = ({
  top,
  bottom,
  left,
  right,
  translate,
  title,
  size,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const inView = useInView(targetRef, { once: false });
  return (
    <motion.div
      animate={inView ? { opacity: 1, y: "-200px" } : { opacity: 0, y: "0px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      ref={targetRef}
      className={`absolute ${top} ${bottom} ${left} ${right} ${translate} bg-[red] h-[300px] w-[300px] mt-10 flex flex-col justify-end items-end p-2`}
    >
      <p className="text-lg font-bold">{title}</p>
      <p className="text-xs">{size}</p>
    </motion.div>
  );
};

export default Art;
