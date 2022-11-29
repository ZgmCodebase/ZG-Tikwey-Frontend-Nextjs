import DefaultTextField from "../../shared/TextFields/DefaultTextField";
function LandingBanner() {
    return (
        <div className="gen-p w-full pt-16 md:pt-24 space-y-10 md:space-y-20">
            <div className="w-full space-y-5">
                <div className="font-warrior text-size7Mob md:text-size7 text-center max-w-xs md:max-w-xl mx-auto">
                    Go Where the Good Vibes Are
                </div>

                <div className="text-center mx-auto max-w-3xl font-semibold">
                    Discover great nights around you. Zero hidden fees, price
                    match guarantee, group discounts and more. Because it should
                    be this easy{" "}
                </div>
            </div>

            <div className="space-y-5">
                <h1 className="text-size2Mob md:text-size2 font-semibold ">
                    Find your next event
                </h1>

                <div className="md:border-textColor md:border-[1px] flex flex-col md:grid md:grid-cols-11 rounded-3xl w-full  md:overflow-hidden space-y-5 md:space-y-0">
                    <div className=" md:py-7 py-5 px-4 flex justify-center w-full md:col-span-4 border-[1px] md:border-0 md:border-r-[1px]  border-textColor rounded-lg md:rounded-none">
                        <DefaultTextField placeholder="What are you looking for?" />
                    </div>
                    {/* <div className="flex w-1 bg-textColor" /> */}
                    <div className="md:py-7 py-5 px-4  flex justify-center w-full md:col-span-2 border-[1px]  md:border-0 md:border-r-[1px] border-textColor rounded-lg md:rounded-none">
                        <DefaultTextField placeholder="Select Category" />
                    </div>
                    {/* <div className="flex w-1 bg-textColor"/> */}
                    <div className="md:py-7 py-5 px-4  flex justify-center w-full md:col-span-2 border-[1px]  md:border-0 md:border-r-[1px] border-textColor rounded-lg md:rounded-none">
                        <DefaultTextField placeholder="State, City..." />
                    </div>

                    <button className="w-full md:py-7 py-5 px-4 bg-priColor col-span-3 rounded-lg md:rounded-none font-semibold">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LandingBanner;
