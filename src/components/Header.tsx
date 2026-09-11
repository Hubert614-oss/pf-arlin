import { FaDev } from "react-icons/fa";
import { ToggleTheme } from "./ToggleTheme";



export function Header() {

  return (
    <>
      <div className="h-9 w-full border-b border-[#596643] border-dotted">
        <div className="h-full">

          <div className="relative mx-auto max-w-[99%] sm:w-[98%] md:w-[98%] lg:w-[80%] px-4 sm:px-6 lg:px-10 h-full border-x border-[#596643] border-dotted">
            <div className="relative mx-auto  bg-[#D9FF57] h-full border-x border-[#596643] border-dotted flex items-center px-2 gap-5">
              <h5 className="font-extrabold text-sm">DEVELOPPER</h5>
              <h5 className="font-extrabold text-sm">WEB</h5>
              <h5 className="font-extrabold text-sm">FULL STACK</h5>
            </div>
          </div>

        </div>
      </div>
      <div className="sticky top-0 z-50 h-13.75 w-full border-b border-[#596643] border-dotted">
        <div className="h-full">

          <div className="relative mx-auto max-w-[99%] sm:w-[98%] md:w-[98%] lg:w-[80%] px-4 sm:px-6 lg:px-10 h-full border-x border-[#596643] border-dotted">
            <div className="relative mx-auto  bg-slate-200 h-full border-x border-[#596643] border-dotted flex items-center justify-between px-2">
              <div className="flex items-center font-bold">
                <span>{'<'}</span> <FaDev size={26} className="animate-bounce" /> <span>{'>'}</span>
              </div>
              <nav className="flex gap-8 font-bold text-green-950">
                <ToggleTheme />
                <a className="border-b-2">Home</a>
                <a>Skills</a>
                <a>Experiences</a>
                <a>Projects</a>
                <a>Contact</a>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}