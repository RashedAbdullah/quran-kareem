import SuggestedSurah from "../../components/suggestedSurah/suggestedSurah";
import { useQuranQuery } from "../../customHooks/useQuranQuery";
import { useTranslationsQuery } from "../../customHooks/useTranslationsQuery";
import EntryMsg from "./../../components/entryMsg/entryMsg";

const Home = () => {
  const { quran, error } = useQuranQuery();
  const { translations, errors } = useTranslationsQuery("bn.bengali");
  console.log(translations);
  // console.log(quran);
  return (
    <div>
      <EntryMsg />
      <SuggestedSurah />
    </div>
  );
};

export default Home;
