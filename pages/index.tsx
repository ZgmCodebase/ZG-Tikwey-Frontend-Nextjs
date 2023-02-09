import LandingBanner from "../components/pages/Landing/LandingBanner";
import { NextPageWithLayout } from "./_app";

import ExploreBestShow from "../components/pages/Landing/ExploreBestShow";
import UpcomingEvents from "../components/pages/Landing/UpcomingEvents";
import CheckoutPopularEvent from "../components/pages/Landing/CheckoutPopularEvent";

const Home: NextPageWithLayout = () => {
  return (
    <div className="min-h-screen text-size1Mob md:text-size1  w-full bg-bgColor2 text-textColor">
      <LandingBanner />
      <UpcomingEvents />
      <ExploreBestShow />
      <CheckoutPopularEvent />
      {/* <NextEventsSection />
            <Testimonials/> */}
    </div>
  );
};

// Home.getLayout = (children) => {
//     return <NavbarLayout>{children}</NavbarLayout>;
// };

export default Home;
