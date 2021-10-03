import React from "react";

function Header() {
  return (
    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
    <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
      <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <div className="text-center">
            <p className="inline-block px-3 py-px mb-4 text-xs subHeading font-semibold tracking-wider text-black uppercase rounded-full bg-white">
              AstroMatch
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans header text-2xl lg:text-7xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Connect With
            <br className="hidden md:block" />
             Your Sign
          </h2>
          <p className="text-base text-white text-center md:text-lg">
            We based everything on your sign. Whether your looking to
            meet new people, casual fun dates, or your soulmate: we match 
            you with those that are more compatible with your sign
          </p>
        </div>
        <div className="flex flex-col lg:ml-28 items-center md:flex-row">
          <a
            href="/"
            className="inline-flex items-center justify-center btnFont w-full h-12 px-6 mb-3 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Sign Up
          </a>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold btnFont text-black justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
    <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
      <img
        className="object-cover w-full invisible md:visible lg:visible h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
        src="https://i.imgur.com/9sGdQFU.png"
        alt=""
      />
    </div>
    <style jsx>
        {
            `
                .header
                {
                    font-family: "Merienda One";
                }

                .btnFont
                {
                    font-family: "Merienda One";
                }

                .subHeading
                {
                    font-family: "Merienda One";
                }
            `
        }
    </style>
  </div>
  );
}

export default Header;
