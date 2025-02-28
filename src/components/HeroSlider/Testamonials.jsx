import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// If you want to use react-icons for arrows:
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Example images
import client1 from "../../images/client-1.jpg";
import client2 from "../../images/client-2.jpg";
import client4 from "../../images/client-4.jpg";

function Testimonials() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,          // No dots
    arrows: false,        // Disable built-in arrows
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      img: client1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 2,
      img: client2,
      name: "Jane Smith",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 3,
      img: client4,
      name: "Michael Johnson",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 4,
      img: client1,
      name: "Lucy Brown",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 5,
      img: client2,
      name: "Mark Wilson",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 6,
      img: client4,
      name: "Samantha Green",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  // Handlers to go to previous/next slide
  const goToPrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="bg-[var(--trinary-color)]">
      <div className="my-container">
        {/* The slider itself */}
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map(({ id, img, name, text }) => (
            <div key={id}>
              <TestimonialCard img={img} name={name} text={text} />
            </div>
          ))}
        </Slider>

        {/* Custom arrow buttons below the slider */}
        <div className="mt-6 flex items-center justify-center gap-6">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="
              bg-[var(--primary-color)]
              hover:bg-[var(--secondary-color)]
              text-white
              rounded-full
              p-3
              flex items-center
              justify-center
            "
          >
            <FaChevronLeft />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="
              bg-[var(--primary-color)]
              hover:bg-[var(--secondary-color)]
              text-white
              rounded-full
              p-3
              flex items-center
              justify-center
            "
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

function TestimonialCard({ img, name, text }) {
  return (
    <div className="m-4 p-6 bg-white rounded shadow-sm text-center h-80 flex flex-col justify-between">
      {/* Top section: Quote icon and testimonial text */}
      <div className="flex-1">
        <div className="mb-4 text-3xl text-gray-400">
          <i className="fa fa-quote-left" aria-hidden="true" />
        </div>
        <p className="text-gray-600 italic">{text}</p>
      </div>
      {/* Bottom section: Image then name */}
      <div className="mt-6">
        <img
          src={img}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-white mx-auto"
        />
        <strong className="block text-gray-800 font-semibold text-lg mt-3">
          {name}
        </strong>
      </div>
    </div>
  );
}

