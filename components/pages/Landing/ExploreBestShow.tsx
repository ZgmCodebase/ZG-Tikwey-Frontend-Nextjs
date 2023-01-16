import Image from "next/image";
import { RxArrowBottomRight, RxArrowTopRight } from "react-icons/rx";

function ExploreBestShow() {
    return (
        <div className="gen-p pt-10 md:pt-32 pb-10">
            {/* Title */}
            <h1 className="text-size9Mob md:text-size9 max-w-4xl mx-auto text-center font-bold py-10">
                Explore The Best Shows
            </h1>

            {/* Animation Cards */}

            <div className=" w-full pt-10 relative flex justify-center">
                <div className="flex-1 max-w-4xl px-10 ">
                    <AnimatedEventCard />
                </div>
                <div className="md:flex flex-col justify-center items-center space-y-9 hidden">
                    {/* Up arrow */}
                    <div className="w-10 h-10 rounded-full bg-priColor opacity-60 hover:opacity-100 cursor-pointer text-whiteColor flex justify-center items-center">
                        <RxArrowTopRight />
                    </div>
                    {/* Down arrow */}
                    <div className="w-10 h-10 rounded-full bg-priColor opacity-60 hover:opacity-100 cursor-pointer text-whiteColor flex justify-center items-center">
                        <RxArrowBottomRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

function AnimatedEventCard() {
    return (
        <div className="w-full">
            {/* Image */}
            <div className="h-[40vh] bg-gray-700 rounded-xl relative overflow-hidden">
                <Image
                    src={"/images/index/explore_bestshows.png"}
                    alt="best_show"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div>
                {/* Info */}
                <div className="flex justify-between items-start pt-9">
                    {/* date */}
                    <div className="text-size10Mob md:text-size10 font-medium">
                        <p>Dec 20</p>
                        <p>8:00pm</p>
                    </div>

                    {/* Name, Location, and ticket Button */}
                    <div className=" text-size2Mob md:text-size2 space-y-2 md:space-y-5 flex flex-col items-end pl-10">
                        <p className="text-size10Mob md:text-size10">
                            Mr MONEY WITH THE VIBE
                        </p>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-end md:items-start md:justify-between md:space-x-5">
                            <AddressTag address="02, Academy London" />
                            <CategoryTag category="CONCERT" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end py-3 md:py-10">
                <button className="btn1">Buy Ticket</button>
            </div>
        </div>
    );
}

function AddressTag({ address }: { address: string }) {
    return (
        <div className="py-2 px-5 bg-secColor text-accColor rounded-xl text-center w-max ">
            {address}
        </div>
    );
}

function CategoryTag({ category }: { category: string }) {
    return (
        <div className="py-2 px-5 bg-secColor text-accColor rounded-xl text-center w-max">
            {category}
        </div>
    );
}
export default ExploreBestShow;
