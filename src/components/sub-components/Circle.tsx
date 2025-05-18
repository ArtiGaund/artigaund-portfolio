export default function Circle({
    gradient,
    blur,
    opacity = "opacity-40",
    shadow ="",
    className,
  }: {
    gradient: string;
    blur?: string;
    opacity?: string;
    shadow?: string;
    className: string;
  }) {
    return (
      <div
        className={`rounded-full absolute ${gradient} ${blur} ${opacity} ${shadow} ${className}`}
      ></div>
    );
  }
  