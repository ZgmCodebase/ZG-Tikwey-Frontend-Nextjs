import AppIcon from "../../shared/AppIcon";

import { useMemo, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { utilFuncs } from "../../../utils/helperFunctions";
import Image from "next/image";
import { RxUpload } from "react-icons/rx";

type EventCardsProps = {
    price: number;
    date: string;
    nameOrTitle: string;
    description: string;
    image?: string;
};

function EventCards({
    price,
    date,
    nameOrTitle,
    description,
    image,
}: EventCardsProps) {
    const [window, setWindow] = useState<any>(undefined);
    const monthDayValue = useMemo(() => {
        const monthFormat = new Intl.DateTimeFormat(
            utilFuncs.getLocale(window),
            {
                month: "short",
            }
        ).format;
        const dayFormat = new Intl.DateTimeFormat(utilFuncs.getLocale(window), {
            day: "2-digit",
        }).format;
        const dateValue = new Date(date);
        return {
            month: monthFormat(dateValue).toLocaleUpperCase(),
            day: dayFormat(dateValue),
        };
    }, [date, window]);

    const priceValue = useMemo(() => {
        const priceFormatter = Intl.NumberFormat(utilFuncs.getLocale(window), {
            notation: "compact",
            currencyDisplay: "narrowSymbol",
            currency: "NGN",
            style: "currency",
        });

        return priceFormatter.format(price);
    }, [price, window]);

    useEffect(() => {}, []);

    return (
        <div className="border-[1px]  border-priColor rounded-xl w-full overflow-hidden hover:scale-105 transition-transform duration-150 ease-in">
            {/* image with buttons */}
            <div className="h-52 relative">
                <div className=" flex justify-between items-center px-3 py-2 absolute left-0 right-0 top-0 z-10">
                    <div className="text-size2Mob md:text-size2 px-3 py-1 bg-priColor text-bgColor1 font-semibold rounded-xl">
                        {priceValue}
                    </div>

                    <div className="relative shadow-sm rounded-full ">
                        <div className="h-10 w-10 rounded-full  bg-white/80 backdrop-blur-xl  opacity-50 cursor-pointer " />
                        <div className="h-10 w-10 rounded-full absolute top-0 flex justify-center items-center">
                            <RxUpload className="text-xl text-bgColor1" />
                        </div>
                    </div>
                </div>

                <div className="w-full h-full cursor-pointer block ">
                    <div className="h-full relative ">
                        <Image
                            src={image || "/images/test/event_cards2.png"}
                            alt="image"
                            layout="fill"
                            objectFit="cover"
                            height={"100%"}
                        />
                    </div>
                </div>
            </div>

            {/* event details */}
            <div className="py-5 px-8  h-52">
                {/* Info */}
                <div className="flex  items-start space-x-7 h-full text-priColor">
                    {/* Date */}
                    <div className="flex flex-col justify-start mt-12 ">
                        {/* Month */}
                        <h1 className="text-secColor text-size1 font-semibold">
                            {monthDayValue.month}
                        </h1>

                        {/* Day */}
                        <h1 className="text-size4  font-semibold">
                            {monthDayValue.day}
                        </h1>
                    </div>

                    {/* Name and location */}

                    <div className="space-y-1 flex flex-col justify-between  items-start h-full ">
                        <div className=" w-full">
                            {/* Name */}
                            <h1 className="md:text-size3 text-size3Mob font-semibold w-full line-clamp-2 md:line-clamp-2 max-w-xs">
                                {nameOrTitle}
                            </h1>

                            {/* Location */}
                            <p className="line-clamp-4 md:line-clamp-2 w-full max-w-xs">
                                {description}
                            </p>
                        </div>

                        <button className="btn ml-auto ">Buy Ticket</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function NextEventsSection() {
    return (
        <div>
            <div className="gen-p pt-20">
                <div className="w-full">
                    {/* Header and info */}
                    <div className="w-full space-y-7 flex flex-col items-center py-8 pt-16 ">
                        <h1 className="font-warrior text-size5Mob md:text-size5 text-center text-priColor">
                            Our Next Events
                        </h1>
                        <p className="text-center text-size1Mob md:text-size1 max-w-md md:max-w-3xl ">
                            Get an interesting and suitable event fot you or
                            your family, yes, we will prepare it easily, choose
                            what you like hehe
                        </p>
                    </div>

                    {/* Upcoming events */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8 pb-16 gap-6 md:gap-7">
                        {/* TODO: Remember to extract this into its own component */}

                        <EventCards
                            price={25000000}
                            nameOrTitle="Cityjs Conference 2022 -Lagos, Nigeria."
                            description="Äddress” Suspendisse id cursus lacus risus etiam arcu."
                            date={new Date().toISOString()}
                        />
                        <EventCards
                            price={1500}
                            nameOrTitle="BackPackers Lagos Night On The RoofCityjs Conference 2022 -Lagos, Nigeria."
                            description="Äddress” Suspendisse id cursus lacus risus etiam arcu."
                            date={new Date().toISOString()}
                        />
                        <EventCards
                            price={1500}
                            nameOrTitle="Getequity Startup Festival."
                            description="Äddress” Suspendisse id cursus lacus risus etiam arcu."
                            date={new Date().toISOString()}
                        />
                        <EventCards
                            price={1500}
                            nameOrTitle="EKO BLOCK PARTY"
                            description="Äddress” Suspendisse id cursus lacus risus etiam arcu."
                            date={new Date().toISOString()}
                        />
                        <EventCards
                            price={1500}
                            nameOrTitle="IBADAN MASK PARTY"
                            description="Äddress”a fas asdf sdfsdaf Suspendisse id cursus lacus risus etiam arcu."
                            date={new Date().toISOString()}
                        />
                        <EventCards
                            price={1500}
                            nameOrTitle="OXLADE X BELLA SHMURDA RUGGEDFEST"
                            description="Äddress” Suspendisse id cursus lsfdsfacus risus etiamsfasdfe arcufdfsd."
                            date={new Date().toISOString()}
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center pb-20">
                <div className="h-2 w-full bg-gray-400" />
                <button className="bg-gray-400 text-priColor w-max whitespace-nowrap py-2 px-3 rounded-xl font-semibold">
                    Load More Events
                </button>
                <div className="h-2 w-full bg-gray-400" />
            </div>
        </div>
    );
}

export default NextEventsSection;
