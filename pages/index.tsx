import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavbarLayout from "../components/layouts/NavbarLayout";
import LandingBanner from "../components/pages/Landing/LandingBanner";
import { NextPageWithLayout } from "./_app";
import MostPopularTicket from "../components/pages/Landing/MostPopularTicket";
import NextEventsSection from "../components/pages/Landing/NextEventsSection";

const Home: NextPageWithLayout = () => {
    const hello = "sdfsa";

    return (
        <div className="min-h-screen text-size1Mob md:text-size1  w-full bg-white text-textColor">
            <LandingBanner />

            <MostPopularTicket />
            <NextEventsSection />
        </div>
    );
};

Home.getLayout = (children) => {
    return <NavbarLayout>{children}</NavbarLayout>;
};

export default Home;
