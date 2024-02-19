import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const SideBarSurahNames = () => {
  const data = useLoaderData();
  // console.log(data.data);
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  return (
    <motion.div
      className=" min-h-screen"
      key="modal"
      initial={{ y: "-2vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className={` bg-primary top-20 ${
          isShowSidebar ? "right-0" : " translate-x-[248px]"
        } pt-5 rounded-l fixed max-h-[87vh] overflow-auto transition duration-300 px-5`}
      >
        {" "}
        <div className=" absolute left-0 text-textWhite">
          <button onClick={() => setIsShowSidebar(!isShowSidebar)}>
            {isShowSidebar ? (
              <MdOutlineKeyboardArrowRight size={"30px"} />
            ) : (
              <MdOutlineKeyboardArrowLeft size={"30px"} />
            )}
          </button>
        </div>
        <form className="bg-textWhite flex align-middle w-[90%] m-auto rounded">
          <input
            className="bg-transparent outline-none p-1 w-[90%]"
            type="text"
            placeholder="أيّة سورة تبحث عنها"
          />
          <button>
            <FiSearch />
          </button>
        </form>
        <div className=" text-textWhite pt-3 pr-3">
          {data.data.map((name) => (
            <NavLink key={name.number} to={`/singleSurah/${name.number}`}>
              <div className="flex gap-5 py-2 px-1 border-b border-secondary hover:bg-primaryHover transition">
                <p className="text-3xl">٧</p>
                <h3 className="text-2xl">{name.name}</h3>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </motion.div>
  );
};

export default SideBarSurahNames;
