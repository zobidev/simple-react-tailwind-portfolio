import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { PiCodeSimpleBold } from "react-icons/pi";
import { MdOutlineContacts } from "react-icons/md";

const Bar = () => {
  return (
    <div className="mb-20 bg-[#0D9488] text-white">
      <nav className="flex justify-center items-center gap-6 p-4 text-sm font-medium font-sans">
        <Link
          href="/"
          className="flex flex-col justify-center items-center
        hover:text-[#e4dbdb] duration-700 ease-in-out"
        >
          <IoHomeOutline className="text-lg" />
          Home
        </Link>

        <Link
          href="/experience"
          className="flex flex-col justify-center items-center hover:text-[#e4dbdb] duration-700 ease-in-out"
        >
          <IoBagOutline className="text-lg" />
          Experience
        </Link>

        <Link
          href="/projects"
          className="flex flex-col justify-center items-center
          hover:text-[#e4dbdb] duration-700 ease-in-out"
        >
          <PiCodeSimpleBold className="text-lg" />
          Projects
        </Link>

        <Link
          href="/contact"
          className="flex flex-col justify-center items-center
          hover:text-[#e4dbdb] duration-700 ease-in-out"
        >
          <MdOutlineContacts className="text-lg" />
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Bar;
