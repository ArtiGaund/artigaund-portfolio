import Circle from "@/components/sub-components/Circle";

export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient circles */}
      <Circle
        // size={150}
        gradient="bg-gradient-to-br from-blue-500 via-blue-700 to-black"
        // position="top-[70px] left-[50px]"
        opacity="opacity-40"
        blur="blur-3xl"
        className="lg:w-[150px] lg:h-[150px] lg:top-[70px] lg:left-[50px]"
      />
      <Circle
        // size={400}
        gradient="bg-gradient-to-br from-blue-500 via-blue-700 to-black"
        // position="bottom-[60px] left-[-40px]"
        opacity="opacity-40"
        blur="blur-3xl"
        className="lg:w-[400px] lg:h-[400px] lg:bottom-[60px] lg:left-[-40px]"
      />
      <Circle
        // size={200}
        gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
        // position="top-[100px] right-[400px]"
        opacity="opacity-40"
        blur="blur-3xl"
        className="lg:w-[200px] lg:h-[200px] lg:top-[100px] lg:right-[400px]"
      />
      <Circle
        // size={400}
        gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
        // position="bottom-[100px] right-[80px]"
        opacity="opacity-40"
        blur="blur-3xl"
        className="lg:w-[400px] lg:h-[400px] lg:bottom-[100px] lg:right-[80px]"
      />
      <Circle
        // size={450}
        gradient="bg-gradient-to-br from-blue-500 via-blue-700 to-black"
        // position="bottom-[-200px] right-[-60px]"
        opacity="opacity-40"
        blur="blur-3xl"
        className="lg:w-[450px] lg:h-[450px] lg:bottom-[-200px] lg:right-[-60px]"
      />
    </div>
  );
}
