import Image from "next/image";
import React from "react";

type Props = {
  data: any[];
};

const PricingComponent = (props: Props) => {
  return (
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:items-center">
      {/* free  */}
      {/* <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8">
        <h4 className="font-medium text-lg text-gray-800">Free</h4>
        <span className="mt-7 font-bold text-5xl text-gray-800">Free</span>
        <p className="mt-2 text-sm text-gray-500">Forever free</p>

        <ul className="mt-7 space-y-2.5 text-sm">
          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600"
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
            <span className="text-gray-800">1 user</span>
          </li>

          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600"
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
            <span className="text-gray-800">Plan features</span>
          </li>

          <li className="flex space-x-2">
            <svg
              className="flex-shrink-0 mt-0.5 size-4 text-blue-600"
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
            <span className="text-gray-800">Product support</span>
          </li>
        </ul>

        <a
          className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Sign up
        </a>
      </div> */}

      {props.data.map((val: any) => {
        if (val.popular) {
          return (
            <div
              key={val.title}
              className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8"
            >
              <p className="mb-3">
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800">
                  Most popular
                </span>
              </p>
              <h4 className="font-medium text-lg text-gray-800">Startup</h4>
              <span className="mt-5 font-bold text-5xl text-gray-800">
                <span className="font-bold text-2xl -me-2">$</span>
                39
              </span>
              <p className="mt-2 text-sm text-gray-500">
                All the basics for starting a new business
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600"
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
                  <span className="text-gray-800">2 users</span>
                </li>

                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600"
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
                  <span className="text-gray-800">Plan features</span>
                </li>

                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 mt-0.5 size-4 text-blue-600"
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
                  <span className="text-gray-800">Product support</span>
                </li>
              </ul>

              <a
                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Sign up
              </a>
            </div>
          );
        } else {
          return (
            <div
              key={val.title}
              className="flex flex-col border-2 border-solid border-amber-600 text-center rounded-xl shadow-md overflow-hidden"
            >
              <Image
                src={val.image}
                alt={val.title}
                width={600}
                height={300}
                className="h-64 object-cover object-center"
              />
              <div className="p-8">
                <h4 className="font-medium text-3xl text-gray-600">
                  {val.title}
                </h4>
                <span className="mt-5 font-bold text-5xl text-gray-800">
                  {val.custom ? (
                    <span className="font-medium text-2xl">mulai dari </span>
                  ) : null}

                  {val.price}
                  <span className="font-bold text-2xl -me-2">K</span>
                </span>
                <p className="mt-1 text-lg font-semibold text-amber-600 flex flex-row items-center justify-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    //   stroke="currentColor"
                    className="relative"
                  >
                    <path
                      d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
                      fill="currentColor"
                    />
                  </svg>
                  {val.duration}
                </p>

                <ul className="mt-7 space-y-2.5 text-sm min-h-56">
                  {val.features.map((items: any, index: number) => {
                    return (
                      <li
                        key={items + index + val.title}
                        className="flex space-x-2 text-left"
                      >
                        <svg
                          className="flex-shrink-0 mt-0.5 size-5 text-amber-600"
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
                        <span className="text-gray-800 text-base">{items}</span>
                      </li>
                    );
                  })}
                  {val.custom ? (
                    <li className="flex space-x-2 text-center">
                      <span className="text-gray-800 text-2xl">
                        Info Lebih Lanjut Hubungi Admin
                      </span>
                    </li>
                  ) : null}
                </ul>

                <a
                  className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-lg rounded-lg border border-gray-200 bg-amber-600 text-white font-bold hover:border-gray-600 hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none shadow-md"
                  href={val.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 192 192"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M96 16c-44.183 0-80 35.817-80 80 0 13.12 3.163 25.517 8.771 36.455l-8.608 36.155a6.002 6.002 0 0 0 7.227 7.227l36.155-8.608C70.483 172.837 82.88 176 96 176c44.183 0 80-35.817 80-80s-35.817-80-80-80ZM28 96c0-37.555 30.445-68 68-68s68 30.445 68 68-30.445 68-68 68c-11.884 0-23.04-3.043-32.747-8.389a6.003 6.003 0 0 0-4.284-.581l-28.874 6.875 6.875-28.874a6.001 6.001 0 0 0-.581-4.284C31.043 119.039 28 107.884 28 96Zm46.023 21.977c11.975 11.974 27.942 20.007 45.753 21.919 11.776 1.263 20.224-8.439 20.224-18.517v-6.996a18.956 18.956 0 0 0-13.509-18.157l-.557-.167-.57-.112-8.022-1.58a18.958 18.958 0 0 0-15.25 2.568 42.144 42.144 0 0 1-7.027-7.027 18.958 18.958 0 0 0 2.569-15.252l-1.582-8.021-.112-.57-.167-.557A18.955 18.955 0 0 0 77.618 52H70.62c-10.077 0-19.78 8.446-18.517 20.223 1.912 17.81 9.944 33.779 21.92 45.754Zm33.652-10.179a6.955 6.955 0 0 1 6.916-1.743l8.453 1.665a6.957 6.957 0 0 1 4.956 6.663v6.996c0 3.841-3.124 6.995-6.943 6.585a63.903 63.903 0 0 1-26.887-9.232 64.594 64.594 0 0 1-11.661-9.241 64.592 64.592 0 0 1-9.241-11.661 63.917 63.917 0 0 1-9.232-26.888C63.626 67.123 66.78 64 70.62 64h6.997a6.955 6.955 0 0 1 6.66 4.957l1.667 8.451a6.956 6.956 0 0 1-1.743 6.917l-1.12 1.12a5.935 5.935 0 0 0-1.545 2.669c-.372 1.403-.204 2.921.603 4.223a54.119 54.119 0 0 0 7.745 9.777 54.102 54.102 0 0 0 9.778 7.746c1.302.806 2.819.975 4.223.603a5.94 5.94 0 0 0 2.669-1.545l1.12-1.12Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {val.button}
                </a>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default PricingComponent;
