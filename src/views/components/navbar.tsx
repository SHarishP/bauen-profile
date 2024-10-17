"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="bg-[#f7f7f5] w-full z-50 fixed">
      <div className="max-w-[1440px] mx-auto flex flex-row justify-between items-center py-2 px-4 md:px-16">
        <Link
          href="/"
          className="items-center relative md:w-[8rem] md:h-[4rem] w-[6rem] h-[3rem]"
        >
          <Image src="/bauen-logo.png" fill alt="Bauen-Logo" />
        </Link>
        <div className="hidden md:block">
          <div className="flex flex-row justify-between items-center gap-4">
            <Link
              href="/"
              className="text-lg px-4 py-2 rounded-xl hover:bg-[#292929] hover:text-white ease-in-out duration-200"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-lg px-4 py-2 rounded-xl hover:bg-[#292929] hover:text-white ease-in-out duration-200"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-lg px-4 py-2 rounded-xl hover:bg-[#292929] hover:text-white ease-in-out duration-200"
            >
              Services
            </Link>
            <Link
              href="/our-team"
              className="text-lg px-4 py-2 rounded-xl hover:bg-[#292929] hover:text-white ease-in-out duration-200"
            >
              Our Team
            </Link>
          </div>
        </div>

        <div className="md:hidden px-6">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBars} className="text-3xl" />
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className={`md:hidden w-full bg-white flex flex-col items-center py-4 gap-6 transform transform-transform ${
            isOpen ? "block" : "hidden"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <Link
            href="/"
            className="text-lg px-4 py-2 rounded-xl hover:bg-[#292929] hover:text-white ease-in-out duration-200"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-lg px-4 py-2 rounded-xl hover:bg-[#292929] hover:text-white ease-in-out duration-200"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-lg px-4 py-2 rounded-xl hover:bg-[#292929] hover:text-white ease-in-out duration-200"
          >
            Services
          </Link>
          <Link
            href="/our-team"
            className="text-lg px-4 py-2 rounded-xl hover:bg-[#292929] hover:text-white ease-in-out duration-200"
          >
            Our Team
          </Link>
        </div>
      </div>
    </header>
  );
}

// bg-[#f7f7f5]
