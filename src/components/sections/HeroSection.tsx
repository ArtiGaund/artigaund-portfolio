"use client";
import ImageCard from "../cards/ImageCard";
import EmailDetails from "../EmailDetails";
import Circle from "../sub-components/Circle";
import { CodeBlock } from "../ui/code-block";
import { SocialNetworkLink } from "../ui/social-network-link";
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
             <section className="relative w-full lg:h-screen md:h-[50rem] overflow-hidden">
      {/* Left circles */}
      <Circle
        // size={200}
       gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
        // position="top-[50px] left-[120px]"
        opacity="opacity-80"
        shadow="shadow-[0px_0px_100px_40px_black]"
        className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] top-[90px] left-[40px] lg:top-[50px] lg:left-[120px] md:top-[70px] md:left-[80px]"
      />
      <Circle
        // size={200}
        gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
        // position="top-[50px] left-[200px]"
        opacity="opacity-80"
        shadow="shadow-[0px_0px_100px_40px_black]"
        className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] top-[90px] left-[80px] lg:top-[50px] lg:left-[200px] md:top-[70px] md:left-[130px]"
      />
        <ImageCard
        className="w-[180px] h-[180px] lg:w-[475px] lg:h-[600px] md:w-[200px] md:h-[300px] pointer-events-none top-[80px] left-[20px] lg:top-[-50px] lg:left-[300px] md:top-[-50px] md:left-[200px] z-20"
        >
          {/* <Boxes /> */}
          <div className="w-full h-full top-[-50px] left-[300px] z-20">
            <AboutSection />
          </div>
    
          </ImageCard>
       {/* For large screens: absolutely positioned */}
  <div className="hidden lg:block">
    <div className="absolute lg:top-[180px] lg:left-[55rem] lg:w-[150px] h-[1px] bg-white rounded-full"></div>
    <div className="absolute top-[250px] left-[68rem] transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white z-30">
      MY DIGITAL WORKBENCH
    </div>
    <div className="absolute top-1/2 left-[61rem] transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-purple-500 z-30">
      Hi, I&apos;m Arti Gaund
    </div>
    <div className="absolute top-[30rem] left-[68rem] transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-gray-400 z-30">
      I’m a full-stack web and Android developer passionate about building modern, scalable applications. I typically work on frontend, backend, and mobile projects.
    </div>
    <div>
      
    </div>
    <div className="absolute text-lg font-semibold text-gray-300 top-[80%] left-[55rem]">
      <span>Contact me:</span>
    </div>
    {/* <BgAnimation /> */}
    <div className="absolute z-30 top-[85%] left-[55rem]">
      <EmailDetails />
    </div>
  </div>
  {/* For medium and small screens: static positioning, placed between ImageCard and circles */}
  <div className="relative block lg:hidden w-full mt-8 p-20 md:top-[20rem] top-[23rem]">
    <div className="relative w-[100px] md:w-[150px] h-[1px] bg-white rounded-full mb-5 md:mx-auto left-[52px] md:left-[-135px]"></div>
      <div className="relative text-3xl font-bold text-white m-10 mt-10 left-[10px] md:left-[110px]">
        MY DIGITAL WORKBENCH
      </div>
    <div className="relative text-xl font-bold text-purple-500 mb-2 left-[50px] md:left-[150px]">
      Hi, I&apos;m Arti Gaund
    </div>
    <div className="relative text-base font-semibold text-gray-400 mb-10 left-[50px] md:left-[150px] w-[65%]">
      I’m a full-stack web and Android developer passionate about building modern, scalable applications. I typically work on frontend, backend, and mobile projects.
    </div>
    <div className="relative text-lg font-semibold text-gray-400 left-[50px] md:left-[150px]">
      <span>Contact me:</span>
    </div>
    <div className="relative mt-2 md:left-[150px]">
      <EmailDetails />
    </div>
  </div>
  <div className="relative md:top-[-25rem]">
      <BgAnimation />
  </div>
  
      {/* Right big circle */}
      <Circle
        // size={500}
        gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
        // position="top-[-100px] right-[-100px]"
        // blur="blur-3xl"
        opacity="opacity-50"
        shadow="shadow-[0px_0px_100px_40px_black]"
        className="w-[230px] h-[230px] lg:w-[500px] lg:h-[500px] top-[-50px] right-[-20px] lg:top-[-100px] lg:right-[-100px] md:w-[400px] md:h-[400px] md:top-[-100px] md:right-[-100px]"
      />
        {/* Bottom left circle */}
<Circle
  // size={250}
  gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
  // position="bottom-[60px] left-[-40px]"
  opacity="opacity-40"
  blur="blur-3xl"
  className="w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] bottom-[500px] left-[-40px] lg:bottom-[60px] lg:left-[-40px] md:w-[300px] md:h-[300px] md:bottom-[60px] md:left-[-40px] "
/>
<ImageCard 
    // width={600}
    // height={500}
      color="bg-yellow-400"
      // position="bottom-[-50px] left-[200px] z-10"
      shadow="shadow-[0px_0px_100px_40px_black]"
      className="lg:w-[600px] lg:h-[500px] lg:bottom-[-50px] lg:left-[200px] z-10"
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
  // size={200}
  gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
  // position="bottom-[50px] left-[40%]"
  opacity="opacity-30"
  blur="blur-3xl"
  className="w-[200px] h-[200px] lg:w-[200px] lg:h-[200px] bottom-[50px] left-[40%] lg:bottom-[50px] lg:left-[40%] md:w-[200px] md:h-[200px] md:bottom-[50px] md:left-[40%] "
/>

{/* Bottom right circle */}
<Circle
  // size={300}
  gradient="bg-gradient-to-br from-purple-500 via-purple-700 to-black"
  // position="bottom-[60px] right-[-60px]"
  opacity="opacity-50"
  blur="blur-3xl"
  className="w-[200px] h-[200px] lg:w-[200px] lg:h-[200px] bottom-[60px] right-[-60px] lg:bottom-[60px] lg:right-[-60px] md:w-[300px] md:h-[300px] md:bottom-[60px] md:right-[-60px]"
/>

      {/* White line */}
      <div className="absolute top-[280px] left-[100px] w-[1px] h-[120px] bg-white rounded-full hidden sm:block"></div>
        {/* Social links */}
        
            <SocialNetworkLink />
       
       
        </section>
    )
}