import { navItem } from "../data/content";

export default function Navbar({ mobile = false }) {
  // list navbar
  const listNavbar = navItem.map((item) => (
    <a
      key={item.id}
      href={item.link}
      className="text-gray-800 hover:text-black font-medium text-sm border-b-2 border-transparent hover:border-black pb-1 transition-all">
      {item.contentNav}
    </a>
  ));

  return (
    <nav
      className={
        mobile
          ? "flex flex-col gap-4 items-start md:hidden font-xl"
          : "hidden md:flex items-center space-x-8"
      }>
      {listNavbar}
    </nav>
  );
}
