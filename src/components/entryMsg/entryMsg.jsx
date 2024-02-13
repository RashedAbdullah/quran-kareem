import Search from "../search/search";

const EntryMsg = () => {
  return (
    <div className="bg-[#043939] text-white pt-14">
      <div className=" lg:w-[40vw] m-auto p-10">
        <h3 className="text-3xl lg:text-4xl">مرحبا بك في ساحة القرآن الكريم</h3>
        <div className=" text-lg mt-4">
          <p>
            {" "}
            <span className="">قال صلى الله عليه وآله وسلم</span>: يا سلمان عليك
            بقراءة القرآن فإن قراءته كفارة للذنوب وستر من النار وأمان من العذاب
            ويكتب لمن يقرأه بكل آية ثواب مائة شهيد ويعطى بكل سورة ثواب نبي ينزل
            على صاحبه الرحمة.
          </p>
        </div>
      </div>
      <Search />
    </div>
  );
};

export default EntryMsg;
