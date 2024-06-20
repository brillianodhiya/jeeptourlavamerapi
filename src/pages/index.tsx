"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Banner from "../assets/banner.jpeg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // hooks get scroll counter
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, []);

  // console.log(scroll, "scroll");

  return (
    <div>
      <header
        className={
          "flex flex-wrap md:justify-start md:flex-nowrap w-full text-sm transition-all" +
          (scroll > 150 ? " sticky top-0 z-50" : "")
        }
      >
        <nav
          className={
            "transition-all " +
            (scroll < 150
              ? "relative border border-solid border-gray-100 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
              : "mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto")
          }
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold"
              href="#"
              aria-label="Brand"
            >
              <Image
                src="/icon.png"
                width={64}
                height={64}
                alt="logo-jeep-merapi-lava-tour"
                className="relative"
              />
            </a>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
              <a
                className="py-3 ps-px sm:px-3 text-base text-gray-800 hover:text-gray-400 font-bold"
                href="#hubungi"
              >
                Hubungi Kami
              </a>
              <a
                className="py-3 ps-px sm:px-3 text-base text-gray-800 hover:text-gray-400 font-bold"
                href="#paket"
                aria-current="page"
              >
                Paket
              </a>
              <a
                className="py-3 ps-px sm:px-3 text-base text-gray-800 hover:text-gray-400 font-bold"
                href="#layanan"
              >
                Layanan
              </a>
              <a
                className="py-3 ps-px sm:px-3 text-base text-gray-800 hover:text-gray-400 font-bold"
                href="#gallery"
              >
                Gallery
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main id="content">
        <section>
          <div className="w-full min-h-[600px] relative overflow-hidden">
            {/* overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            {/* text */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-center z-20">
              <div>
                <h1 className="text-4xl font-bold">Jeep Merapi Lava Tour</h1>
                <p className="text-lg">
                  Nikmati sensasi petualangan di kaki gunung berapi Merapi
                </p>
              </div>
            </div>
            {/* image */}
            {/* <Image
              alt="banner-background"
              src={"/banner.jpeg"}
              width={1200}
              height={600}
              className="w-full max-h-[600px] object-cover object-center absolute bg-bottom"
              layout="responsive"
              // objectFit="contain"
              // objectPosition="center"
            /> */}
            <div
              style={{
                backgroundImage: `url(/banner.jpeg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                // zIndex: 10,
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
            ></div>
          </div>
        </section>
      </main>
    </div>
  );
}
