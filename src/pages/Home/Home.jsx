import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  BorderedButton,
  BorderlessButton,
} from "../../components/Buttons/HomeBtn";
import services1 from "../../images/services-1.png";
import services2 from "../../images/services-2.png";
import services3 from "../../images/services-3.png";
import services4 from "../../images/services-4.png";
import tariff1 from "../../images/tariff-1.png";
import tariff2 from "../../images/tariff-2.png";
import tariff3 from "../../images/tariff-3.png";
import tariff4 from "../../images/tariff-4.png";
import partner1 from "../../images/partner-1.png";
import partner2 from "../../images/partner-2.png";
import partner3 from "../../images/partner-3.png";
import partner4 from "../../images/partner-4.png";
import partner5 from "../../images/partner-5.png";
import banner1 from "../../images/banner-1.png";
import banner2 from "../../images/banner-2.png";


import { FaCheck } from "react-icons/fa";
// Using react-icons for the checkmark
import carBigSide from "../../images/car-big-side.png";
import Testimonials from "../../components/HeroSlider/Testamonials";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import BookTaxiForm from "../../components/BookTaxiForm/BookTaxiForm";
import ContactUs from "../Contactus/Contactus";

function Home() {
  return (
    <div>
    <div className="relative">
    <HeroSlider />
    <div className="absolute inset-0 flex items-center max-w-[56rem]">
      {/* Container with max-width set to 80rem (7xl) and left padding as needed */}
      <div className="  w-full mx-auto pl-8">
        <BookTaxiForm />
      </div>
    </div>
  </div>
  

      <section className="bg-[var(--primary-color)] py-4">
        {/* Your custom container class */}
        <div className="xl7-container flex flex-wrap items-center justify-between gap-6">
          {/* PHONE */}
          <div className="flex items-center gap-3">
            <div className="bg-[var(--trinary-color)] text-[var(--fourth-color)] p-3 rounded-full">
              <FaPhoneAlt className="h-6 w-6" />
            </div>
            <div className="text-[var(--fourth-color)] fira-sans-condensed-h3">
              800-5-800
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-3">
            <div className="bg-[var(--trinary-color)] text-[var(--fourth-color)] p-3 rounded-full">
              <FaEnvelope className="h-6 w-6" />
            </div>
            <div className="text-[var(--fourth-color)] fira-sans-condensed-h4 ">
              test@tes.com
            </div>
          </div>

          {/* ADDRESS */}
          <div className="flex items-center gap-3">
            <div className="bg-[var(--trinary-color)] text-[var(--fourth-color)] p-3 rounded-full">
              <FaMapMarkerAlt className="h-6 w-6" />
            </div>
            <div className="text-[var(--fourth-color)] fira-sans-condensed-h4 ">
              43 2-nd Avenue, New York, 29004-7153
            </div>
          </div>

          {/* BUTTON */}
          <BorderedButton onClick={() => alert("Bordered!")}>
            Bordered
          </BorderedButton>
        </div>
      </section>




      {/* services section */}
      <div id="aboutus">

        <section className="mt-12">
          <div className="text-center mb-8">
            <h4 className="fira-sans-condensed-h3-sm uppercase text-[var(--primary-color)]">
              Welcome
            </h4>
            <h2 className="fira-sans-condensed-h2 text-[var(--fourth-color)]">
              Our Services
            </h2>
          </div>

          <div className="xl7-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1) Rapid city transfer */}
            <div className="flex flex-col items-center text-center border-r-2 border-dotted border-[var(--secondary-color)] last:border-none px-4">
              <img
                src={services1}
                alt="Rapid city transfer"
                className="mb-4 w-20 h-auto object-contain"
              />
              <h3 className="fira-sans-condensed-h3-sm uppercase text-[var(--fourth-color)] mb-2">
                Rapid city transfer
              </h3>
              <p className="open-sans-p text-[var(--fourth-color)] text-justify">
                We will bring you quickly and comfortably to anywhere in your city
              </p>
            </div>

            {/* 2) Booking a hotel */}
            <div className="flex flex-col items-center text-center border-r-2 border-dotted border-[var(--secondary-color)] last:border-none px-4">
              <img
                src={services2}
                alt="Booking a hotel"
                className="mb-4 w-20 h-auto object-contain"
              />
              <h3 className="fira-sans-condensed-h3-sm uppercase text-[var(--fourth-color)] mb-2">
                Booking a hotel
              </h3>
              <p className="open-sans-p text-[var(--fourth-color)] text-justify">
                If you need a comfortable hotel, our operators will book it for
                you, and take a taxi to the address
              </p>
            </div>

            {/* 3) Airport transfer */}
            <div className="flex flex-col items-center text-center border-r-2 border-dotted border-[var(--secondary-color)] last:border-none px-4">
              <img
                src={services3}
                alt="Airport transfer"
                className="mb-4 w-20 h-auto object-contain"
              />
              <h3 className="fira-sans-condensed-h3-sm uppercase text-[var(--fourth-color)] mb-2">
                Airport transfer
              </h3>
              <p className="open-sans-p text-[var(--fourth-color)] text-justify">
                We will bring you quickly and comfortably to anywhere in your city
              </p>
            </div>

            {/* 4) Baggage transport */}
            <div className="flex flex-col items-center text-center border-r-2 border-dotted border-[var(--secondary-color)]px-4 pr-2">
              <img
                src={services4}
                alt="Baggage transport"
                className="mb-4 w-20 h-auto object-contain"
              />
              <h3 className="fira-sans-condensed-h3-sm uppercase text-[var(--fourth-color)] mb-2">
                Baggage transport
              </h3>
              <p className="open-sans-p text-[var(--fourth-color)] text-justify">
                If you need a comfortable hotel, our operators will book it for
                you, and take a taxi to the address
              </p>
            </div>
          </div>
        </section>

        {/* taxi section */}
        <section className="bg-[var(--trinary-color)] py-12">
          <div className="xl7-container">
            <div className="mb-8 text-center">
              <h4 className="fira-sans-condensed-h3-sm uppercase text-[var(--primary-color)]">
                See Our
              </h4>
              <h2 className="fira-sans-condensed-h2 text-[var(--fourth-color)]">
                Tariffs
              </h2>
            </div>

            {/* 4 Cards Layout */}
            <div
              className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-8
"
            >
              {/* Card 1: Standard */}
              <div
                className="
  bg-white
  p-12
  text-center
  rounded-md
  hover:shadow-lg
  transition-shadow
  border
  border-transparent
"
              >
                <img
                  src={tariff1}
                  alt="Standard"
                  className="mx-auto mb-4    h-32 object-contain"
                />
                <h3 className="fira-sans-condensed-h3-sm uppercase text-[var(--fourth-color)] mb-2">
                  Standard
                </h3>
                <p className="open-sans-p text-[var(--fourth-color)]">
                  Standard sedan for a drive around the city at your service,
                  <br />
                  <span className="open-sans-span"> $4.5/km </span>
                </p>
              </div>

              {/* Card 2: Business */}
              <div
                className="
                        bg-white
                        p-12
                        text-center
                        rounded-md
                        hover:shadow-lg
                        transition-shadow
                        border
                        border-transparent
                      "
              >
                <img
                  src={tariff2}
                  alt="Business"
                  className="mx-auto mb-4    h-32 object-contain"
                />
                <h3 className="fira-sans-condensed-h3-sm uppercase text-[var(--fourth-color)] mb-2">
                  Business
                </h3>
                <p className="open-sans-p text-[var(--fourth-color)]">
                  Standard sedan for a drive around the city at your service,
                  <br />
                  <span className="open-sans-span"> $4.5/km </span>
                </p>
              </div>

              {/* Card 3: VIP (with border) */}
              <div
                className="
                            relative
                            bg-white
                            p-12
                            text-center
                            rounded-md
                            hover:shadow-lg
                            transition-shadow
                            border
                            border-[var(--primary-color)]

                            /* 1) Triangle corner (using :after, lower z-index) */
                            after:content-['']
                            after:absolute
                            after:top-0
                            after:right-0
                            after:z-10
                            after:border-solid
                            after:border-t-0
                            after:border-r-[55px]
                            after:border-b-[55px]
                            after:border-l-0
                            after:border-t-transparent
                            after:border-r-[var(--primary-color)]
                            after:border-b-transparent
                            after:border-l-transparent

                            /* 2) Star icon (using :before, higher z-index) */
                            before:content-['★']
                            before:absolute
                            before:z-20
                            before:top-0
                            before:right-2
                            before:text-white
                            before:text-xl
                            "
              >
                <img
                  src={tariff3}
                  alt="VIP"
                  className="mx-auto mb-4 h-32 object-contain"
                />
                <h3 className="fira-sans-condensed-h3-sm uppercase text-[var(--fourth-color)] mb-2">
                  VIP
                </h3>
                <p className="open-sans-p text-[var(--fourth-color)]">
                  Standard sedan for a drive around the city at your service,
                  <br />
                  <span className="open-sans-span">$4.5/km</span>
                </p>
              </div>

              {/* Card 4: Bus-minivan */}
              <div
                className="
                          bg-white
                            p-12
                            text-center
                            rounded-md
                            hover:shadow-lg
                            transition-shadow
                            border
                            border-transparent
                          "
              >
                <img
                  src={tariff4}
                  alt="Bus-minivan"
                  className="mx-auto mb-4    h-32 object-contain"
                />
                <h3 className="fira-sans-condensed-h3-sm uppercase text-[var(--fourth-color)] mb-2">
                  Bus-minivan
                </h3>
                <p className="open-sans-p text-[var(--fourth-color)]">
                  Standard sedan for a drive around the city at your service,
                  <br />
                  <span className="open-sans-span"> $4.5/km </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* benefits section */}
        <section
          className="
                      bg-[url('/src/images/download.jpg')]
                      bg-cover
                      bg-center
                      bg-fixed
                      py-12
                      "
        >
          <div className="text-center mb-8">
            <h4 className="fira-sans-condensed-h3-sm uppercase text-[var(--primary-color)]">
              Welcome
            </h4>
            <h2 className="fira-sans-condensed-h2 text-[var(--fourth-color)]">
              Our Services
            </h2>
          </div>
          <div className="xl7-container grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              {/* Block 01 */}
              <div className="bg-black/40 rounded p-4">
                <div className="flex items-start gap-4">
                  {/* Circle on the left */}
                  <div
                    className="
                                w-12 h-12
                                rounded-full
                                bg-[var(--primary-color)]
                                text-[var(--secondary-color)]
                                flex items-center justify-center
                                font-bold
                                shrink-0
                              "
                  >
                    01
                  </div>
                  <div>
                    <h4 className="fira-sans-condensed-h3-sm uppercase text-[var(--primary-color)] mb-2">
                      Fast booking
                    </h4>
                    <p className="text-white">
                      Nam ac ligula congue, interdum enim sit amet, fermentum
                      nisi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Block 02 */}
              <div className="bg-black/40 rounded p-4">
                <div className="flex items-start gap-4">
                  <div
                    className="
                                w-12 h-12
                                rounded-full
                                bg-[var(--primary-color)]
                                text-[var(--secondary-color)]
                                flex items-center justify-center
                                font-bold
                                shrink-0
                              "
                  >
                    02
                  </div>
                  <div>
                    <h4 className="fira-sans-condensed-h3-sm uppercase text-[var(--primary-color)] mb-2">
                      Easy to use
                    </h4>
                    <p className="text-white">
                      Nam ac ligula congue, interdum enim sit amet, fermentum
                      nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: car image */}
            <div className="flex items-center justify-center">
              <img
                src={tariff1}
                alt="Car"
                className="max-w-full h-auto"
              />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8">
              {/* Block 03 */}
              <div className="bg-black/40 rounded p-4">
                {/* Flex row reversed so circle is on the right */}
                <div className="flex flex-row-reverse items-start gap-4">
                  <div
                    className="
                              w-12 h-12
                              rounded-full
                              bg-[var(--primary-color)]
                              text-[var(--secondary-color)]
                              flex items-center justify-center
                              font-bold
                              shrink-0
                            "
                  >
                    03
                  </div>
                  <div>
                    <h4 className="fira-sans-condensed-h3-sm uppercase text-[var(--primary-color)] mb-2">
                      GPS searching
                    </h4>
                    <p className="text-white">
                      Nam ac ligula congue, interdum enim sit amet, fermentum
                      nisi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Block 04 */}
              <div className="bg-black/40 rounded p-4">
                <div className="flex flex-row-reverse items-start gap-4">
                  <div
                    className="
                                w-12 h-12
                                rounded-full
                                bg-[var(--primary-color)]
                                text-[var(--secondary-color)]
                                flex items-center justify-center
                                font-bold
                                shrink-0
                              "
                  >
                    04
                  </div>
                  <div>
                    <h4 className="fira-sans-condensed-h3-sm uppercase text-[var(--primary-color)] mb-2">
                      Bonuses for ride
                    </h4>
                    <p className="text-white">
                      Nam ac ligula congue, interdum enim sit amet, fermentum
                      nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 relative overflow-x-hidden bg-[var(--trinary-color)]">
          {/* Left column text content in container */}
          <div className="xl7-container">
            <div className="max-w-xl">
              {/* H4 in primary color */}
              <h4 className="fira-sans-condensed-h3-sm uppercase text-[var(--primary-color)] mb-2">
                For Drivers
              </h4>
              <h2 className="fira-sans-condensed-h2 text-[var(--fourth-color)] mb-4">
                Do You Want To Earn With Us?
              </h2>
              <p className="open-sans-p text-[var(--fourth-color)] mb-6">
                Quisque sollicitudin feugiat risus, eu posuere ex euismod eu.
                Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros
                sodales ante, euismod aliquet nulla metus a mauris.
              </p>

              {/* List displayed in two columns, 3 items each */}
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <FaCheck className="text-[var(--primary-color)]" />
                  <span className="open-sans-p text-[var(--fourth-color)]">
                    Luxury cars
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-[var(--primary-color)]" />
                  <span className="open-sans-p text-[var(--fourth-color)]">
                    No fee
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-[var(--primary-color)]" />
                  <span className="open-sans-p text-[var(--fourth-color)]">
                    Weekly payment
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-[var(--primary-color)]" />
                  <span className="open-sans-p text-[var(--fourth-color)]">
                    Fixed price
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-[var(--primary-color)]" />
                  <span className="open-sans-p text-[var(--fourth-color)]">
                    Good application
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck className="text-[var(--primary-color)]" />
                  <span className="open-sans-p text-[var(--fourth-color)]">
                    Stable orders
                  </span>
                </li>
              </ul>

              {/* No border button */}
              <BorderlessButton onClick={() => alert("Start earning!")}>
                Start Earning
              </BorderlessButton>
            </div>
          </div>

          {/* Car image pinned to the right side of the screen, further down, bigger */}
          <img
            src={carBigSide}
            alt="Driver Car"
            className="
  hidden
  md:block
  absolute
  top-24
  right-0
  max-w-none
  h-auto
  w-[700px]
