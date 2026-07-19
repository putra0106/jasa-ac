import { Bookmark } from "lucide-react";
import { useState } from "react";

import Navbar from "../components/Navbar";
import { ButtonPrimary, ButtonMenu } from "../components/Button";

export default function Header() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const handleClick = () => {
    setHamburgerMenu((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <div>
          <span
            className="text-xl font-bold tracking-tight text-[var(--primary-color)]"
            style={{ fontFamily: "var(--font-heading)" }}>
            Jasa Ac Garut
          </span>
        </div>

        {/* Navbar Desktop */}
        <Navbar />

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ButtonPrimary
            className="hidden lg:flex bg-[var(--secondary-color)]"
            content="Booking Sekarang"
            icon={<Bookmark size={16} />}
          />

          <ButtonMenu className="flex lg:hidden" handleClick={handleClick} />
        </div>
      </div>

      {/* Mobile Menu */}
      {hamburgerMenu && (
        <div className="border-t bg-white p-4 md:hidden">
          <Navbar mobile />

          <ButtonPrimary
            className="flex mt-4 md:hidden bg-[var(--secondary-color)]"
            content="Booking Sekarang"
            icon={<Bookmark size={16} />}
          />
        </div>
      )}
    </header>
  );
}
