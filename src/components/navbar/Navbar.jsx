import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/football-logo.png";
import coin from "../../assets/dollar-1.svg";

const Navbar = ({ money }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "Fixture", "Teams", "Schedules"];

  return (
    <header className="mt-8 px-4">
      <div className="mx-auto flex w-full max-w-330 items-center justify-between">
        <img className="h-14 w-auto md:h-18" src={logo} alt="Football logo" />

        <nav className="relative flex items-center gap-3 md:gap-10">
          <ul className="hidden items-center gap-10 text-sm font-medium text-slate-700 md:flex">
            {links.map((link) => (
              <li
                key={link}
                className="cursor-pointer transition hover:text-cyan-700"
              >
                {link}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#1313131A] bg-white text-slate-700 transition hover:bg-slate-50"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            <div className="border px-3 flex items-center gap-1.5 py-2 rounded-xl border-[#1313131A] bg-white">
              <p className="text-sm font-medium">${money}</p>
              <img src={coin} alt="Coin" className="h-4 w-4" />
            </div>
          </div>

          <div className="hidden border px-5 py-1.5 rounded-xl border-[#1313131A] bg-white md:flex md:items-center md:gap-1.5">
            <p>${money} </p>
            <img src={coin} alt="Coin" />
          </div>

          {menuOpen ? (
            <div className="absolute right-0 top-13 z-20 w-44 rounded-xl border border-[#1313131A] bg-white p-2 shadow-lg md:hidden">
              <ul className="space-y-1 text-sm font-medium text-slate-700">
                {links.map((link) => (
                  <li
                    key={link}
                    className="rounded-lg px-3 py-2 transition hover:bg-slate-100"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
