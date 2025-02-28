import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import bg1 from "../../images/homepage-3-2-bg.jpg";
import bg2 from "../../images/homepage-3-bg.jpg";

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  // Trigger updated on every slide change to force remounting.
  const [trigger, setTrigger] = useState(Date.now());

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds per slide
    speed: 500,          // 0.5s fade
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Update activeSlide and trigger when slide changes.
    afterChange: (index) => {
      setActiveSlide(index);
      setTrigger(Date.now());
    },
  };

  const slides = [
    { id: 0, src: bg1 },
    { id: 1, src: bg2 },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <ZoomOutSlide
          // For the active slide, include trigger in the key to force remount.
          key={index === activeSlide ? `${slide.id}-${trigger}` : slide.id}
          src={slide.src}
          isActive={index === activeSlide}
        />
      ))}
    </Slider>
  );
}

export default HeroSlider;

/**
 * ZoomOutSlide uses a CSS animation to zoom the image from scale(1.25) to scale(1).
 * We force the <img> element to remount via a unique key so that the animation always runs.
 */
function ZoomOutSlide({ src, isActive }) {
  const [imgKey, setImgKey] = useState(0);

  useEffect(() => {
    if (isActive) {
      // Increment key to force remount of <img>, re-triggering the CSS animation.
      setImgKey(prev => prev + 1);
    }
  }, [isActive]);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      <img
        key={imgKey}
        src={src}
        alt="Slide"
        className="w-full h-full object-cover"
        style={{
          animation: "zoomOut 5s ease-in-out forwards",
        }}
      />
    </div>
  );
}
