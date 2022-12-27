import Image from "next/image";
import DefaultTextField from "../../shared/TextFields/DefaultTextField";
import {RiSearch2Line, RiMenu3Fill} from "react-icons/ri"

function LandingBannerNavBar() {
    return;
}

function LandingBanner() {
    return (
        <div className="gen-p w-full pt-10 md:pt-16 space-y-10 md:space-y-20 bg-red-50 relative">
            <div className=" rounded-2xl relative  w-full gen-p py-10 overflow-hidden">
                {/* background image */}
                <div className="absolute  left-0 right-0 top-0 bottom-0  h-full ">
                    <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-t from-black to-gray-900 opacity-60 z-10"></div>
                    <Image
                        src="/images/index/landing_background.png"
                        alt="landing_image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                {/* Navbar */}
                <div className="flex w-full justify-between items-center relative z-10 ">
                    {/* Logo */}
                    <div className="h-10 w-40 relative">
                        <Image
                            src={"/logo.svg"}
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    {/* Navigation */}
                    <div className="md:block hidden">
                        <li className="flex space-x-6 text-size2Mob md:text-size2  text-whiteColor">
                            <ul className="font-semibold cursor-pointer">
                                Home
                            </ul>
                            <ul className="hover:font-semibold cursor-pointer">
                                Events
                            </ul>
                            <ul className="hover:font-semibold cursor-pointer">
                                About
                            </ul>
                            <ul className="hover:font-semibold cursor-pointer">
                                Contact
                            </ul>
                        </li>
                    </div>

                    {/* login sign up buttons */}

                    <div className="md:flex hidden ">
                        <button className="btn3">LOG IN</button>
                        <button className="btn4">Sign Up</button>
                    </div>

                    <div className="md:hidden block text-white text-xl">
                        <RiMenu3Fill/>
                    </div>
                </div>

                {/* Content */}
                <div className="z-10 relative py-20 mt-10">
                    {/* Heading with a stupid design */}
                    <h1 className="text-center max-w-4xl text-whiteColor mx-auto text-size8Mob md:text-size8 font-semibold leading-[1.4]">
                        EXPERIENCE MADE FOR THOSE WHO KNOW
                    </h1>

                    {/* sub info for landing page */}
                    <div className=" text-center text-whiteColor max-w-2xl mx-auto py-6">
                        Lorem ipsum dolor sit amet consectetur. Felis dictum
                        senectus dolor quis maecenas ac fringilla. Praesent
                        purus malesuada eleifend at ac ultricies dolor proin.
                        Pellentesque morbi quam platea quam. Congue.
                    </div>

                    {/* buttons */}
                    <div className="flex max-w-[180px] space-y-4 md:space-y-0 md:w-full flex-col md:flex-row md:justify-between md:max-w-lg mx-auto pt-10 ">

                        <button className="btn2 ">Find your next event</button>
                        <button className="btn1 ">Create an event</button>
                    </div>


                    <div className="bg-whiteColor flex w-full md:max-w-2xl rounded-lg p-3 mx-auto items-center mt-10 md:mt-20 ease-in-out duration-500 hover:shadow-lg  md:hover:shadow-2xl hover:shadow-priColor">
                        {/* icon */}
                        <RiSearch2Line className="text-priColor text-4xl md:block hidden" stroke="20px"/>
                        {/* textfield */}
                        <input className="w-full mx-5 bg-whiteColor" placeholder="Search by team, artist, event, or venue"/>
                        {/* search button for large screens*/}
                        <button className="btn1 px-8 md:block hidden">Search</button>
                        {/* Search button for small screens */}
                        <RiSearch2Line className="text-priColor text-4xl block md:hidden" stroke="20px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingBanner;
