'use client';

import React from 'react';
import InputField from '@/src/common/InputField';
import { FaRegUser } from 'react-icons/fa6';
import { AiOutlineMail } from 'react-icons/ai';
import { LuEarth } from 'react-icons/lu';
import { IoIosPhonePortrait } from 'react-icons/io';

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <main className="pt-[50px] flex items-center justify-center">
      <div className="p-8 rounded-lg max-w-lg w-full">
        <h2 className="text-4xl font-bold text-center mb-6">Get in touch with us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField placeholder="First Name" icon={FaRegUser} required />
            <InputField placeholder="Last Name" required />
          </div>

          {/* Email */}
          <InputField type="email" placeholder="Email" icon={AiOutlineMail} required />

          {/* Country */}
          <div className="relative">
            <select
              className="w-full ps-10 text-[17px] pe-5 pt-[26px] pb-4 border-2 border-gray-600 rounded-md outline-none block"
              required
            >
              <option value="">Your country</option>
              <option value="EG">Egypt</option>
              <option value="SA">Saudi Arabia</option>
              <option value="AE">UAE</option>
            </select>
            <div className="absolute left-2 top-[40%]">
              <LuEarth className="text-[24px] text-gray-600" />
            </div>
          </div>

          {/* Phone */}
          <InputField type="tel" placeholder="Phone number" icon={IoIosPhonePortrait} required />

          {/* Message */}
          <InputField
            as="textarea"
            type='textarea'
            placeholder="Your message"
            className="!h-32 pt-5 ps-5 w-full border-2 border-gray-600 outline-none rounded-md"
            required
          />

          <button
            type="submit"
            className="w-full cursor-pointer bg-[#cda349] hover:bg-orange-500 text-white font-semibold py-4 rounded-md transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </main>
  );
}
