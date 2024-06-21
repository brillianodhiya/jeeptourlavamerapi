"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import PricingComponent from "@/components/PricingComponent";
import Head from "next/head";

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

  // State variable for managing zoomed image
  const [zoomedImage, setZoomedImage] = useState(null);
  // Function to open zoomed image
  const openZoomedImage = (imageUrl: any) => {
    setZoomedImage(imageUrl);
  };
  // Function to close zoomed image
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  // console.log(zoomedImage, "scroll");

  return (
    <div>
      <Head>
        <title>
          Jeep Merapi Lava Tour | Jelajah Merapi dengan Aman dan Nyaman
        </title>
        <meta
          name="description"
          content="Jeep Merapi Lava Tour | Jelajah keindahan wisata merapi dengan aman dan nyaman bersama kami. Reservasi 082326190711"
          key="desc"
        />
        <meta
          property="og:title"
          content="Jeep Merapi Lava Tour | Jelajah keindahan wisata merapi dengan aman dan nyaman bersama kami. Reservasi 082326190711"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Jeep Merapi Lava Tour | Jelajah keindahan wisata merapi dengan aman dan nyaman bersama kami. Reservasi 082326190711"
          key="og:desc"
        />
        <meta
          property="og:image"
          content="https://jeeptourlavamerapi.com/icon.jpeg"
          key="og:image"
        />
        <meta
          property="og:url"
          content="https://jeeptourlavamerapi.com"
          key="og:url"
        />
        <link rel="icon" href="/icon.png" sizes="any" />
        {/* <link rel="apple-touch-icon" href="/icon.png" /> */}

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Jeep Merapi Lava Tour" />
        <meta
          name="keywords"
          content="touring, reservation, jeep, merapi, merapi lava tour"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
                href="#destinasi"
              >
                Destinasi
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
                <p className="text-2xl mt-10 font-medium">
                  Reservasi 082326190711
                </p>
                <a
                  href="https://wa.me/6282326190711?text=Halo admin Jeep Merapi Lava Tour"
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

        {/* layanan */}
        <section id="layanan">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 mt-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
              Layanan
            </h2>
            <p className="mt-1 text-gray-600">
              Layanan yang kami berikan untuk kenyamanan anda.
            </p>
          </div>
          <div className="max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
              <div className="text-center">
                <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                  <svg
                    fill="currentColor"
                    height="24"
                    width="24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 353.926 353.926"
                  >
                    <path
                      d="M210.286,344.926c0,4.971-4.029,9-9,9h-48.65c-4.971,0-9-4.029-9-9s4.029-9,9-9h48.65
	C206.257,335.926,210.286,339.955,210.286,344.926z M289.677,258.958v25.928c0,19.259-15.67,34.928-34.931,34.928H99.177
	c-19.259,0-34.928-15.668-34.928-34.928v-25.928c0-4.971,4.029-9,9-9h2.394c-0.021-0.258-0.033-0.52-0.033-0.784v-24.118
	c-0.013-0.535,0.023-1.066,0.105-1.588c0.204-1.329,0.699-2.561,1.418-3.631c0.705-1.055,1.639-1.969,2.767-2.659
	c0.457-0.281,0.94-0.522,1.446-0.719c3.564-1.483,7.107-3.016,10.605-4.586V101.909c0-17.877,11.375-33.581,27.599-39.623
	c-0.019-0.492-0.028-0.984-0.028-1.48V38.578C119.521,17.306,136.827,0,158.098,0h37.725C217.095,0,234.4,17.306,234.4,38.578
	v22.229c0,0.495-0.01,0.988-0.028,1.478c6.395,2.378,12.129,6.28,16.702,11.351c0.16-0.3,0.318-0.599,0.478-0.899
	c2.318-4.396,7.761-6.081,12.16-3.76c4.396,2.319,6.079,7.764,3.76,12.16c-16.845,31.926-41.307,61.508-72.707,87.923
	c-25.063,21.083-53.512,39.294-84.813,54.313v26.586h134.02V141.64c0-4.971,4.029-9,9-9s9,4.029,9,9v108.318h18.706
	C285.647,249.958,289.677,253.987,289.677,258.958z M137.521,60.807c0,1.842,0.243,3.629,0.699,5.33
	c0.073,0.22,0.138,0.444,0.193,0.672c2.574,8.428,10.424,14.576,19.684,14.576h37.725c9.259,0,17.109-6.146,19.685-14.573
	c0.057-0.231,0.122-0.458,0.195-0.68c0.455-1.699,0.698-3.484,0.698-5.325V38.578C216.4,27.231,207.169,18,195.822,18h-37.725
	c-11.346,0-20.576,9.231-20.576,20.578V60.807z M109.951,203.272c56.184-28.521,102.335-68.15,131.162-112.739
	c-2.612-4.871-6.75-8.658-11.666-10.83c-6.622,11.738-19.213,19.681-33.625,19.681h-37.725c-14.411,0-27.002-7.944-33.624-19.682
	c-8.604,3.8-14.522,12.438-14.522,22.207V203.272z M271.677,267.958h-18.57c-0.046,0-0.091,0.001-0.136,0.001h-152.02
	c-0.045,0-0.09,0-0.136-0.001H82.249v16.928c0,9.334,7.594,16.928,16.928,16.928h155.569c9.336,0,16.931-7.594,16.931-16.928
	V267.958z"
                    />
                  </svg>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    1 Jeep diisi 4 Orang
                  </h3>
                  <p className="mt-1 text-gray-600">
                    1 Jeep diisi 4 Orang, Sudah termasuk Driver dan Pemandu
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                  <svg
                    fill="currentColor"
                    height="24"
                    width="24"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g transform="translate(1 1)">
                      <g>
                        <g>
                          <path
                            d="M341.575,362.055c-8.378-7.447-12.102-17.687-12.102-27.927V306.2c0-10.24,4.655-20.48,12.102-27.927l40.029-40.96
				c10.24-9.309,11.171-25.135,3.724-36.305c-4.655-6.516-12.102-10.24-20.48-11.171c-8.378,0-16.756,2.793-22.342,8.378
				l-40.96,40.96c-7.447,7.447-17.687,12.102-27.927,12.102h-27.927c-10.24,0-20.48-4.655-27.927-12.102l-40.96-40.96
				c-9.309-10.24-25.135-11.171-36.305-3.724c-6.516,4.655-10.24,12.102-11.171,20.48c0,8.378,2.793,16.756,8.378,22.342
				l40.96,40.96c8.378,7.447,12.102,17.687,12.102,27.927v27.927c0,10.24-4.655,20.48-12.102,27.927l-40.96,40.96
				c-10.24,9.309-11.171,25.135-3.724,36.305c4.655,6.516,12.102,11.171,20.48,12.102c0,0,0.931,0,1.862,0
				c7.447,0,14.895-2.793,20.48-8.378l40.96-40.96c7.447-8.378,17.687-12.102,27.927-12.102h27.927
				c10.24,0,20.48,4.655,27.927,12.102l40.96,40.029c9.309,10.24,25.135,11.171,36.305,3.724
				c6.516-4.655,12.102-12.102,12.102-20.48c0-8.378-2.793-16.756-8.378-22.342L341.575,362.055z M369.502,433.735
				c-3.724,2.793-9.309,1.862-13.033-1.862l-40.96-40.96c-11.171-10.24-26.065-16.756-41.891-16.756h-27.927
				c-15.826,0-30.72,5.585-41.891,16.756l-40.96,40.96c-1.862,1.862-4.655,2.793-7.447,2.793s-4.655-1.862-6.516-3.724
				c-2.793-3.724-1.862-9.309,1.862-13.033l40.96-40.96c10.24-11.171,16.756-26.065,16.756-41.891v-27.927
				c0-15.825-5.585-30.72-16.756-41.891l-40.96-41.891c-1.862-1.862-2.793-4.655-2.793-7.447c0-2.793,1.862-4.655,3.724-6.516
				c0.931-0.931,2.793-1.862,4.655-1.862c2.793,0,5.586,1.862,6.516,3.724l40.96,40.96c11.171,10.24,26.065,16.756,41.891,16.756
				h27.927c14.895,0,30.72-6.516,41.891-18.618l40.96-40.96c1.862-1.862,4.655-2.793,7.447-2.793s4.655,1.862,6.516,3.724
				c2.793,3.724,1.862,9.309-1.862,13.033l-40.96,40.96c-10.24,11.171-16.756,26.065-16.756,41.891v27.927
				c0,15.826,6.516,29.789,18.618,44.684l40.96,40.96c1.862,1.862,2.793,4.655,2.793,7.447S371.364,431.873,369.502,433.735z"
                          />
                          <path
                            d="M431.873,110.709V91.738C447.442,89.4,459.8,75.536,459.8,58.578V31.582C459.8,13.895,445.836-1,427.218-1h-82.851
				c-17.687,0-32.582,13.964-32.582,32.582v9.562c-0.6,1.275-0.931,2.755-0.931,4.401s0.331,3.126,0.931,4.401v9.562
				c0,15.867,11.241,29.479,26.996,32.114v19.086h-65.164V56.716C273.618,25.065,247.553-1,215.902-1h-89.367
				C94.884-1,68.818,25.065,68.818,56.716v55.179c-16.014,4.161-27.927,18.781-27.927,36.05v325.818
				c0,20.48,16.756,37.236,37.236,37.236h353.745c20.48,0,37.236-16.756,37.236-37.236V147.945
				C469.109,127.465,452.353,110.709,431.873,110.709z M343.436,17.618h83.782c7.447,0,13.964,6.516,13.964,13.964v4.655H329.473
				v-4.655C329.473,24.135,335.989,17.618,343.436,17.618z M329.473,58.578v-3.724h111.709v4.655
				c0,7.447-6.516,13.964-14.895,13.964h-82.851C335.989,73.473,329.473,66.956,329.473,58.578z M357.4,92.091h55.854v18.618H357.4
				V92.091z M87.436,56.716c0-21.411,17.687-39.098,39.098-39.098h89.367c21.411,0,39.098,17.687,39.098,39.098v53.993h-18.618
				V62.302c0-13.964-12.102-26.065-26.996-26.065H132.12c-13.964,0-26.065,12.102-26.065,26.065v48.407H87.436V56.716z
				 M217.764,110.709h-93.091V62.302c0-3.724,3.724-7.447,7.447-7.447h78.196c3.724,0,7.447,3.724,7.447,7.447V110.709z
				 M450.491,473.764c0,10.24-8.378,18.618-18.618,18.618H78.127c-10.24,0-18.618-8.378-18.618-18.618V147.945
				c0-10.24,8.378-18.618,18.618-18.618h46.545h93.091h55.855h65.164h93.091c10.24,0,18.618,8.378,18.618,18.618V473.764z"
                          />
                          <path
                            d="M272.687,287.582h-26.065c-10.24,0-19.549,8.378-19.549,19.549v26.065c0,10.24,9.309,19.549,19.549,19.549h26.065
				c10.24,0,19.549-9.309,19.549-19.549v-26.065C292.236,296.891,283.858,287.582,272.687,287.582z M273.618,333.196
				c0,0,0,0.931-0.931,0.931h-26.065c0,0-0.931,0-0.931-0.931v-26.065c0,0,0-0.931,0.931-0.931h26.065c0,0,0.931,0,0.931,0.931
				V333.196z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Sudah Termasuk BBM
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Sudah termasuk BBM, tidak ada tambahan biaya.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                  <svg
                    fill="currentColor"
                    height="24"
                    width="24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512.001 512.001"
                  >
                    <g>
                      <g>
                        <path
                          d="M504.422,266.124h-9.793c-8.204,0-14.878-6.674-14.878-14.878s6.673-14.878,14.877-14.878h9.793
			c4.187,0,7.579-3.392,7.579-7.579v-45.47c0-4.187-3.392-7.579-7.579-7.579h-9.793c-8.204,0-14.878-6.674-14.878-14.878v-2.756
			l11.117-10.183c3.014-2.761,3.296-7.415,0.637-10.52l-29.585-34.529c-1.308-1.527-3.169-2.471-5.173-2.625
			c-2.008-0.168-3.989,0.494-5.513,1.801l-7.437,6.373c-6.23,5.337-15.642,4.611-20.979-1.618
			c-2.586-3.017-3.842-6.862-3.536-10.825c0.305-3.962,2.135-7.568,5.154-10.154l7.437-6.373c3.179-2.723,3.548-7.508,0.824-10.686
			L403.11,34.239c-2.722-3.177-7.507-3.548-10.686-0.824l-7.438,6.372c-3.018,2.586-6.861,3.844-10.824,3.536
			c-3.962-0.305-7.568-2.135-10.154-5.154l-9.922-11.581c-1.308-1.527-3.169-2.471-5.173-2.625
			c-2.011-0.154-3.988,0.492-5.513,1.801L212.373,138.032h-21.635c-4.187,0-7.579,3.392-7.579,7.579
			c0,4.187,3.392,7.579,7.579,7.579h273.855v7.672c0,16.562,13.474,30.036,30.036,30.036h2.214v30.312h-2.214
			c-16.562,0-30.036,13.474-30.036,30.036s13.474,30.036,30.036,30.036h2.214v30.312h-2.214c-16.562,0-30.036,13.473-30.036,30.035
			v17.182h-52.404c-4.187,0-7.579,3.392-7.579,7.579s3.392,7.579,7.579,7.579h59.983c4.187,0,7.579-3.392,7.579-7.579v-24.761
			c0-8.203,6.674-14.877,14.878-14.877h9.793c4.187,0,7.579-3.392,7.579-7.579v-45.47
			C512.001,269.516,508.609,266.124,504.422,266.124z M235.67,138.032l111.836-95.824l4.991,5.826
			c5.219,6.093,12.5,9.788,20.499,10.404c7.998,0.615,15.759-1.918,21.852-7.138l1.683-1.441l19.723,23.017l-1.682,1.442
			c-12.576,10.775-14.042,29.774-3.265,42.351c10.777,12.576,29.776,14.041,42.351,3.265l1.682-1.442l16.743,19.54H235.67z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M345.666,358.81H47.409v-7.671c0-16.562-13.474-30.036-30.036-30.036h-2.215v-30.312h2.215
			c16.562,0,30.036-13.474,30.036-30.036s-13.474-30.036-30.036-30.036h-2.215v-30.312h2.215c16.562,0,30.036-13.474,30.036-30.036
			v-17.182h86.493c4.187,0,7.579-3.392,7.579-7.579s-3.392-7.579-7.579-7.579H39.83c-4.187,0-7.579,3.392-7.579,7.579v24.761
			c0,8.203-6.674,14.878-14.878,14.878H7.579c-4.187,0-7.579,3.392-7.579,7.579v45.47c0,4.187,3.392,7.579,7.579,7.579h9.794
			c8.203,0,14.878,6.674,14.878,14.878c0,8.204-6.674,14.878-14.878,14.878H7.579c-4.187,0-7.579,3.392-7.579,7.579v45.47
			c0,4.187,3.392,7.579,7.579,7.579h9.794c8.203,0,14.878,6.674,14.878,14.878v4.098l-10.708,8.492
			c-1.615,1.28-2.638,3.162-2.836,5.211c-0.197,2.05,0.449,4.094,1.79,5.658l29.584,34.529c1.308,1.527,3.169,2.471,5.173,2.625
			c2.004,0.167,3.988-0.493,5.513-1.801l7.438-6.373c3.018-2.587,6.862-3.851,10.824-3.536c3.962,0.305,7.568,2.135,10.154,5.154
			c5.338,6.23,4.612,15.641-1.618,20.979l-7.437,6.372c-3.179,2.723-3.548,7.508-0.824,10.686l29.584,34.529
			c2.723,3.179,7.508,3.55,10.686,0.824l7.438-6.372c3.017-2.586,6.873-3.845,10.824-3.536c3.962,0.305,7.568,2.135,10.154,5.154
			l9.922,11.58c1.499,1.749,3.623,2.648,5.759,2.648c1.745,0,3.498-0.599,4.927-1.824l130.796-112.069
			c0.073-0.063,0.136-0.131,0.207-0.196h46.061c4.187,0,7.579-3.392,7.579-7.579S349.853,358.81,345.666,358.81z M164.495,469.792
			l-4.991-5.825c-5.219-6.093-12.499-9.788-20.499-10.404c-7.999-0.621-15.759,1.918-21.852,7.138l-1.683,1.441l-19.723-23.018
			l1.682-1.441c6.092-5.22,9.788-12.5,10.404-20.5c0.616-7.999-1.918-15.76-7.138-21.852c-5.219-6.093-12.499-9.788-20.499-10.404
			c-7.997-0.607-15.759,1.919-21.852,7.138l-1.682,1.442l-16.744-19.54H276.33L164.495,469.792z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M427.899,173.562H212.007c-4.187,0-7.579,3.392-7.579,7.579s3.392,7.579,7.579,7.579H420.32v134.56H91.681V188.72h62.402
			c4.187,0,7.579-3.392,7.579-7.579s-3.392-7.579-7.579-7.579H84.102c-4.187,0-7.579,3.393-7.579,7.579v149.718
			c0,4.187,3.392,7.579,7.579,7.579H427.9c4.187,0,7.579-3.392,7.579-7.579V181.141
			C435.478,176.954,432.086,173.562,427.899,173.562z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M156.673,222.827h-41.854c-2.771,0-4.057,2.969-4.057,5.739c0,3.166,1.484,5.838,4.057,5.838h14.546V291.1
			c0,2.672,3.167,4.057,6.431,4.057c3.167,0,6.432-1.385,6.432-4.057v-56.696h14.446c2.573,0,4.057-2.771,4.057-5.838
			C160.73,225.796,159.444,222.827,156.673,222.827z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M174.186,222.827c-3.265,0-6.431,1.187-6.431,3.957V291.1c0,2.672,3.166,4.057,6.431,4.057
			c3.167,0,6.431-1.385,6.431-4.057v-64.316C180.617,224.014,177.353,222.827,174.186,222.827z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M231.675,269.826c-3.364,0-6.135,0.99-6.333,4.057c-0.297,4.156-1.088,10.587-10.092,10.587
			c-6.827,0-10.587-3.661-10.587-11.379v-27.606c0-7.718,3.759-11.38,10.389-11.38c9.399,0,10.092,6.729,10.291,9.796
			c0.098,2.969,2.771,4.057,6.431,4.057c4.353,0,6.432-1.187,6.432-6.333c0-11.479-9.797-18.8-23.551-18.8
			c-12.467,0-22.856,6.134-22.856,22.659v27.606c0,16.524,10.291,22.659,22.758,22.659c13.852,0,23.649-7.619,23.649-19.592
			C238.206,271.111,236.127,269.826,231.675,269.826z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M295.195,286.945l-21.571-32.85l17.711-22.165c0.692-0.89,0.791-1.781,0.791-2.473c0-3.266-4.156-6.63-7.421-6.63
			c-1.384,0-2.572,0.494-3.561,1.88l-21.373,29.09v-27.013c0-2.77-3.264-3.957-6.431-3.957c-3.265,0-6.431,1.187-6.431,3.957h0.001
			V291.1c0,2.672,3.166,4.057,6.431,4.057c3.167,0,6.431-1.385,6.431-4.057v-19.393l5.344-6.728l18.602,28.2
			c1.088,1.78,2.77,2.473,4.452,2.473c3.76,0,7.717-3.264,7.717-6.431C295.887,288.43,295.689,287.638,295.195,286.945z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M342.39,283.878h-28.003v-19.889h15.041c2.771,0,4.057-2.672,4.057-4.948c0-2.672-1.484-5.146-4.057-5.146h-15.041
			v-19.789h28.003c2.573,0,4.057-2.672,4.057-5.739c0-2.671-1.287-5.541-4.057-5.541h-35.225c-2.87,0-5.64,1.385-5.64,4.057V291.1
			c0,2.672,2.77,4.057,5.64,4.057h35.225c2.771,0,4.057-2.869,4.057-5.541C346.447,286.55,344.963,283.878,342.39,283.878z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M395.127,222.827h-41.854c-2.771,0-4.057,2.969-4.057,5.739c0,3.166,1.484,5.838,4.057,5.838h14.546V291.1
			c0,2.672,3.167,4.057,6.431,4.057c3.167,0,6.432-1.385,6.432-4.057v-56.696h14.446c2.573,0,4.057-2.771,4.057-5.838
			C399.184,225.796,397.898,222.827,395.127,222.827z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Sudah Termasuk Tiket Wisata
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Sudah termasuk tiket masuk obyek wisata.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                  <svg
                    fill="currentColor"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 407.767 407.766"
                  >
                    <g>
                      <g>
                        <path
                          d="M182.534,298.741c-4.912,0-9.836-1.873-13.595-5.632L60.855,185.013c-7.509-7.509-7.509-19.671,0-27.181
			c7.494-7.518,19.681-7.518,27.189,0l94.489,94.504l151.393-151.393V51.334c0-7.962-6.449-14.414-14.412-14.414H14.423
			C6.461,36.92,0,43.373,0,51.334v305.089c0,7.962,6.461,14.423,14.423,14.423h305.091c7.963,0,14.412-6.461,14.412-14.423V155.326
			L196.131,293.109C192.378,296.874,187.46,298.741,182.534,298.741z"
                        />
                        <path
                          d="M402.129,59.93c-7.506-7.509-19.696-7.509-27.178,0l-41.024,41.013v54.382l68.202-68.206
			C409.646,79.62,409.646,67.452,402.129,59.93z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Sudah Termasuk Asuransi
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Sudah termasuk asuransi, tidak ada tambahan biaya.
                  </p>
                </div>
              </div>
            </div>
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
                  link: "https://wa.me/6282326190711?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Short%201",
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
                  link: "https://wa.me/6282326190711?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Short%202",
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
                  link: "https://wa.me/6282326190711?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Short%203",
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
                  link: "https://wa.me/6282326190711?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Medium%201",
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
                  link: "https://wa.me/6282326190711?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Medium%202",
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
                  link: "https://wa.me/6282326190711?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Long%201",
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
                  link: "https://wa.me/6282326190711?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Long%202",
                  popular: false,
                  image: "/long2.jpeg",
                },
                {
                  title: "Sunrise",
                  price: "450",
                  duration: "start jam 5.30",
                  features: [],
                  button: "Hubungi Admin",
                  link: "https://wa.me/6282326190711?text=Halo%20Admin%20Jeep%20Merapi%20Lava%20Tour%2C%20saya%20mau%20pesan%20paket%20Sunrise%2C%20mohon%20info%20lebih%20lanjut",
                  popular: false,
                  image: "/sunrise.jpeg",
                  custom: true,
                },
              ]}
            />

            <div className="mt-5 sm:mt-10 lg:mt-14 lg:col-span-5">
              <div className="space-y-6 sm:space-y-8 flex flex-col justify-center items-center">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 text-center">
                    Destinasi Alternatif
                  </h2>
                  <p className="text-gray-500 text-center">
                    Destinasi alternatif yang bisa kamu kunjungi. Catatan:{" "}
                    <span className="text-amber-600">
                      Tiket masuk ditanggung pengunjung
                    </span>
                  </p>
                </div>

                <ul className="space-y-2 sm:space-y-4">
                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-amber-50 text-amber-600">
                      <svg
                        className="flex-shrink-0 size-3.5"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm sm:text-base text-gray-500 ">
                      <span className="font-bold capitalize">
                        plunyon kalikuning
                      </span>
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-amber-50 text-amber-600">
                      <svg
                        className="flex-shrink-0 size-3.5"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span className="text-sm sm:text-base text-gray-500 ">
                      <span className="font-bold capitalize">stone henge</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* gallery */}
        <section id="destinasi">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 mt-10">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
              Destinasi
            </h2>
            <p className="mt-1 text-gray-600">
              Beberapa spot di Lava Tour Merapi.
            </p>
          </div>
          <div className="max-w-full sm:max-w-[90%] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
            <div className="flex flex-wrap items-center sm:items-start sm:grid sm:grid-cols-12 gap-6">
              <div className="w-[45%] sm:w-full sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  onClick={() => {
                    openZoomedImage("/spotfotojeep.jpeg");
                  }}
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <Image
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover h-52 md:h-full"
                      src="/spotfotojeep.jpeg"
                      alt="Spot Foto Jeep"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-2 md:text-lg">
                      Spot Foto Jeep
                    </div>
                  </div>
                </a>
              </div>

              <div className="w-[45%] sm:w-full sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-4">
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  // href="#"
                  onClick={() => {
                    openZoomedImage("/bungker kaliadem.jpeg");
                  }}
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <Image
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover h-52 md:h-full"
                      src="/bungker kaliadem.jpeg"
                      alt="Bungker Kaliadem"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-2 md:text-lg">
                      Bungker Kaliadem
                    </div>
                  </div>
                </a>
              </div>

              <div className="w-[45%] sm:w-full col-span-12 md:col-span-4">
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  // href="#"
                  onClick={() => {
                    openZoomedImage("/batualien.jpeg");
                  }}
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <Image
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover h-52 md:h-full"
                      src="/batualien.jpeg"
                      alt="Batu Alien"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-2 md:text-lg">
                      Batu Alien
                    </div>
                  </div>
                </a>
              </div>

              <div className="w-[45%] sm:w-full col-span-12 sm:col-span-6 md:col-span-4">
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  // href="#"
                  onClick={() => {
                    openZoomedImage("/the lost world park.jpeg");
                  }}
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <Image
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover h-52 md:h-[50vh]"
                      src="/the lost world park.jpeg"
                      alt="The Lost World Park"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-2 md:text-lg">
                      The Lost World Park
                    </div>
                  </div>
                </a>
              </div>

              <div className="w-[45%] sm:w-full col-span-12 sm:col-span-6 md:col-span-4">
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  // href="#"
                  onClick={() => {
                    openZoomedImage("/petilasan rumah mbah maridjan.jpeg");
                  }}
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <Image
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover h-52 md:h-full"
                      src="/petilasan rumah mbah maridjan.jpeg"
                      alt="Petilasan Rumah Mbah Mardjan"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-2 md:text-lg">
                      Petilasan Rumah Mbah Mardjan
                    </div>
                  </div>
                </a>
              </div>
              {/* next */}
              <div className="w-[45%] sm:w-full sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  onClick={() => {
                    openZoomedImage("/museum mini sisa hartaku.jpeg");
                  }}
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <Image
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover h-52 md:h-full"
                      src="/museum mini sisa hartaku.jpeg"
                      alt="Museum Mini Sisa Hartaku"
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-2 md:text-lg">
                      Museum Mini Sisa Hartaku
                    </div>
                  </div>
                </a>
              </div>

              <div className="w-[45%] sm:w-full sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-4">
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  // href="#"
                  onClick={() => {
                    openZoomedImage("/track air kali kuning.jpeg");
                  }}
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <Image
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover h-52 md:h-full"
                      src="/track air kali kuning.jpeg"
                      alt="Track Air Kali Kuning"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-2 md:text-lg">
                      Track Air Kali Kuning
                    </div>
                  </div>
                </a>
              </div>

              <div className="w-[45%] sm:w-full col-span-12 md:col-span-4">
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  // href="#"
                  onClick={() => {
                    openZoomedImage("/sunrise.jpeg");
                  }}
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <Image
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover h-52 md:h-full"
                      src="/sunrise.jpeg"
                      alt="Sunrise Merapi"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-2 md:text-lg">
                      Sunrise Merapi
                    </div>
                  </div>
                </a>
              </div>

              <div className="w-[45%] sm:w-full col-span-12 sm:col-span-6 md:col-span-4">
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  // href="#"
                  onClick={() => {
                    openZoomedImage("/plunyon kalikuning2.jpeg");
                  }}
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <Image
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover h-52 md:h-[50vh]"
                      src="/plunyon kalikuning2.jpeg"
                      alt="Plunyon Kalikuning"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-2 md:text-lg">
                      Plunyon Kalikuning
                    </div>
                  </div>
                </a>
              </div>

              <div className="w-[45%] sm:w-full col-span-12 sm:col-span-6 md:col-span-4">
                <a
                  className="group relative block rounded-xl overflow-hidden"
                  // href="#"
                  onClick={() => {
                    openZoomedImage("/stonehenge.jpeg");
                  }}
                >
                  <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <Image
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover h-52 md:h-full"
                      src="/stonehenge.jpeg"
                      alt="Stone Henge"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-2 md:text-lg">
                      Stone Henge
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <a
          title="Contact Sale"
          className="fixed z-90 bottom-10 right-8 bg-amber-600 w-fit rounded-full drop-shadow-lg flex justify-center items-center text-white text-lg font-semibold p-4 hover:bg-amber-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
          href="https://wa.me/6282326190711?text=Halo admin Jeep Merapi Lava Tour"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </main>
      {/* <!-- ========== FOOTER ========== --> */}
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center">
          <div>
            <a
              className="flex-none text-xl font-semibold text-black"
              href="#"
              aria-label="Brand"
            >
              Jeep Merapi Lava Tour
            </a>
          </div>

          <div className="mt-3">
            <p className="text-gray-500">
              © Jeep Merapi Lava Tour 2024. All rights reserved.
            </p>
          </div>

          {/* <div className="mt-3 space-x-2">
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
              </svg>
            </a>
          </div> */}
        </div>
      </footer>
      {zoomedImage && (
        <div className="zoomed-image-container" onClick={closeZoomedImage}>
          <Image
            src={zoomedImage}
            alt="zoomed-image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </div>
  );
}
