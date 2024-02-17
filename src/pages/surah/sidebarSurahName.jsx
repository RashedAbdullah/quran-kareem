import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const SideBarSurahNames = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  return (
    <div className=" min-h-screen">
      <Header />
      <div
        className={` bg-primary top-20 ${
          isShowSidebar ? "right-0" : " translate-x-[248px]"
        } pt-5 rounded-l absolute max-h-[87vh] overflow-auto transition duration-300 px-5`}
      >
        {" "}
        <div className=" absolute left-0 text-white">
          <button onClick={() => setIsShowSidebar(!isShowSidebar)}>
            {isShowSidebar ? (
              <MdOutlineKeyboardArrowRight size={"30px"} />
            ) : (
              <MdOutlineKeyboardArrowLeft size={"30px"} />
            )}
          </button>
        </div>
        <form className="bg-white flex align-middle w-[90%] m-auto rounded">
          <input
            className="bg-transparent outline-none p-1 w-[90%]"
            type="text"
            placeholder="أيّة سورة تبحث عنها"
          />
          <button>
            <FiSearch />
          </button>
        </form>
        <div className="text-white pt-3 pr-3">
          <a href="">
            <div className="flex gap-5 py-2 px-1 border-b border-secondary hover:bg-primaryHover transition">
              <p className="text-3xl">٧</p>
              <h3 className="text-2xl">سُوْرَةُ الكَهْف</h3>
            </div>
          </a>
          <a href="">
            <div className="flex gap-5 py-2 border-b border-secondary">
              <p className="text-3xl">٧</p>
              <h3 className="text-2xl">سُوْرَةُ الكَهْف</h3>
            </div>
          </a>
          <a href="">
            <div className="flex gap-5 py-2 border-b border-secondary">
              <p className="text-3xl">٧</p>
              <h3 className="text-2xl">سُوْرَةُ الكَهْف</h3>
            </div>
          </a>
          <a href="">
            <div className="flex gap-5 py-2 border-b border-secondary">
              <p className="text-3xl">٧</p>
              <h3 className="text-2xl">سُوْرَةُ الكَهْف</h3>
            </div>
          </a>
          <a href="">
            <div className="flex gap-5 py-2 border-b border-secondary">
              <p className="text-3xl">٧</p>
              <h3 className="text-2xl">سُوْرَةُ الكَهْف</h3>
            </div>
          </a>
          <a href="">
            <div className="flex gap-5 py-2 border-b border-secondary">
              <p className="text-3xl">٧</p>
              <h3 className="text-2xl">سُوْرَةُ الكَهْف</h3>
            </div>
          </a>
          <a href="">
            <div className="flex gap-5 py-2 border-b border-secondary">
              <p className="text-3xl">٧</p>
              <h3 className="text-2xl">سُوْرَةُ الكَهْف</h3>
            </div>
          </a>
          <a href="">
            <div className="flex gap-5 py-2 border-b border-secondary">
              <p className="text-3xl">٧</p>
              <h3 className="text-2xl">سُوْرَةُ الكَهْف</h3>
            </div>
          </a>
          <a href="">
            <div className="flex gap-5 py-2 border-b border-secondary">
              <p className="text-3xl">٧</p>
              <h3 className="text-2xl">سُوْرَةُ الكَهْف</h3>
            </div>
          </a>
          <a href="">
            <div className="flex gap-5 py-2 border-b border-secondary">
              <p className="text-3xl">٧</p>
              <h3 className="text-2xl">سُوْرَةُ الكَهْف</h3>
            </div>
          </a>
          <a href="">
            <div className="flex gap-5 py-2 border-b border-secondary">
              <p className="text-3xl">٧</p>
              <h3 className="text-2xl">سُوْرَةُ الكَهْف</h3>
            </div>
          </a>
          <a href="">
            <div className="flex gap-5 py-2 border-b border-secondary">
              <p className="text-3xl">٧</p>
              <h3 className="text-2xl">سُوْرَةُ الكَهْف</h3>
            </div>
          </a>
          <a href="">
            <div className="flex gap-5 py-2 border-b border-secondary">
              <p className="text-3xl">٧</p>
              <h3 className="text-2xl">سُوْرَةُ الكَهْف</h3>
            </div>
          </a>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default SideBarSurahNames;
