export default function SectionTitle(
    { 
        title,
        className
     }: { 
        title: string,
        className?: string
     }) {
    return (
      <div className={`${className}`}>
        <div className="bg-gradient-to-r from-[#1f1f39] via-[#2b2b5f] to-[#1e2a78]
                        text-white shadow-[0_15px_40px_rgba(0,0,0,0.6)]
                        px-8 py-8 rounded-xl skew-x-[15deg] relative transition-all
                         duration-300 flex justify-center items-center top-[-100px]">
          <div className="-skew-x-[15deg] text-white text-2xl md:text-3xl lg:text-4xl font-bold font-sans drop-shadow-md">
            {title}
          </div>
        </div>
      </div>
    );
  }
  