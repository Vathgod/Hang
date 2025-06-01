"use client";

import React, { useState, useEffect } from "react";

function OrderForm() {
  const [formData, setFormData] = useState({
    yourName: "shaikh anas",
    yourNumber: "4324232324",
    serviceOption: "dine_in", // Default to 'dine_in'
    yourOrder: "pizza",
    additionalFood: "drinks",
    howMuch: "2",
    dateTime: "",
    yourAddress: "",
    yourMessage: "",
  });

  const [isAddressVisible, setIsAddressVisible] = useState(false);

  useEffect(() => {
    if (formData.serviceOption === "delivery") {
      setIsAddressVisible(true);
    } else {
      setIsAddressVisible(false); // Hidden for 'dine_in' and 'pick_up'
    }
  }, [formData.serviceOption]); // Re-run when serviceOption changes

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let serviceOptionText = "";
    if (formData.serviceOption === "dine_in") {
      serviceOptionText = "Eat at Restaurant";
    } else if (formData.serviceOption === "pick_up") {
      serviceOptionText = "Pick Up";
    } else if (formData.serviceOption === "delivery") {
      serviceOptionText = "Delivery";
    }

    let message = "Your order\n";
    message += `Service Option: ${serviceOptionText}\n`;

    for (const key in formData) {
      // Only include address in the message if it was visible and relevant
      if (key === "yourAddress" && formData.serviceOption !== "delivery") {
        continue;
      }
      message += `${key}: ${formData[key]}\n`;
    }
    alert(message);
    // console.log('Form Data:', formData);
    // API call would go here
  };

  // Common input styling
  const inputClasses =
    "w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-base shadow-sm";
  const labelClasses = "block mb-1.5 text-sm font-semibold text-orange-600";

  return (
    <div className="bg-white  flex justify-center flex-col items-center p-6 md:p-8  shadow-lg  w-full ">
      <div className="text-orange-600 font-semibold text-xl underline underline-offset-4 lg:text-4xl mb-10">
        Order Here
      </div>{" "}
      {/* Form Container */}
      <form onSubmit={handleSubmit} className="space-y-6 text-orange-600">
        {/* Name and Number Row */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-6 text-orange-600 ">
          <div>
            <label htmlFor="yourName" className={labelClasses}>
              Your Name
            </label>
            <input
              type="text"
              id="yourName"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="yourNumber" className={labelClasses}>
              Your Number
            </label>
            <input
              type="text"
              id="yourNumber"
              name="yourNumber"
              value={formData.yourNumber}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Service Option Section */}
        <div>
          <label className={labelClasses}>Service Option</label>
          <div className="mt-2 flex gap-10 space-y-2 md:flex md:items-center md:space-y-0 md:space-x-6">
            <div className="flex items-center">
              <input
                type="radio"
                id="dineIn"
                name="serviceOption"
                value="dine_in"
                checked={formData.serviceOption === "dine_in"}
                onChange={handleChange}
                className="h-4 w-4 text-orange-600 border-gray-300 focus:ring-offset-0 focus:ring-green-500 accent-green-600"
              />
              <label
                htmlFor="dineIn"
                className="ml-2 block text-sm text-orange-600"
              >
                Dine in
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="pickUp"
                name="serviceOption"
                value="pick_up"
                checked={formData.serviceOption === "pick_up"}
                onChange={handleChange}
                className="h-4 w-4 text-orange-600 border-gray-300 focus:ring-offset-0 focus:ring-green-500 accent-green-600"
              />
              <label
                htmlFor="pickUp"
                className="ml-2 block text-sm text-orange-600"
              >
                Pick Up
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="delivery"
                name="serviceOption"
                value="delivery"
                checked={formData.serviceOption === "delivery"}
                onChange={handleChange}
                className="h-4 w-4 text-orange-600 border-gray-300 focus:ring-offset-0 focus:ring-green-500 accent-green-600"
              />
              <label
                htmlFor="delivery"
                className="ml-2 block text-sm text-orange-600"
              >
                Delivery
              </label>
            </div>
          </div>
        </div>

        {/* Order Details Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
          <div>
            <label htmlFor="yourOrder" className={labelClasses}>
              Your Order
            </label>
            <input
              type="text"
              id="yourOrder"
              name="yourOrder"
              value={formData.yourOrder}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="additionalFood" className={labelClasses}>
              Additional Food
            </label>
            <input
              type="text"
              id="additionalFood"
              name="additionalFood"
              value={formData.additionalFood}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="howMuch" className={labelClasses}>
              How Much
            </label>
            <input
              type="number"
              id="howMuch"
              name="howMuch"
              value={formData.howMuch}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="dateTime" className={labelClasses}>
              Date And Time
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Your Address - Conditional */}
        <div className={isAddressVisible ? "block" : "hidden"}>
          {" "}
          {/* Controls visibility */}
          <label htmlFor="yourAddress" className={labelClasses}>
            Your Address (for Delivery)
          </label>
          <textarea
            id="yourAddress"
            name="yourAddress"
            placeholder="Enter your delivery address"
            value={formData.yourAddress}
            onChange={handleChange}
            rows="3"
            className={`${inputClasses} min-h-[80px] resize-y`}
            disabled={!isAddressVisible} // Optionally disable if not visible
          />
        </div>

        {/* Your Message */}
        <div>
          <label htmlFor="yourMessage" className={labelClasses}>
            Your Message
          </label>
          <textarea
            id="yourMessage"
            name="yourMessage"
            placeholder="Enter any special instructions or messages"
            value={formData.yourMessage}
            onChange={handleChange}
            rows="3"
            className={`${inputClasses} min-h-[80px] resize-y`}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Order Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
