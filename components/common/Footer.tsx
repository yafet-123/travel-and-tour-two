import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/logo.png';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaTelegram,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';

export const Footer: React.FC = () => {
  const socialMediaLinks = [
    { path: <FaFacebook size={30} color="white" /> },
    { path: <FaYoutube size={30} color="white" /> },
    { path: <FaTwitter size={30} color="white" /> },
    { path: <FaInstagram size={30} color="white" /> },
    { path: <FaTelegram size={30} color="white" /> },
  ];

  const quickLinks = [
    { link: 'Home' },
    { link: 'About Us' },
    { link: 'Our Tours' },
    { link: 'Sustainabilty' },
    { link: 'Destinations' },
    { link: 'Contact Us' },
    { link: 'About Ethiopia' },
    { link: 'Travel Tips' },
  ];

  //   const aboutUsLinks = [

  //   ];

  return (
    <footer className="bg-emerald-800">
      <div className="flex flex-col lg:flex-row  md:justify-evenly p-6 bg-primaryColor gap-6 text-white ">
        <div className="flex flex-col gap-12 items-start justify-evemly mb-10 md:mb-0">
          <div className="">
            <Link href="/">
              <Image
                src={logo}
                className=""
                alt="Logo"
                width={200}
                // height={80}
              />
            </Link>
          </div>

          <p className="w-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elitadipisicing
            elit.
          </p>
          <div className="flex justify-center space-x-4">
            {socialMediaLinks.map((paths, index) => {
              return (
                <Link key={index} href="#">
                  {paths.path}
                </Link>
              );
            })}
          </div>
        </div>

        {/* <div className="flex flex-col  gap-2">
            <h1 className="text-lg font-bold md:hidden ">Quick Links</h1>
            {aboutUsLinks.map((links, index) => {
              return (
                <Link
                  key={index}
                  href="#"
                  className="hover:text-gray-300 inline-flex"
                >
                  {links.link}
                </Link>
              );
            })}
          </div> */}

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Contact Info</h1>

          <Link
            target="_blank"
            className="flex flex-row = items-center gap-2 hover:text-gray-300"
            href={`tel:${+251910101010}`}
          >
            <FaPhone /> <p>+251910101010</p>
          </Link>
          <Link
            target="_blank"
            className="flex flex-row items-center gap-2 hover:text-gray-300"
            href="mailto:ecotravelethiopia@gmail.com"
          >
            <MdEmail />
            <p>ecotravelethiopia@gmail.com</p>
          </Link>
          <Link
            target="_blank"
            className="flex flex-row items-center gap-2 hover:text-gray-300"
            href={`https://t.me/natnem`}
          >
            <FaTelegram /> <p>+251910101010 </p>
          </Link>
          <Link
            target="_blank"
            className="flex flex-row items-center gap-2 hover:text-gray-300"
            href={`https://goo.gl/maps/suKG3hUvtqUEHGz67`}
          >
            <ImLocation /> <p>Addis Ababa, Ethiopia </p>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2  justify-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Quick Links</h1>
            {quickLinks.map((links, index) => {
              return (
                <Link key={index} href="#" className="hover:text-gray-300">
                  {links.link}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-10 mx-10">
        <div className="text-gray-100 md:block">
          &copy;Eco-Travel Ethiopia 2022.
        </div>

        <div className="text-gray-100 md:block">
          Powered by Eco-Travel Ethiopia
        </div>
      </div>
    </footer>
  );
};
