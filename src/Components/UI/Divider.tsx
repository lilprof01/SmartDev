import { motion } from "framer-motion";

interface DividerProps {
  y: any;
}

const Divider: React.FC<DividerProps> = ({ y }) => {
  return (
    <div className="h-full w-[8px] bg-gradient-to-b from-[white] to-[black]">
      <motion.div
        style={{
          height: y,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="w-full bg-gradient-to-b from-blue-600 via-blue-600 to-green-600 z-10"
      />
    </div>
  );
};

export default Divider;
