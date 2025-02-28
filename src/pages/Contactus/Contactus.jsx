

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BorderlessButton } from "../../components/Buttons/HomeBtn";

const ContactUs = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="xl7-container grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="fira-sans-condensed-h2 text-[var(--primary-color)] uppercase">
              Connect with us
            </h2>
            <p className="open-sans-p  ">
              Nam eu mi eget velit vulputate tempor gravida quis massa. In malesuada condimentum ultrices. Sed et mauris a purus fermentum elementum. Sed tristique semper enim, et gravida orci iaculis et. Nulla facilisi.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhone className="text-[var(--primary-color)] text-xl" />
                <span className="fira-sans-condensed-a text-gray-800">800-5-800</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--primary-color)] text-xl" />
                <span className="fira-sans-condensed-a text-gray-800">gettaxipark</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[var(--primary-color)] text-xl" />
                <span className="fira-sans-condensed-a text-gray-800">
                  43 2-nd Avenue, New York, 29004-7153
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a href="#facebook" className="text-[var(--primary-color)] hover:opacity-80">
                <FaFacebookF />
              </a>
              <a href="#twitter" className="text-[var(--primary-color)] hover:opacity-80">
                <FaTwitter />
              </a>
              <a href="#instagram" className="text-[var(--primary-color)] hover:opacity-80">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="fira-sans-condensed-h3-sm uppercase text-[var(--primary-color)] mb-4">
              Connect with us
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                name="yourname"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              ></textarea>
              <div>
                <BorderlessButton onClick={() => alert("Message sent!")}>
                  Send
                </BorderlessButton>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section>
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/collections/drones/">drones ireland</a>
          </iframe>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
