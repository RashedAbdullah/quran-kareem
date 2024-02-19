import SuggestedSurah from "../../components/suggestedSurah/suggestedSurah";
import SurahNames from "../../components/surahNames/surah";
import { useQuranQuery } from "../../customHooks/useQuranQuery";
import { useTranslationsQuery } from "../../customHooks/useTranslationsQuery";
import EntryMsg from "./../../components/entryMsg/entryMsg";
import { motion } from "framer-motion";

const Home = () => {
  const { quran, error } = useQuranQuery();
  const { translations, errors } = useTranslationsQuery("bn.bengali");
  // console.log(translations);
  // console.log(quran);
  return (
    <motion.div
      className=" selection:bg-secondary selection:text-primary"
      exit={{
        x: "-100vw",
        transition: {
          ease: "easeInOut",
          duration: 1,
        },
      }}
    >
      <EntryMsg />
      <SuggestedSurah />
      <SurahNames quran={quran} />
    </motion.div>
  );
};

export default Home;
