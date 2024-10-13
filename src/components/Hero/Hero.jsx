import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaPlay } from 'react-icons/fa';
import { SlideRight } from "../../utility/animation";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const heroContent = [
    {
      id: 1,
      title: "Developing IT Solutions for the Future",
      description:
        "Crafting tomorrow's technology, today. Empowering innovation for a smarter future.",
      image: HeroImg,
    },
    {
      id: 2,
      title: "Strategic Insights, Real Business Impact",
      description:
        "Transforming challenges into opportunities through tailored strategies. Empowering your business with expert consulting for sustainable growth.",
      image: HeroImg,
    },
    {
      id: 3,
      title: "Amplify Your Brand in the Digital World",
      description:
        "Connecting your brand with the right audience through creative digital strategies. Empowering growth with data-driven marketing that delivers results.",
      image: HeroImg,
    },
    {
      id: 4,
      title: "Reliable IT Solutions, Unmatched Support",
      description:
        "Delivering seamless IT services to empower your business growth. Innovative technology, dependable support, and solutions tailored to your needs.",
      image: HeroImg,
    },
  ];

  return (
    <div className="w-full relative mb-3">
      <Slider {...settings} className="w-full">
        {heroContent.map((slide) => (
          <div key={slide.id} className="w-full">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] items-center">
              {/* Text Content */}
              <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
                <div className="text-center md:text-left space-y-6">
                  <motion.p
                    variants={SlideRight(0.4)}
                    initial="hidden"
                    animate="visible"
                    className="text-orange-600 uppercase font-semibold"
                  >
                    Innovate Tech for a Digital Future..!
                  </motion.p>
                  <motion.h4
                    variants={SlideRight(0.6)}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl font-semibold lg:text-6xl !leading-tight"
                  >
                    {slide.title} <span className="text-primary">""</span>
                  </motion.h4>
                  <motion.p
                    variants={SlideRight(0.8)}
                    initial="hidden"
                    animate="visible"
                  >
                    {slide.description}
                  </motion.p>
                  {/* Button Section */}
                  <motion.div
                    variants={SlideRight(1.0)}
                    initial="hidden"
                    animate="visible"
                    className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
                  >
                    <button className="primary-btn">Get Started</button>
                    <button className="flex justify-end items-center gap-2 font-semibold">
                      <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                        <FaPlay className="text-secondary" />
                      </span>
                      See how it works
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="flex justify-center items-center md:justify-end">
                <motion.img
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  src={slide.image}
                  alt="Hero Slide"
                  className="w-[250px] md:w-[450px] xl:w-[550px] object-contain py-5"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;