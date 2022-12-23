import DefaultTextField from "../../shared/TextFields/DefaultTextField";

function LandingBannerNavBar() {
    return;
}

function LandingBanner() {
    return (
        <div className="gen-p w-full pt-16 md:pt-24 space-y-10 md:space-y-20 bg-red-50">
            <div className=" rounded-2xl bg-blue-400 w-full gen-p">
                {/* Navbar */}
                <div className="flex w-full justify-between  ">
                    {/* Logo */}

                    {/* Navigation */}
                    <div>
                        <li className="flex ">
                            <ul>Home</ul>
                            <ul>Events</ul>
                            <ul>About</ul>
                            <ul>Contact</ul>
                        </li>
                    </div>

                    {/* login sign up buttons */}

                    <div className="flex">
                        <button>LOG IN</button>
                        <button>Sign Up</button>
                    </div>
                </div>

                {/* Content */}
                <div>
                    {/* Heading with a stupid design */}
                    <h1 className="text-center max-w-4xl">EXPERIENCE MADE FOR THOSE WHO KNOW</h1>

                    {/* sub info for landing page */}
                    <p className=" text-center">
                        Lorem ipsum dolor sit amet consectetur. Felis dictum
                        senectus dolor quis maecenas ac fringilla. Praesent
                        purus malesuada eleifend at ac ultricies dolor proin.
                        Pellentesque morbi quam platea quam. Congue.
                    </p>

                    {/* buttons */}
                    <div className="flex w-full ">

                        <button className="btn2">Find your next event</button>
                        <button className="btn1">Create an event</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingBanner;
