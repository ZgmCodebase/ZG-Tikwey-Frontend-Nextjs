import NavbarLayout from '../components/layouts/NavbarLayout';
import LandingBanner from '../components/pages/Landing/LandingBanner';
import MostPopularTicket from '../components/pages/Landing/MostPopularTicket';
import NextEventsSection from '../components/pages/Landing/NextEventsSection';
import { NextPageWithLayout } from './_app';

import type { NextPage } from "next";
import Testimonials from '../components/pages/Landing/Testimonials';
const Home: NextPageWithLayout = () => {
    const hello = "sdfsa";

    return (
        <div className="min-h-screen text-size1Mob md:text-size1  w-full bg-bgColor2 text-textColor">
            <LandingBanner />

            <MostPopularTicket />
            <NextEventsSection />
            <Testimonials/>
        </div>
    );
};

Home.getLayout = (children) => {
    return <NavbarLayout>{children}</NavbarLayout>;
};

export default Home;
