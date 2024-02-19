import { useLoaderData } from "react-router-dom";
import { getEngToArNumber } from "../../customHooks/getEngToArNumber";

const ReadingOrTranslation = () => {
  const data = useLoaderData();
  console.log(data.data.ayahs);
  return (
    <div className="singleSurahDetails col-span-12 lg:col-span-8 text-center">
      <div className="mt-4">
        <h3 className="text-3xl">{data.data.name}</h3>
      </div>
      <div className="mt-5">
        <h4 className="text-2xl font-bsm">lfdhgl</h4>
      </div>
      <div className="mt-5 text-2xl leading-10 px-20">
        {data.data.ayahs.map((ayah) => (
          <div className=" font-me_quran flex" key={ayah.numberInSurah}>
            <p> {ayah.text}</p> <p>{getEngToArNumber(ayah.numberInSurah)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingOrTranslation;
