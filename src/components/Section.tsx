import Plus from "../assets/svgs/plus.svg?react";

const Section = ({ children, className }: { children: JSX.Element, className?: string }) => {
  return (
    <div className={`relative border-[0.5px] border-white/20 mx-5 sm:mx-10 px-5 py-10 sm:px-10 md:px-12 lg:px-16 xl:px-[100px] lg:py-[100px] border-b-0 ${className}`}>
      <Plus className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <Plus className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      { children }
    </div>
  )
}

export default Section;