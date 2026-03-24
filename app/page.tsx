import Hero from "./components/Hero";
import HeroVideo from "./components/HeroVideo";
import HeroSlider from "./components/HeroSlider";

const slides = [
  {
    imgSrc: "/assets/images/screen1.jpg",
    title: "Grow Your Business",
    desc: "Automate your emails",
    buttonText: "Learn More",
  },
  {
    imgSrc: "/assets/images/screen1.jpg",
    title: "Smart Campaigns",
    desc: "Reach right audience",
    buttonText: "Explore",
  },
  {
    imgSrc: "/assets/images/screen1.jpg",
    title: "Grow Your Business",
    desc: "Automate your emails",
    buttonText: "Learn More",
  },
  {
    imgSrc: "/assets/images/screen1.jpg",
    title: "Smart Campaigns",
    desc: "Reach right audience",
    buttonText: "Explore",
  },
];

export default function Home() {
  return (
    <div className="">
      <HeroVideo
        videoSrc="/assets/images/hero.mp4"
        title="Turn Emails Into Revenue"
        subtitle="Automate and grow faster"
        buttonText="Book a Demo"
      />
      <Hero />
      <HeroSlider slides={slides} />
    </div>
  );
}