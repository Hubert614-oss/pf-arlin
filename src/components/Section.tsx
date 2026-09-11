import type { ReactNode } from "react";
import { AiOutlineDrag } from "react-icons/ai";

export function BorderIntersections() {
    const markerClassName = "pointer-events-none absolute -translate-x-1/2 translate-y-1/2 px-0.5 text-xs leading-none text-[#596643]";

    return (
        <>
            <AiOutlineDrag aria-hidden="true" className={`${markerClassName} bottom-0 left-0 h-4 w-4 z-70`} />
            <AiOutlineDrag aria-hidden="true" className={`${markerClassName} bottom-0 right-0 translate-x-1/2 h-4 w-4 z-70`} />
        </>
    );
}

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
}

export function Section({
    id,
    children,
    className = "",  
}: SectionProps) {
    return (
        <section
            id={id}
            className={`
        min-h-screen
        scroll-mt-20
        border-b
        border-[#596643]
        border-dashed
        ${className}
      `}
        >
            <div className="relative mx-auto min-h-screen max-w-7xl border-x border-[#596643] border-dashed px-4 sm:px-6 lg:px-10">
                <BorderIntersections />
                <div className="relative mx-auto min-h-screen border-x border-[#596643] border-dashed">
                    <BorderIntersections />
                    {children}
                </div>
            </div>
        </section>
    );
}