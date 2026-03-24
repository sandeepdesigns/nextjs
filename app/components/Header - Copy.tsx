"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [productOpen, setProductOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname.startsWith(path)
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-black";
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* 🔹 Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img src="/next.svg" alt="Logo" className="h-10 w-30" />
          </Link>
        </div>

        {/* 🔹 Center: Navbar (Desktop) */}
        <nav className="hidden xl:flex items-center gap-8">

          {/* 🔥 Product Dropdown */}
          <div className="relative group">
            <Link href="/allproducts" className={isActive("/allproducts")}>
              Product
            </Link>

            <div className="absolute left-0 top-full pt-2 w-52">
              <div className="bg-white shadow-lg rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">

                <Link href="/allproducts/email" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/allproducts/email")}`}>
                  Email Marketing
                </Link>

                <Link href="/allproducts/automation" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/allproducts/automation")}`}>
                  Automation
                </Link>

                <Link href="/allproducts/analytics" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/allproducts/analytics")}`}>
                  Analytics
                </Link>

              </div>
            </div>
          </div>

          <Link href="/integrations" className={isActive("/integrations")}>
            Integrations
          </Link>

          <Link href="#" className="text-gray-700 hover:text-black">
            Infrastructure
          </Link>

          <Link href="#" className="text-gray-700 hover:text-black">
            Use Cases
          </Link>

          <Link href="/plans" className={isActive("/plans")}>
            Plans
          </Link>

          <Link href="/contact" className={isActive("/contact")}>
            Contact
          </Link>

        </nav>

        {/* 🔹 Right: CTA */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href="#demo-popup"
            data-fancybox=""
            className="px-5 py-2 rounded-full bg-black text-white"
          >
            Book a Demo
          </a>
        </div>

        {/* 🔹 Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden flex items-center rounded-full"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* 🔻 Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-white border-t px-4 pb-4">
          <nav className="flex flex-col gap-4 mt-4">

            {/* 🔥 Mobile Product Dropdown */}
            <div>
              <button
                onClick={() => setProductOpen(!productOpen)}
                className={`w-full text-left ${isActive("/allproducts")}`}
              >
                Product
              </button>

              {productOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2 text-sm">
                  <Link href="/product/email" className={isActive("/allproducts/email")}>
                    Email Marketing
                  </Link>
                  <Link href="/product/automation" className={isActive("/allproducts/automation")}>
                    Automation
                  </Link>
                  <Link href="/product/analytics" className={isActive("/allproducts/analytics")}>
                    Analytics
                  </Link>
                </div>
              )}
            </div>

            <Link href="/integrations" className={isActive("/integrations")}>
              Integrations
            </Link>

            <Link href="#" className="text-gray-700">
              Infrastructure
            </Link>

            <Link href="#" className="text-gray-700">
              Use Cases
            </Link>

            <Link href="./plans" className="text-gray-700">
              Plans
            </Link>

            <Link href="./contact" className="text-gray-700">
              Contact
            </Link>

            <a href="#demo-popup" data-fancybox="" className="mt-4 px-5 py-2 bg-black text-white rounded-lg text-center">
              Book a Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;