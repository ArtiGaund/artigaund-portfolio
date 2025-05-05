export default function Divider ({
    className
}: {
    className?: string
}){
    return (
        <div className={`w-[100px] h-[2px] bg-white rounded-full ${className}`}>

        </div>
    )
}