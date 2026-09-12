import { useState } from "react";
import { FaDev } from "react-icons/fa";
import { ToggleTheme } from "./ToggleTheme";
import { Menu, X } from "lucide-react";



export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="h-9 w-full border-b border-[#596643] border-dotted dark:border-slate-800">
        <div className="h-full">

          <div className="relative mx-auto max-w-[99%] sm:w-[98%] md:w-[98%] lg:w-[80%] px-4 sm:px-6 lg:px-10 h-full border-x border-[#596643] border-dotted dark:border-[#596643]">
            <div className="relative mx-auto bg-[#D9FF57] text-green-950 h-full border-x border-[#596643] border-dotted dark:border-zinc-700 flex items-center px-2 gap-5">
              <h5 className="font-extrabold text-sm">DEVELOPPER</h5>
              <h5 className="font-extrabold text-sm">WEB</h5>
              <h5 className="font-extrabold text-sm">FULL STACK</h5>
            </div>
          </div>

        </div>
      </div>
      <div className="sticky top-0 z-50 h-13.75 w-full border-b border-[#596643] border-dotted dark:border-zinc-700">
        <div className="h-full">

          <div className="relative mx-auto max-w-[99%] sm:w-[98%] md:w-[98%] lg:w-[80%] px-4 sm:px-6 lg:px-10  h-full border-x border-[#596643] border-dotted dark:border-zinc-700">
            <div className="relative mx-auto h-full bg-slate-200 dark:bg-black border-x border-[#596643] border-dotted dark:border-zinc-700 flex items-center justify-between px-3">
              <div className="flex items-center font-bold">
                <span>{'<'}</span> <FaDev size={26} className="animate-bounce" /> <span>{'>'}</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-10">
                <ToggleTheme />
                <nav className="hidden md:flex gap-8 font-bold text-sm items-center text-green-950 dark:text-zinc-100">
                  <a href="#home">Home</a>
                  <a href="#skills">Skills</a>
                  <a href="#experiences">Experiences</a>
                  <a href="#projects">Projects</a>
                  <a href="#contact">Contact</a>
                </nav>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen((open) => !open)}
                  className="rounded-md p-2 text-green-950 dark:text-zinc-100 md:hidden"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-navigation"
                >
                  {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
              {isMenuOpen && (
                <nav
                  id="mobile-navigation"
                  className="absolute right-0 top-full flex w-52 flex-col gap-1 border border-t-0 border-[#596643] bg-slate-200 p-3 text-sm font-bold text-green-950 shadow-lg dark:border-zinc-700 dark:bg-black dark:text-zinc-100 md:hidden"
                >
                  <a href="home" onClick={closeMenu} className="">Home</a>
                  <a href="skills" onClick={closeMenu} className="">Skills</a>
                  <a href="experiences" onClick={closeMenu} className="">Experiences</a>
                  <a href="projects" onClick={closeMenu} className="">Projects</a>
                  <a href="contact" onClick={closeMenu} className="">Contact</a>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}