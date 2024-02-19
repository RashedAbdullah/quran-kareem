import ReadingOrTranslation from "./readingOrTranslatiion";
import ReadingAndTraslatetile from "./readingAndTraslateTitle";
import { motion } from "framer-motion";

const SingleSurah = () => {
  return (
    <motion.div
      className="py-10 lg:py-20 lg:px-60 min-h-screen pt-5"
      exit={{
        x: "-100vw",
        transition: {
          ease: "easeInOut",
          duration: 1,
        },
      }}
    >
      <ReadingAndTraslatetile />
      <ReadingOrTranslation />
    </motion.div>
  );
};

export default SingleSurah;
