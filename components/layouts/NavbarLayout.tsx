import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import AppIcon from "../shared/AppIcon";

type NavbarLayoutProps = {
    children: ReactElement;
};

function NavbarLayout({ children }: NavbarLayoutProps) {
    return (
        <div>
            <div className="gen-p py-5 bg-gray-400 flex justify-between items-center shadow-lg Navbar  ">
                <div className=" flex items-center md:max-w-sm lg:max-w-md xl:max-w-lg w-full justify-between Navbar__left">
                    <div className=" flex items-center Navbar__LogoContainer space-x-3 text-textColor text-size2 font-semibold">
                        <div className="h-6 w-6 bg-white" />
                        <h1>LogoName</h1>
                    </div>

                    <div className="md:block hidden Navbar__Navigation">
                        <ul className="flex space-x-5 text-textColor">
                            <li className="group  transition duration-300">
                                <Link href={"/"}>
                                    <a>
                                        Home{" "}
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-textColor"></span>
                                    </a>
                                </Link>
                            </li>
                            <li className="group transition duration-300">
                                <Link href={"/events"}>
                                    <a>
                                        {" "}
                                        Events{" "}
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-textColor"></span>
                                    </a>
                                </Link>
                            </li>
                            <li className="group transition duration-300">
                                <Link href={"/about-us"}>
                                    <a>
                                        About Us{" "}
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-textColor"></span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:hidden block">
                        <AppIcon
                            src="/icons/hamburger1.svg"
                            alt="hamburger_menu_icon"
                        />
                    </div>
                </div>

                <div className="hidden md:flex space-x-8 Navbar__buttons">
                    <button className="btn-text">Login</button>{" "}
                    <button className="btn">Sign Up</button>
                </div>
            </div>
            {children}
        </div>
    );
}

export default NavbarLayout;
