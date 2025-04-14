export default function ImageCard({
    color,
    position,
    shadow,
}: {
    color: string;
    position: string;
    shadow: string;
}){
    return(
        <div
        className={`w-[450px] h-[600px] absolute ${color} rounded-3xl ${position} ${shadow}`}
        >

        </div>
    )
}