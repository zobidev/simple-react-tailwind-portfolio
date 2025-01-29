"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col text-white bg-[#0D9488] w-full max-w-96 h-[100vh] justify-center px-28 font-sans font-semibold">
      <nav className="flex flex-col gap-4 text-xl">
        {navlinks.map((item, i) => (
          <Link
            key={i}
            href={item.path}
            className={`transition-all duration-300 hover:text-[#ddd5d5] ${
              pathname == item.path ? "text-[#ddd5d5] underline" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
