import React, { useState,useRef } from "react"; 
import colomboImg from "../../images/colombo.jpg";
import ellaImg from "../../images/ella.jpg";
import sigiriyaImg from "../../images/sigiriya.jpg";
import tariff2 from "../../images/tariff-2.png";
import tariff3 from "../../images/tariff-3.png";
import tariff4 from "../../images/tariff-4.png"; 

// Import your button components
import { BorderedButton } from "../../components/Buttons/HomeBtn";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

function PackageBookingPage() {
  // State for package selection, vehicle selection, date/time and contact
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [contactInfo, setContactInfo] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const dateInputRef = useRef(null);
const timeInputRef = useRef(null);

  // Data for packages
  const packagesData = [
    {
      id: 1,
      image: colomboImg,
      title: "Colombo",
      points: [
        "Explore the city center",
        "Visit historic sites",
        "Enjoy waterfront dining",
        "Shop local markets",
        "Experience vibrant nightlife",
      ],
    },
    {
      id: 2,
      image: ellaImg,
      title: "Ella",
      points: [
        "Hike to Little Adam's Peak",
        "Visit Nine Arches Bridge",
        "Admire tea plantations",
        "Relax in nature",
        "Experience local culture",
      ],
    },
    {
      id: 3,
      image: sigiriyaImg,
      title: "Sigiriya",
      points: [
        "Climb the ancient rock fortress",
        "Explore Sigiriya ruins",
        "Visit Dambulla caves",
        "Enjoy panoramic views",
        "Discover historic gardens",
      ],
    },
  ];

  // Data for vehicles
  const vehiclesData = [
    {
      id: 1,
      image: tariff2,
      title: "Car",
      details: [
        "Up to 4 passengers",
        "2 bags",
        "Weight limit: 300kg",
      ],
    },
    {
      id: 2,
      image: tariff3,
      title: "Van",
      details: [
        "Up to 6 passengers",
        "4 bags",
        "Weight limit: 500kg",
      ],
    },
    {
      id: 3,
      image: tariff4,
      title: "Bus",
      details: [
        "Up to 20 passengers",
        "10 bags",
        "Weight limit: 2000kg",
      ],
    },
  ];

  // Handler for package checkbox changes (multiple selection)
  const handlePackageChange = (pkgId) => {
    if (selectedPackages.includes(pkgId)) {
      setSelectedPackages(selectedPackages.filter((id) => id !== pkgId));
    } else {
      setSelectedPackages([...selectedPackages, pkgId]);
    }
  };

  // Handler for contact input changes
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Final form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert("Booking Confirmed!");
  };

  return (
    <div className="xl7-container mx-auto p-4">
      {/* Logo */}
      

      {/* Packages Section */}
     {/* Packages Section */}
<section className="mb-8">
<h2 className="text-3xl font-bold mb-4 text-center text-[var(--secondary-color)]">
  Select Package(s)
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {packagesData.map((pkg) => (
    <div
      key={pkg.id}
      className={`border rounded-lg p-4 bg-white shadow-md transition transform hover:scale-105 ${
        selectedPackages.includes(pkg.id)
          ? "border-2 border-[var(--primary-color)] shadow-xl"
          : ""
      }`}
    >
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-40 object-cover mb-3 rounded"
      />
      <h3 className="font-bold mb-2 text-xl">{pkg.title}</h3>
      <ul className="list-disc list-inside text-sm mb-3">
        {pkg.points.map((pt, idx) => (
          <li key={idx}>{pt}</li>
        ))}
      </ul>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          checked={selectedPackages.includes(pkg.id)}
          onChange={() => handlePackageChange(pkg.id)}
          className="form-checkbox h-5 w-5 text-[var(--primary-color)]"
        />
        <span className="ml-2 fira-sans-condensed-a text-lg">Select</span>
      </label>
    </div>
  ))}
</div>
</section>


      {/* Vehicles Section – appears if at least one package is selected */}
      {selectedPackages.length > 0 && (
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-[var(--secondary-color)]">
            Select a Vehicle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vehiclesData.map((vehicle) => (
              <div
                key={vehicle.id}
                className={`border rounded-lg shadow-lg p-6 cursor-pointer transition transform hover:scale-105 bg-white ${
                  selectedVehicle?.id === vehicle.id ? "border-[var(--primary-color)]" : ""
                }`}
                onClick={() => setSelectedVehicle(vehicle)}
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-36 object-contain mb-4"
                />
                <h3 className="font-bold mb-2 text-xl">{vehicle.title}</h3>
                <ul className="list-disc list-inside text-sm mb-2">
                  {vehicle.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <div className="mt-2 inline-flex items-center">
                  <input
                    type="radio"
                    name="vehicle"
                    checked={selectedVehicle?.id === vehicle.id}
                    readOnly
                    className="form-radio h-5 w-5 text-[var(--primary-color)]"
                  />
                  <span className="ml-2 fira-sans-condensed-a text-lg">Select</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Date & Time Section – appears if a vehicle is selected */}
     
{selectedVehicle && (
  <section className="mb-8">
    <h2 className="text-3xl font-bold mb-4 text-center text-[var(--secondary-color)]">
      Select Date & Time
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* Date Input Field */}
      <div className="relative">
        <label className="block mb-2 text-lg font-medium text-[var(--secondary-color)]">
          Select Date:
        </label>
        <div
          className="relative cursor-pointer"
          onClick={() => dateInputRef.current?.showPicker()} // Opens Date Picker
        >
          <input
            ref={dateInputRef} // Reference to Date Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="p-3 pr-12 border rounded w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] cursor-pointer"
          />
          <AiOutlineCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6 pointer-events-none" />
        </div>
      </div>

      {/* Time Input Field */}
      <div className="relative">
        <label className="block mb-2 text-lg font-medium text-[var(--secondary-color)]">
          Select Time:
        </label>
        <div
          className="relative cursor-pointer"
          onClick={() => timeInputRef.current?.showPicker()} // Opens Time Picker
        >
          <input
            ref={timeInputRef} // Reference to Time Input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="p-3 pr-12 border rounded w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] cursor-pointer"
          />
          <AiOutlineClockCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6 pointer-events-none" />
        </div>
      </div>

    </div>
  </section>
)}

      {/* Final Form Section – appears if date and time are selected */}
     {selectedDate && selectedTime && (
  <section className="mb-8">
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-[var(--secondary-color)]">
        Finalize Your Booking
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-lg text-[var(--secondary-color)]">
            Selected Package(s):
          </label>
          <input
            type="text"
            value={packagesData
              .filter((pkg) => selectedPackages.includes(pkg.id))
              .map((pkg) => pkg.title)
              .join(", ")}
            readOnly
            className="p-3 border rounded w-full bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2 text-lg text-[var(--secondary-color)]">
            Selected Vehicle:
          </label>
          <input
            type="text"
            value={selectedVehicle?.title || ""}
            readOnly
            className="p-3 border rounded w-full bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2 text-lg text-[var(--secondary-color)]">
            Date & Time:
          </label>
          <input
            type="text"
            value={`${selectedDate} ${selectedTime}`}
            readOnly
            className="p-3 border rounded w-full bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2 text-lg text-[var(--secondary-color)]">
            Your Name:
          </label>
          <input
            type="text"
            name="name"
            value={contactInfo.name}
            onChange={handleContactChange}
            placeholder="Enter your name"
            className="p-3 border rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-2 text-lg text-[var(--secondary-color)]">
            Your Email:
          </label>
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleContactChange}
            placeholder="Enter your email"
            className="p-3 border rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-2 text-lg text-[var(--secondary-color)]">
            Your Phone:
          </label>
          <input
            type="tel"
            name="phone"
            value={contactInfo.phone}
            onChange={handleContactChange}
            placeholder="Enter your phone number"
            className="p-3 border rounded w-full"
          />
        </div>
        <div className="flex justify-center">
          <BorderedButton onClick={handleSubmit}>
            Book Now
          </BorderedButton>
        </div>
      </form>
    </div>
  </section>
)}

    </div>
  );
}

export default PackageBookingPage;
