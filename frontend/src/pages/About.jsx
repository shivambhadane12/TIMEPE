import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At TimePe, we are committed to revolutionizing how people interact with their banks. In today’s fast-paced world, standing in long queues at banks for routine tasks can be both time-consuming and frustrating. We believe there’s a smarter way to manage time and banking needs, and that’s where TimePe comes in.</p>
          <p>TimePe is a platform designed to streamline your banking experience by allowing you to book slots in advance. Whether it’s depositing money, opening an account, consulting with a financial advisor, or other banking services, TimePe ensures you can plan your visit efficiently and avoid unnecessary waiting times. With our user-friendly interface, secure system, and focus on customer satisfaction, we strive to create a seamless banking experience for every individual.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to create a world where time is valued, and efficiency is prioritized. We aim to transform traditional banking systems into customer-friendly, time-saving operations that cater to the needs of the modern individual.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-customGray hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined slot scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-customGray hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of many banks in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-customGray hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you and stay updated in banking.</p>
        </div>
      </div>

    </div>
  )
}

export default About
