import { motion } from "framer-motion";

interface DividerProps {
  y: any;
}

const Divider: React.FC<DividerProps> = ({ y }) => {
  return (
    <div className="absolute sm:left-1/2 -translate-x-1/2 h-full w-[8px] rounded-full bg-gradient-to-t from-white/60 to-[black]">
      <motion.div
        style={{
          height: y,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-full w-full rounded-full bg-gradient-to-b from-blue-600/10 via-blue-600 to-green-600 z-10"
      />
    </div>
  );
};

export default Divider;
