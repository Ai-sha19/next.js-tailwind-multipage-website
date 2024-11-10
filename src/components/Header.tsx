'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; 
import { FaBars, FaTimes } from "react-icons/fa"; 
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-16 shadow-md">
      {/* Logo */}
      <div className="w-24 h-auto">
        <Image
          width={100}
          height={40}
          src="/logo.png"
          alt="logo"
          className="object-contain"
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden mt-5">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes size={28} className="text-gray-700" />
          ) : (
            <FaBars size={28} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Navigation - visible on larger screens and mobile responsive */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-6 md:mt-0 w-full md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 font-thin text-[16px] md:text-[17px]">
          <li>
            <Link
              className="transition duration-200 hover:text-[#75BF7A]"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-200 hover:text-[#75BF7A]"
              href="/tere-works"
            >
              How Tere Works
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-200 hover:text-[#75BF7A]"
              href="/tere-benefits"
            >
              Tere Benefits
            </Link>
          </li>
          <li className="flex justify-center items-center w-full md:w-[145px] h-[45px] bg-customGreen text-white rounded-md transition duration-300 ease-in-out hover:bg-white hover:text-customGreen hover:border hover:border-customGreen hover:scale-105">
            <Link href="/help-center">
              <button>Help Center</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
