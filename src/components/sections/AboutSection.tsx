import { AnimatedAboutSection } from "../ui/animated-about-section"

export default function AboutSection() {
    const content = [
        {
            quote:
              "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen",
            designation: "Product Manager at TechFlow",
            src: "/images/image.jpg"
          },
          {
            quote:
              "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen1",
            designation: "Product Manager at TechFlow",
            src: "/images/image1.jpeg"
          },
          {
            quote:
              "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen2",
            designation: "Product Manager at TechFlow",
            src: "/images/image2.jpg"
          },
          {
            quote:
              "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen3",
            designation: "Product Manager at TechFlow",
            src: "/images/image3.jpg"
          },
          {
            quote:
              "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen4",
            designation: "Product Manager at TechFlow",
            src: "/images/image4.jpg"
          },
    ]
    return(
        <AnimatedAboutSection testimonials={content}/>
    )
}