import { Menu, ArrowRight } from "lucide-react";

// hamburgerMEnu
function ButtonMenu({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="md:hidden ml-4 p-2 text-gray-600 rounded-md focus:outline-none">
      <Menu />
    </button>
  );
}

// button booking now
function ButtonPrimary({ mobile = false, content, icon }) {
  return (
    <a
      href="#"
      className={`
         ${mobile ? "flex mt-4 " : "hidden md:inline-flex"}
        gap-2   items-center rounded-full border border-white/10 bg-[var(--primary-color)] px-6 py-3 text-sm font-medium text-white shadow-lg backdrop-blur transition-all hover:scale-105  hover:bg-[var(--primary-color)]/80 "
      `}>
      {icon} {content}
    </a>
  );
}

export { ButtonMenu, ButtonPrimary };
