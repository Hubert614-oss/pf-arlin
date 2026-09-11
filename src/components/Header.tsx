import { FaDev } from "react-icons/fa";


export function Header() {

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-23 w-full overflow-hidden border-b border-[#596643] ">
        <div className="h-[40%] border-b  border-[#596643]">

          <div className="relative mx-auto max-w-[99%] sm:w-[98%] md:w-[98%] lg:w-[80%] px-4 sm:px-6 lg:px-10 h-full border-x border-[#596643] border-dotted">
            <div className="relative mx-auto  bg-[#D9FF57] h-full border-x border-[#596643] border-dotted">
                developper web full stack 
            </div>
          </div>
          
        </div>
        <div className="h-[60%]">

          <div className="relative mx-auto max-w-[99%] sm:w-[98%] md:w-[98%] lg:w-[80%] px-4 sm:px-6 lg:px-10 h-full border-x border-[#596643] border-dotted">
            <div className="relative mx-auto  bg-slate-200 h-full border-x border-[#596643] border-dotted">
              menu nav  
            </div>
          </div>

        </div>
      </div>
    </>
  )
}