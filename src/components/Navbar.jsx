import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col text-white bg-[#0D9488] w-full max-w-96 h-[100vh] justify-center px-28 font-sans font-semibold">
      <nav className="flex flex-col gap-4 text-xl">
        <Link
          href="/"
          className="transition-all duration-300 hover:text-[#ddd5d5]"
        >
          Home
        </Link>
        <Link
          href="/experience"
          className="transition-all duration-300 hover:text-[#ddd5d5]"
        >
          Experience
        </Link>
        <Link
          href="/projects"
          className="transition-all duration-300 hover:text-[#ddd5d5]"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="transition-all duration-300 hover:text-[#ddd5d5]"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
