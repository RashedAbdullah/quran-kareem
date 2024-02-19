/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { getEngToArNumber } from "../../customHooks/getEngToArNumber";

const NamesOfSurah = ({ quran }) => {
  console.log(quran);
  return (
    <div className="my-10 grid lg:grid-cols-3 gap-3">
      {quran?.map((surah) => (
        <NavLink
          to={`/singleSurah/${surah.number}`}
          key={surah.name}
          className="flex items-center justify-between px-5 py-6 text-xl rounded bg-primary text-white cursor-pointer transition ease-in-out hover:-translate-y-1 duration-300 hover:bg-primaryHover"
        >
          <div
            key={surah.name}
            className="flex align-middle items-center justify-center gap-5"
          >
            <div className="flex align-middle items-center bg-secondary rotate-45 rounded">
              <div className="font-amiri h-10 w-10 flex items-center justify-center rotate-[-45deg]">
                {getEngToArNumber(surah.number)}
              </div>
            </div>
            <div>
              <h3 className="text-2xl">{surah.name}</h3>
            </div>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <div className=" font-amiri">
                {getEngToArNumber(surah.numberOfAyahs)}
              </div>{" "}
              آيات
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default NamesOfSurah;
