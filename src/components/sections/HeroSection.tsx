"use client";
import ImageCard from "../cards/ImageCard";
import Circle from "../sub-components/Circle";
import { CodeBlock } from "../ui/code-block";
import { SocialNetworkLink } from "../ui/social-network-link";
import { Vortex } from "../ui/vortex";
import AboutSection from "./AboutSection";
import BgAnimation from "@/components/ui/BackgroundAnimation";




export default function HeroSection() {
    
  

  const code = `const DummyComponent = () => {
    const [count, setCount] = React.useState(0);
   
    const handleClick = () => {
      setCount(prev => prev + 1);
    };
   
    return (
      <div className="p-4 border rounded-lg">
        <h2 className="text-xl font-bold mb-4">Fights Counter</h2>
        <p className="mb-2">Fight Club Fights Count: {count}</p>
        <button 
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    );
  };
  `;

    return(
             <section className="relative w-full  h-screen overflow-hidden">
      {/* Left circles */}
      <Circle
        size={200}
       gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
        position="top-[50px] left-[120px]"
        opacity="opacity-80"
        shadow="shadow-[0px_0px_100px_40px_black]"
      />
      <Circle
        size={200}
        gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
        position="top-[50px] left-[200px]"
        opacity="opacity-80"
        shadow="shadow-[0px_0px_100px_40px_black]"
      />
        <ImageCard 
        width={475}
        height={600}
        // color=" bg-red-700"
        position="top-[-50px] left-[300px] z-20"
        shadow="shadow-[0px_0px_100px_40px_black]"
        className="overflow-hidden"
        >
          <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        // baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
          <div className="w-full h-full mt-10">
            <AboutSection />
          </div>
          </Vortex>
          </ImageCard>
      {/* White line */}
      <div className="absolute top-[180px] left-[55rem] w-[150px] h-[1px] bg-white rounded-full"></div>
      {/* Title */}
      <div className="absolute top-[250px] left-[68rem] transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white z-30">
        MY DIGITAL WORKBENCH 
      </div>

      {/* Name */}
      <div className="absolute top-1/2 left-[61rem] transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-purple-500 z-30">
        Hi, i'm Arti Gaund
      </div>

      {/* Description */}
      <div className="absolute top-[30rem] left-[68rem] transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-gray-400 z-30">
      I’m a full-stack web and Android developer passionate about building modern, scalable applications. I typically work on frontend, backend, and mobile projects.
      </div>
      <BgAnimation />
      {/* Right big circle */}
      <Circle
        size={500}
        gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
        position="top-[-100px] right-[-100px]"
        // blur="blur-3xl"
        opacity="opacity-50"
        shadow="shadow-[0px_0px_100px_40px_black]"
      />
        {/* Bottom left circle */}
<Circle
  size={250}
  gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
  position="bottom-[60px] left-[-40px]"
  opacity="opacity-40"
  blur="blur-3xl"
/>
<ImageCard 
    width={600}
    height={500}
      color="bg-yellow-400"
      position="bottom-[-50px] left-[200px] z-10"
      shadow="shadow-[0px_0px_100px_40px_black]"
      >
        <CodeBlock 
        language="jsx"
        filename="DummyComponent.jsx"
        highlightLines={[9,13,14,18]}
        code={code}
        />
      </ImageCard>
{/* Bottom center circle */}
<Circle
  size={200}
  gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
  position="bottom-[50px] left-[40%]"
  opacity="opacity-30"
  blur="blur-3xl"
/>

{/* Bottom right circle */}
<Circle
  size={300}
  gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
  position="bottom-[60px] right-[-60px]"
  opacity="opacity-50"
  blur="blur-3xl"
/>

      {/* White line */}
      <div className="absolute top-[280px] left-[100px] w-[1px] h-[120px] bg-white rounded-full"></div>
        {/* Social links */}
       <SocialNetworkLink />
        </section>
    )
}