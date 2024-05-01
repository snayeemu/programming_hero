import { motion } from "framer-motion";

const Animation1 = () => {
  const initial = { rotate: 0 };
  const animate = { rotate: 360 };
  return (
    <div>
      <motion.div
        className="w-[200px] h-[200px] bg-blue-500"
        initial={initial}
        animate={animate}
        transition={{ duration: 1 }}
      ></motion.div>
    </div>
  );
};

export default Animation1;
