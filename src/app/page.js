import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center grow gap-3">
      <img
        src="/photo.png"
        className="flex w-44 h-44 object-cover rounded-full"
      />
      <h1 className="max-[768px]:text-3xl text-5xl font-semibold text-[#2ac3ae] font-sans">
        Zohaib Javed
      </h1>
      <h3 className="max-[768px]:text-lg text-2xl text-[#34d1bc]">
        Web Developer
      </h3>
      <p className="max-[768px]:w-80 max-[768px]:mb-5 text-ms text-[#716565] font-sans w-96 text-center">
        A web developer designs, builds, and maintains websites and web
        applications. They may specialize in the front end, back end, or both.
      </p>
      <div className="flex gap-5 text-xl">
        <a
          href="#"
          className=" bg-[#0D7E6F] text-white p-2 border rounded-full
          transition-all duration-500 hover:bg-white hover:text-[#0D7E6F]"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          className="bg-[#0D7E6F] text-white p-2 border-2 rounded-full transition-all duration-500 hover:bg-white hover:text-[#0D7E6F]"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#"
          className="bg-[#0D7E6F] text-white p-2 border-2 rounded-full transition-all duration-500 hover:bg-white hover:text-[#0D7E6F]"
        >
          <IoLogoYoutube />
        </a>
        <a
          href="#"
          className="bg-[#0D7E6F] text-white p-2 border-2 rounded-full transition-all duration-500 hover:bg-white hover:text-[#0D7E6F]"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default Home;
