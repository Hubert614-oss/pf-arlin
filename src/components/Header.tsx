import { FaDev } from "react-icons/fa";


export function Header() {

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-25 overflow-hidden
        border-b
        border-[#596643]
        border-dashed">

        <div className="relative mx-auto h-[40%] max-w-7xl  px-4 sm:px-6 lg:px-10 ">
          <div className="relative mx-auto h-full flex items-center">
            
              sasa
          </div>
        </div>
        <div className="border-t border-dashed border-[#596643] h-full">
          <div className="relative mx-auto h-[60%] max-w-7xl  px-4 sm:px-6 lg:px-10 w-full bg-slate-100 border-l border-dashed border-r">
          <div className="relative mx-auto h-full flex items-center justify-between px-2 border-l border-dashed border-r">
            <div>
                <FaDev size={30} />
            </div>
            <nav className="flex gap-2 items-center">
                <a href="">link 1</a>
                <a href="">link 2</a>
                <a href="">link 3</a>
                <a href="">link 4</a>
            </nav>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}