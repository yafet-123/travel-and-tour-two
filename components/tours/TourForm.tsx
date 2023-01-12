import React, { useState, useRef } from 'react';
import { FormData } from '../../types/types';

export const TourForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch('/api/form');
    // console.log(event)
  };

  return (
    <section className="w-full h-full my-20 bg-[#165248] p-10">
      <h1 className="text-center text-3xl lg:text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-10">
        BOOK THIS TOUR
      </h1>

      <form
        onSubmit={(event) => handleSubmit(event)}
        action="/api/form"
        method="post"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="">
            <label
              htmlFor="arrivalDate"
              className="block mb-2 text-2xl font-bold text-white"
            >
              Arrival Date
            </label>
            <input
              type="date"
              id="arrivalDate"
              className="bg-white border border-[#165248] text-gray-900 text-2xl rounded-lg block w-full p-5 placeholder:text-2xl placeholder:text-[#BABABA]"
              placeholder="Arrival Date"
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="departureDate"
              className="block mb-2 text-2xl font-bold text-white"
            >
              Departure Date
            </label>
            <input
              type="date"
              id="departureDate"
              className="bg-white border border-[#165248] text-gray-900 text-2xl rounded-lg block w-full p-5 placeholder:text-2xl placeholder:text-[#BABABA]"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="adult"
              className="block mb-2 text-2xl font-bold text-white"
            >
              Adult
            </label>
            <select
              id="adult"
              className="bg-white border border-[#165248] text-gray-900 text-2xl rounded-lg block w-full p-5 placeholder:text-2xl
               placeholder:text-[#BABABA]"
            >
              <option selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="adult"
              className="block mb-2 text-2xl font-bold text-white"
            >
              Child
            </label>
            <select
              id="adult"
              className="bg-white border border-[#165248] text-gray-900 text-2xl rounded-lg block w-full p-5 placeholder:text-2xl placeholder:text-[#BABABA]"
            >
              <option selected>0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-2xl font-bold text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="bg-white border border-[#165248] text-gray-900 text-2xl rounded-lg block w-full p-5 placeholder:text-2xl placeholder:text-[#BABABA]"
              placeholder="Enter Full Name Here"
              required
            />
          </div>

          <div>
            <label
              htmlFor="country"
              className="block mb-2 text-2xl font-bold text-white"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              className="bg-white border border-[#165248] text-gray-900 text-2xl rounded-lg block w-full p-5 placeholder:text-2xl placeholder:text-[#BABABA]"
              placeholder="Enter Your Country Here"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-2xl font-bold text-white"
            >
              Your Email Address
            </label>
            <input
              type="email"
              id="email"
              className="bg-white border border-[#165248] text-gray-900 text-2xl rounded-lg block w-full p-5 placeholder:text-2xl placeholder:text-[#BABABA]"
              placeholder="Enter Email Address Here"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-2xl font-bold text-white"
            >
              Your Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="bg-white border border-[#165248] text-gray-900 text-2xl rounded-lg block w-full p-5 placeholder:text-2xl placeholder:text-[#BABABA]"
              placeholder="Enter Phone Number Here"
              required
            />
          </div>
        </div>
        <div className="my-10">
          <label
            htmlFor="message"
            className="block mb-2 text-2xl font-bold text-white"
          >
            Note
          </label>
          <textarea
            id="message"
            rows={5}
            className="bg-white border border-[#165248] text-gray-900 text-2xl rounded-lg block w-full p-5 placeholder:text-2xl placeholder:text-[#BABABA]"
            placeholder="Anything? Write it here."
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="mt-10 font-sans font-extrabold text-2xl py-5 px-16 bg-[#94BB3C] hover:bg-black text-white hover:text-[#94BB3C] border-2 border-white rounded-md"
          >
            Book Now
          </button>
        </div>
      </form>
    </section>
  );
};
