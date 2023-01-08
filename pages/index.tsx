import LandingBanner from '../components/pages/Landing/LandingBanner';
import { NextPageWithLayout } from './_app';

import ExploreBestShow from '../components/pages/Landing/ExploreBestShow';
import UpcomingEvents from '../components/pages/Landing/UpcomingEvents';
const Home: NextPageWithLayout = () => {
    const hello = "sdfsa";

    return (
        <div className="min-h-screen text-size1Mob md:text-size1  w-full bg-bgColor2 text-textColor">
            <LandingBanner />
            <UpcomingEvents/>
            <ExploreBestShow/>
            {/* <MostPopularTicket />
            <NextEventsSection />
            <Testimonials/> */}
        </div>
    );
};

// Home.getLayout = (children) => {
//     return <NavbarLayout>{children}</NavbarLayout>;
// };

export default Home;
