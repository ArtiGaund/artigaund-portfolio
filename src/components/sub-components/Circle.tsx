export default function Circle({
    size,
    gradient,
    position,
    blur,
    opacity = "opacity-40",
    shadow ="",
  }: {
    size: number;
    gradient: string;
    position: string;
    blur?: string;
    opacity?: string;
    shadow?: string;
  }) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`rounded-full absolute ${gradient} ${blur} ${opacity} ${position} ${shadow}`}
      ></div>
    );
  }
  