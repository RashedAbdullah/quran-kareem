import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const GoogleGithub = () => {
  return (
    <div className=" mt-5 flex justify-center text-green-600 text-2xl gap-6">
      <div className="cursor-pointer">
        <FaGoogle size="30px" />
      </div>
      <div className="cursor-pointer">
        <FaGithub size="30px" />
      </div>
    </div>
  );
};

export default GoogleGithub;
