import Image from "next/image";

export default function Loading(){
    return(
        <div className="fixed inset-0 bg-black-100 flex items-center justify-center z-50">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
                <Image 
                src="/images/logo.png" 
                alt="loading" 
                width={200} 
                height={200} 
                className="animate-pulse"
            /> 
            </div>
            <div>
                
            </div>
        </div>
    )
}