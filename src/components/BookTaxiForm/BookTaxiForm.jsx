import { useState } from "react"; 
import PropTypes from 'prop-types';
import {
  FaCar,
  FaTruck,
  FaBus,
  FaCarSide,
  FaUser,
} from "react-icons/fa";
import { BorderlessButton } from "../../components/Buttons/HomeBtn";

function StepIndicator({ currentStep }) {
  const steps = [1, 2, 3, 4];
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => (
        <div key={step} className="relative flex-1 flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ${
              currentStep >= step
                ? "bg-[var(--primary-color)] shadow-lg"
                : "bg-gray-300"
            }`}
          >
            {step}
          </div>
          {index !== steps.length - 1 && (
            <div className="flex-1 h-1 bg-gray-300 mx-2">
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
    { type: "Mini Car", capacity: 3, icon: <FaCar className="inline-block mr-2" /> },
    { type: "Sedan Car", capacity: 4, icon: <FaCarSide className="inline-block mr-2" /> },
    { type: "Van", capacity: 6, icon: <FaTruck className="inline-block mr-2" /> },
    { type: "Bus", capacity: 10, icon: <FaBus className="inline-block mr-2" /> },
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
    // Remove custom container class; use max-w-2xl and w-full for consistency
    <div className="my-12 max-w-2xl mx-auto w-full">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full">
        <StepIndicator currentStep={step} />
        {step === 1 && (
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Book a Taxi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="Pickup Location"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="text"
                name="dropoffLocation"
                value={formData.dropoffLocation}
                onChange={handleChange}
                placeholder="Dropoff Location"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="time"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <div className="col-span-1 md:col-span-2">
                <label className="block mb-2 text-gray-700 font-medium">
                  Passenger Count
                </label>
                <input
                  type="number"
                  name="passengerCount"
                  value={formData.passengerCount}
                  onChange={handleChange}
                  min="1"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] w-full"
                />
              </div>
            </div>
            <div className="mt-6">
              <BorderlessButton onClick={nextStep}>
                Choose Vehicle
              </BorderlessButton>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Choose Your Vehicle
            </h2>
            {availableVehicles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {availableVehicles.map((v) => (
                  <div
                    key={v.type}
                    className="p-6 border rounded-lg flex items-center gap-4 cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300"
                    onClick={() => handleVehicleSelect(v.type)}
                  >
                    <div className="text-2xl text-[var(--primary-color)]">
                      {v.icon}
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-gray-800">
                        {v.type}
                      </h4>
                      <p className="text-sm text-gray-600 flex items-center">
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
            <div className="mt-6 flex justify-between">
              <BorderlessButton onClick={prevStep}>Back</BorderlessButton>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Contact Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              />
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Comments"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] col-span-2"
              />
            </div>
            <div className="mt-6 flex justify-between">
              <BorderlessButton onClick={prevStep}>Back</BorderlessButton>
              <BorderlessButton onClick={nextStep}>
                Booking Summary
              </BorderlessButton>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
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
                <strong>Date & Time:</strong> {formData.pickupDate} {formData.pickupTime}
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
            <div className="flex justify-between">
              <BorderlessButton onClick={prevStep}>Back</BorderlessButton>
              <BorderlessButton onClick={handleSubmit}>Book Now</BorderlessButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookTaxiForm;
