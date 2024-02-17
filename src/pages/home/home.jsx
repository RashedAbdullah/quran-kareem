import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import SuggestedSurah from "../../components/suggestedSurah/suggestedSurah";
import SurahNames from "../../components/surahNames/surah";
import { useQuranQuery } from "../../customHooks/useQuranQuery";
import { useTranslationsQuery } from "../../customHooks/useTranslationsQuery";
import EntryMsg from "./../../components/entryMsg/entryMsg";

const Home = () => {
  const { quran, error } = useQuranQuery();
  const { translations, errors } = useTranslationsQuery("bn.bengali");
  // console.log(translations);
  // console.log(quran);
  return (
    <div className=" selection:bg-secondary selection:text-primary">
      <Header />
      <ScrollRestoration />
      <EntryMsg />
      <SuggestedSurah />
      <SurahNames quran={quran} />
      <Footer />
    </div>
  );
};

export default Home;
