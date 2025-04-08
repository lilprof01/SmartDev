import * as icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  const Icon = icons[icon as keyof typeof icons] as LucideIcon;

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10"
    >
      <Icon size={40} className="text-blue-700 dark:text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
