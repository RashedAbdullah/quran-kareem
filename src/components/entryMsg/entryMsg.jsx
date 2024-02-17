import Search from "../search/search";
import { motion } from "framer-motion";

const EntryMsg = () => {
  const title = "مرحبا بك في ساحة القرآن الكريم".split(" ");
  const desc =
    "قال صلى الله عليه وآله وسلم: يا سلمان عليك بقراءة القرآن فإن قراءته كفارة للذنوب وستر من النار وأمان من العذاب ويكتب لمن يقرأه بكل آية ثواب مائة شهيد ويعطى بكل سورة ثواب نبي ينزل على صاحبه الرحمة.".split(
      " "
    );

  return (
    <div className="bg-[#043939] text-white pt-14">
      <div className=" lg:w-[40vw] m-auto p-10">
        <h3 className="text-3xl lg:text-4xl">
          {title.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index / 8 }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </h3>
        <div className=" text-lg mt-4">
          <p>
            {desc.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index / 30 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
      <Search />
    </div>
  );
};

export default EntryMsg;
