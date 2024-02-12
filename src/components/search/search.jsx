import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex pb-10 text-black">
      <form className="m-auto bg-[#f0f0f0] rounded-full px-5 py-1 lg:w-[40vw] flex">
        <div className="w-full">
          <input
            type="text"
            className="w-full text-xl p-1 bg-transparent outline-none"
            placeholder="ابحث عن سورة أو آية"
          />
        </div>
        <button>
          <IoSearch color="gray" size="25px" />
        </button>
      </form>
    </div>
  );
};

export default Search;
