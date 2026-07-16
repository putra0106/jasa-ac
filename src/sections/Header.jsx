import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { ButtonPrimary, ButtonMenu } from "../components/Button";

export default function Header() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const handleClick = () => {
    setHamburgerMenu((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between py-4 px-2 max-w-7xl mx-auto mb-4  backdrop-blur-md sticky top-4 z-50 ">
      <div className="flex items-center pl-4">
        <span className="text-xl font-bold text-[var(--primary-color)] tracking-tight">
          Jasa Ac Garut
        </span>
      </div>
      <Navbar />

      {/* button cta primary */}
      <ButtonPrimary />
      <ButtonMenu handleClick={handleClick} />
      {hamburgerMenu && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-4 md:hidden">
          <Navbar mobile />
          <ButtonPrimary mobile />
        </div>
      )}
    </header>
  );
}
