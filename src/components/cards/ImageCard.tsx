export default function ImageCard({
    width,
    height,
    color,
    position,
    shadow,
    children,
}: {
    width: number;
    height: number;
    color: string;
    position: string;
    shadow: string;
    children: any;
}){
    return(
        <div
        style={{ width: width, height: height }}
        className={`w-[450px] h-[600px] absolute ${color} rounded-3xl ${position} ${shadow}`}
        >
            {children}
        </div>
    )
}