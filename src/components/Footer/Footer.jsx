import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

// Example image for the bottom bar
import footerCar from "../../images/footer-car.png";

function Footer() {
  return (
    <footer>
      {/* TOP SECTION: 3 columns */}
      <div className="bg-[var(--secondary-color)] py-8">
        <div className="xl7-container grid grid-cols-1 md:grid-cols-3 gap-8 text-[var(--trinary-color)]">
          {/* Column 1: About Us */}
          <div>
            <h4 className="fira-sans-condensed-h3-sm text-[var(--primary-color)] mb-3 uppercase">
              About Us
            </h4>
            <p className="mb-4">
              Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat.
              Maecenas suscipit tellus sit amet augue placerat fringilla a id
              lacus. Fusce tincidunt in leo lacinia condimentum.
            </p>
            {/* Social icons in primary color */}
            <div className="flex gap-4">
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

          {/* Column 2: Explore */}
          <div>
            <h4 className="fira-sans-condensed-h3-sm text-[var(--primary-color)] mb-3 uppercase">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:opacity-80">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-80">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-80">
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:opacity-80">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="fira-sans-condensed-h3-sm text-[var(--primary-color)] mb-3 uppercase">
              Contact Us
            </h4>
            <a
              href="https://www.google.com/maps/search/?api=1&query=43+2-nd+Avenue,+New+York,+NY+29004-7153"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 mb-2 hover:opacity-80"
            >
              <FaMapMarkerAlt className="text-[var(--primary-color)] mt-1" />
              <span>43 2-nd Avenue, New York, NY 29004-7153</span>
            </a>
            <a
              href="tel:8005800"
              className="flex items-center gap-2 mb-2 hover:opacity-80"
            >
              <FaPhone className="text-[var(--primary-color)]" />
              <span>000-0-000</span>
            </a>
            <a
              href="mailto:gettaxi@taxipark.co.uk"
              className="flex items-center gap-2 mb-2 hover:opacity-80"
            >
              <FaEnvelope className="text-[var(--primary-color)]" />
              <span>text@text.co</span>
            </a>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative bg-[var(--fifth-color)] ">
        <div className="xl7-container flex items-center justify-between text-white">
          <div>
            2025 © All Rights Reserved - 3DHD
          </div>
        </div>
        {/* Footer image positioned absolutely at the bottom right */}
        <img
          src={footerCar}
          alt="Footer Car"
          className="absolute right-50 bottom-0"
        />
      </div>
    </footer>
  );
}

export default Footer;