"
          />
        </section>

        {/*hr*/}
        <section
          className=" bg-[var(--trinary-color)]
w-full 
h-4 
bg-[url('/src/images/download.png')] 
bg-repeat-x 
bg-center 
my-

"
        ></section>

        {/*Testamonials*/}
        <section className="bg-[var(--trinary-color)]">
          <div className="text-center  pt-5">
            <h4 className="fira-sans-condensed-h3-sm uppercase text-[var(--primary-color)]">
              Happy Client's
            </h4>
            <h2 className="fira-sans-condensed-h2 text-[var(--fourth-color)]">
              Testamonials
            </h2>
          </div>
          <div className="xl7-container ">
            <Testimonials />
          </div>
        </section>


        {/* Banner section */}
        <section className="my-8">
          <div className="xl7-container flex flex-wrap gap-4 items-center justify-center">
            <img
              src={banner1}
              alt="Banner 1"
              className="max-w-full h-auto object-contain"
            />
            <img
              src={banner2}
              alt="Banner 2"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </section>


        <section className="bg-[var(--primary-color)] py-4">
          <div className="xl7-container">
            <div
              className="
    flex
    flex-nowrap
    items-center
    gap-24     /* Increased gap for more space */
    overflow-x-auto
  "
            >
              {/* Headings container with right margin */}
              <div className="mr-12 flex-shrink-0">
                <h4 className="fira-sans-condensed-h3-sm uppercase text-[var(--secondary-color)]">
                  Our Partners
                </h4>
                <h2 className="fira-sans-condensed-h2 text-[var(--trinary-color)]">
                  AND CLIENTS
                </h2>
              </div>

              {/* Partner images */}
              <img
                src={partner1}
                alt="Partner 1"
                className="w-20 h-auto object-contain"
              />
              <img
                src={partner2}
                alt="Partner 2"
                className="w-20 h-auto object-contain"
              />
              <img
                src={partner3}
                alt="Partner 3"
                className="w-20 h-auto object-contain"
              />
              <img
                src={partner4}
                alt="Partner 4"
                className="w-20 h-auto object-contain"
              />
              <img
                src={partner5}
                alt="Partner 5"
                className="w-20 h-auto object-contain"
              />
            </div>
          </div>
        </section>


      </div>

      <div id="contactus">
        <ContactUs />
      </div>

    </div>
  );
}

export default Home;
