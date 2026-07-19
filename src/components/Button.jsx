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
function ButtonPrimary({ content, icon, className = "" }) {
  return (
    <a
      href="#"
      className={`${className} flex  gap-2  justify-center items-center rounded-full border border-white/10  px-6 py-3 text-sm font-semibold text-[var(--primary-color)] shadow-lg backdrop-blur transition-all hover:scale-105  "
      `}>
      {icon} {content}
    </a>
  );
}

export { ButtonMenu, ButtonPrimary };
