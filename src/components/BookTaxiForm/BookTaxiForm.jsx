import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaCar,
  FaTruck,
  FaBus,
  FaCarSide,
  FaUser,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { BorderlessButton } from "../../components/Buttons/HomeBtn";

// StepIndicator
function StepIndicator({ currentStep }) {
  const steps = [1, 2, 3, 4];

  return (
    <div className="flex justify-center mb-4 md:mb-8">
      <div className="flex items-center w-full max-w-lg space-x-2 md:space-x-4">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            {/* Step Circle */}
            <div
              className={`flex items-center justify-center 
                font-bold text-white transition-all duration-300
                w-8 h-8 md:w-10 md:h-10 rounded-full
                ${currentStep >= step ? "bg-[var(--primary-color)] shadow-lg" : "bg-gray-300"}
              `}
            >
              {step}
            </div>
            {/* Connecting Line */}
            {index !== steps.length - 1 && (
              <div
                className="relative mx-1 md:mx-2"
                style={{ width: "3rem", height: "0.25rem" }}
              >
                <div
                  className={`h-full bg-[var(--primary-color)] transition-all duration-300 ${
                    currentStep > step ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

StepIndicator.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

const BookTaxiForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    passengerCount: 1,
    chosenVehicle: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  });

  // Define vehicle options with capacity and icons
  const vehicles = [
    {
      type: "Mini Car",
      capacity: 3,
      icon: <FaCar className="text-lg md:text-2xl mr-2" />,
    },
    {
      type: "Sedan Car",
      capacity: 4,
      icon: <FaCarSide className="text-lg md:text-2xl mr-2" />,
    },
    {
      type: "Van",
      capacity: 6,
      icon: <FaTruck className="text-lg md:text-2xl mr-2" />,
    },
    {
      type: "Bus",
      capacity: 10,
      icon: <FaBus className="text-lg md:text-2xl mr-2" />,
    },
  ];

  // Filter vehicles based on passenger count
  const availableVehicles = vehicles.filter(
    (v) => Number(formData.passengerCount) <= v.capacity
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleVehicleSelect = (vehicleType) => {
    setFormData((prev) => ({ ...prev, chosenVehicle: vehicleType }));
    nextStep();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Confirmed!");
  };

  return (
    <div className="py-12 max-w-2xl mx-auto w-full px-2 
                    text-sm md:text-base">
      <div className="bg-white shadow-xl rounded-lg 
                      p-4 md:p-8 w-full">
        {/* Step Indicator */}
        <StepIndicator currentStep={step} />

        {step === 1 && (
          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 text-center">
              Book a Taxi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="Pickup Location"
                className="p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="text"
                name="dropoffLocation"
                value={formData.dropoffLocation}
                onChange={handleChange}
                placeholder="Dropoff Location"
                className="p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              {/* Pickup Date */}
              <div className="relative">
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="p-2 md:p-3 pr-8 md:pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] w-full mobile-native-appearance"
                />
                <FaCalendarAlt className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none z-10" />
              </div>

              {/* Pickup Time */}
              <div className="relative">
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="p-2 md:p-3 pr-8 md:pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] w-full mobile-native-appearance"
                />
                <FaClock className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none z-10" />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block mb-1 md:mb-2 text-gray-700 font-medium">
                  Passenger Count
                </label>
                <input
                  type="number"
                  name="passengerCount"
                  value={formData.passengerCount}
                  onChange={handleChange}
                  min="1"
                  className="p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] w-full"
                />
              </div>
            </div>
            <div className="mt-4 md:mt-6">
              <BorderlessButton onClick={nextStep}>
                Choose Vehicle
              </BorderlessButton>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 text-center">
              Choose Your Vehicle
            </h2>
            {availableVehicles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                {availableVehicles.map((v) => (
                  <div
                    key={v.type}
                    className="p-4 md:p-6 border rounded-lg flex items-center gap-2 md:gap-4 cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300"
                    onClick={() => handleVehicleSelect(v.type)}
                  >
                    <div className="text-[var(--primary-color)]">
                      {v.icon}
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-gray-800">
                        {v.type}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 flex items-center">
                        Up to {v.capacity} passengers <FaUser className="ml-1" />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-red-500">
                No vehicles available for {formData.passengerCount} passengers.
              </p>
            )}
            <div className="mt-4 md:mt-6 flex flex-col gap-2 items-center md:flex-row md:justify-between">
              <BorderlessButton onClick={prevStep}>Back</BorderlessButton>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 text-center">
              Contact Details
            </h2>
            {/* One column layout for all fields */}
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Comments"
                rows={4}
                className="p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
            </div>
            <div className="mt-6 flex flex-col gap-2 w-full md:flex-row">  
              <BorderlessButton onClick={nextStep}>
                Booking Summary
              </BorderlessButton>
              <BorderlessButton onClick={prevStep}>Back</BorderlessButton>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 text-center">
              Booking Summary
            </h2>
            <div className="mb-4 text-gray-700">
              <p>
                <strong>Pickup:</strong> {formData.pickupLocation}
              </p>
              <p>
                <strong>Dropoff:</strong> {formData.dropoffLocation}
              </p>
              <p>
                <strong>Date & Time:</strong> {formData.pickupDate}{" "}
                {formData.pickupTime}
              </p>
              <p>
                <strong>Passengers:</strong> {formData.passengerCount}
              </p>
              <p>
                <strong>Vehicle:</strong> {formData.chosenVehicle}
              </p>
            </div>
            <div className="mb-4 text-gray-700">
              <p>
                <strong>Name:</strong> {formData.firstName} {formData.lastName}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Phone:</strong> {formData.phone}
              </p>
              <p>
                <strong>Comments:</strong> {formData.comments}
              </p>
            </div>
            
            <div className="mt-6 flex flex-col gap-2 w-full md:flex-row">
              <BorderlessButton onClick={handleSubmit}>Book Now</BorderlessButton>
              <BorderlessButton onClick={prevStep}>Back</BorderlessButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookTaxiForm;
