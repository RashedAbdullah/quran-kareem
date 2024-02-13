import { useState } from "react";
import SideBarSurahNames from "./sidebarSurahName";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ReadingOrTranslation from "./readingOrTranslatiion";

const SingleSurah = () => {
  const [isShowSurah, setIsShowSurah] = useState(true);

  return (
    <div className="py-10 lg:py-20">
      <div className="flex justify-center align-middle">
        <div>
          <a className="border border-primary py-1 px-10 text-xl" href="">
            القراءة
          </a>
        </div>
        <div>
          <a className="border border-primary py-1 px-10 text-xl" href="">
            الترجمة
          </a>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="AllNamesOfSurah col-span-2">
          <button
            onClick={() => setIsShowSurah(!isShowSurah)}
            className="fixed top-5 right-0 text-white"
          >
            {isShowSurah ? (
              <IoIosArrowForward size="25px" />
            ) : (
              <IoIosArrowBack size="25px" />
            )}
          </button>
          <SideBarSurahNames isShowSurah={isShowSurah} />
        </div>
        <ReadingOrTranslation />
      </div>
    </div>
  );
};

export default SingleSurah;
