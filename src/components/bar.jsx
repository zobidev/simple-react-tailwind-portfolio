"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { PiCodeSimpleBold } from "react-icons/pi";
import { MdOutlineContacts } from "react-icons/md";

const upernavbar = [
  { label: "Home", path: "/", icon: <IoHomeOutline className="text-lg" /> },
  {
    label: "Experience",
    path: "/experience",
    icon: <IoBagOutline className="text-lg" />,
  },
  {
    label: "Projects",
    path: "/projects",
    icon: <PiCodeSimpleBold className="text-lg" />,
  },
  {
    label: "Contact",
    path: "/contact",
    icon: <MdOutlineContacts className="text-lg" />,
  },
];

const Bar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-[#0D9488] text-white">
      <nav className="flex justify-center items-center gap-6 p-4 text-sm font-medium font-sans">
        {upernavbar.map((item, i) => (
          <Link
            key={i}
            href={item.path}
            className={`flex flex-col justify-center items-center
      hover:text-[#e4dbdb] duration-700 ease-in-out ${
        pathname === item.path ? "text-[#e4dbdb]" : ""
      }`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Bar;
