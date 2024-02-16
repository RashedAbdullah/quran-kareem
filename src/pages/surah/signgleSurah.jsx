import ReadingOrTranslation from "./readingOrTranslatiion";
import ReadingAndTraslatetile from "./readingAndTraslateTitle";

const SingleSurah = () => {
  return (
    <div className="py-10 lg:py-20 lg:px-60 min-h-screen pt-5">
      <ReadingAndTraslatetile />
      <ReadingOrTranslation />
    </div>
  );
};

export default SingleSurah;
