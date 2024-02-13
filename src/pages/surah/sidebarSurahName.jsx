import { useState } from "react";
import { FiSearch } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const SideBarSurahNames = ({ isShowSurah }) => {
  return (
    isShowSurah && (
      <div className=" bg-primary top-20 pt-5 rounded-l fixed max-h-[87vh] overflow-auto">
        <form className="bg-white flex align-middle w-[90%] m-auto rounded">
          <input
            className="bg-transparent outline-none p-1 w-[90%]"
            type="text"
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
    )
  );
};

export default SideBarSurahNames;
