"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import PricingComponent from "@/components/PricingComponent";

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
              <div className="flex flex-row items-center gap-1 flex-wrap">
                <Image
                  src="/icon.png"
                  width={124}
                  height={124}
                  alt="logo-jeep-merapi-lava-tour"
                  className={
                    scroll > 150
                      ? "relative h-[34px] w-[34px] md:h-[64px] md:w-[64px]"
                      : "relative h-[64px] w-[64px]"
                  }
                />
                {/* <h6>Jeep Merapi Lava Tour</h6> */}
              </div>
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
                href="#"
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
        <section id="home">
          <div className="w-full min-h-[600px] relative overflow-hidden">
            {/* overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            {/* text */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-center z-20">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">Jeep Merapi Lava Tour</h1>
                <p className="text-lg mt-3">
                  Jelajah keindahan wisata merapi dengan aman dan nyaman bersama
                  kami
                </p>

                <a
                  href="https://wa.me/6285799907498?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Short%201"
                  target="_blank"
                  rel="noopener"
                  className="mt-4 py-3 px-4 inline-flex items-center gap-x-2 text-base font-bold rounded-lg border border-solid border-amber-600 bg-white text-gray-800 shadow-xl hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Pesan Sekarang
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
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

        {/* pricing */}
        <section id="paket" className="w-full relative">
          {/* <!-- Pricing --> */}
          <div className="max-w-[100rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* <!-- Title --> */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
                Paket Lava Tour
              </h2>
              <p className="mt-1 text-gray-600">
                Pilih paket yang sesuai dengan kebutuhanmu
              </p>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Grid --> */}
            <PricingComponent
              data={[
                {
                  title: "Short 1",
                  price: "400",
                  duration: "+-1.5jam",
                  features: [
                    "Spot Foto Jeep",
                    "Museum Mini Sisa Hartaku/Petilasan Rumah Mbah Maridjan",
                    "Batu Alien/TLWP",
                    "⁠Bungker Kaliadem",
                  ],
                  button: "Pesan Sekarang",
                  link: "https://wa.me/6285799907498?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Short%201",
                  popular: false,
                  image: "/short1.jpeg",
                },
                {
                  title: "Short 2",
                  price: "400",
                  duration: "+-1.5jam",
                  features: [
                    "Spot Foto Jeep",
                    "Museum Mini Sisa Hartaku/Petilasan Rumah Mbah Maridjan",
                    "Batu Alien/TLWP",
                    "Track Air Kalikuning",
                  ],
                  button: "Pesan Sekarang",
                  link: "https://wa.me/6285799907498?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Short%202",
                  popular: false,
                  image: "/short2.jpeg",
                },
                {
                  title: "Short 3",
                  price: "450",
                  duration: "+-1.5jam",
                  features: [
                    "Spot Foto Jeep",
                    "⁠Petilasan Rumah Mbah Maridjan/Museum Mini Sisa Hartaku/The Lost World Park/Batu Alien",
                    "⁠Track Air Kalikuning",
                  ],
                  button: "Pesan Sekarang",
                  link: "https://wa.me/6285799907498?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Short%203",
                  popular: false,
                  image: "/short3.jpeg",
                },
                {
                  title: "Medium 1",
                  price: "500",
                  duration: "+-2jam",
                  features: [
                    "Spot Foto Jeep",
                    "Museum Mini Sisa Hartaku/Petilasan Rumah Mbah Maridjan",
                    "Batu Alien",
                    "The lost World Par",
                    "Bungker Kaliadem",
                  ],
                  button: "Pesan Sekarang",
                  link: "https://wa.me/6285799907498?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Medium%201",
                  popular: false,
                  image: "/medium1.jpeg",
                },
                {
                  title: "Medium 2",
                  price: "500",
                  duration: "+-2jam",
                  features: [
                    "Spot Foto Jeep",
                    "Museum Mini Sisa Hartaku/Petilasan Rumah Mbah Maridjan",
                    "Batu Alien/The Lost World Par",
                    "Bungker Kaliadem",
                    "Track Air Kalikuning",
                  ],
                  button: "Pesan Sekarang",
                  link: "https://wa.me/6285799907498?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Medium%202",
                  popular: false,
                  image: "/medium2.jpeg",
                },
                {
                  title: "Long 1",
                  price: "600",
                  duration: "+-2.5jam",
                  features: [
                    "Spot Foto Jeep",
                    "Museum Mini Sisa Hartaku",
                    "Petilasan Rumah Mbah Maridjan",
                    "Batu Alien",
                    "⁠The Lost World Par",
                    "Bungker Kaliadem",
                  ],
                  button: "Pesan Sekarang",
                  link: "https://wa.me/6285799907498?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Long%201",
                  popular: false,
                  image: "/long1.jpeg",
                },
                {
                  title: "Long 2",
                  price: "600",
                  duration: "+-2.5jam",
                  features: [
                    "Spot Foto Jeep",
                    "Museum Mini Sisa Hartaku/Petilasan Rumah Mbah Maridjan",
                    "Batu Alien",
                    "The Lost World Par",
                    "⁠Bungker Kaliadem",
                    "Track Air Kalikuning",
                  ],
                  button: "Pesan Sekarang",
                  link: "https://wa.me/6285799907498?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Long%202",
                  popular: false,
                  image: "/long2.jpeg",
                },
                {
                  title: "Sunrise",
                  price: "450",
                  duration: "start jam 5.30",
                  features: [],
                  button: "Hubungi Admin",
                  link: "https://wa.me/6285799907498?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Sunrise%2C%20mohon%20info%20lebih%20lanjut",
                  popular: false,
                  image: "/sunrise.jpeg",
                  custom: true,
                },
              ]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
