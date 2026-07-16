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
function ButtonPrimary({ mobile = false }) {
  return (
    <a
      href="#"
      className={`
         ${mobile ? "flex mt-4 " : "hidden md:inline-flex"}
         items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[var(--primary-color)] hover:opacity-60 rounded-full transition-colors group"
      `}>
      Book now
      <ArrowRight />
    </a>
  );
}

export { ButtonMenu, ButtonPrimary };
