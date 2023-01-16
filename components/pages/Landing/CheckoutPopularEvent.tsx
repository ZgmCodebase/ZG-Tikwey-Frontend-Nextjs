import { BsArrowUpRight, BsCalendar2WeekFill } from "react-icons/bs";
import {TfiLocationPin} from "react-icons/tfi"
import Image from "next/image";
import { useMemo, useState } from "react";

function CheckoutPopularEvent() {
    return (
        <div className="gen-p">
            {/* Title */}
            <h1 className="text-size9Mob md:text-size9 max-w-4xl mx-auto text-center font-bold pt-10 pb-3">
                Checkout Out Popular Events
            </h1>

            <div className="w-full py-5 ">
                <div className="btn1 w-max flex justify-between space-x-5 md:space-x-10 mx-auto items-center">
                    {" "}
                    <p>See All</p> <BsArrowUpRight className="text-base" />
                </div>
            </div>

            <div className="grid grid-cols-4 pb-10 overflow-x-scroll">
                <EventCard
                    image="/images/index/popular_ticket.png"
                    date={new Date().toISOString()}
                    nameOrTitle="The Caveman Live in Lagos"
                    location="29 Adigun Street, Ikeja GRA, Magodo, Lagos, Ijebu, Abuja, Kingdome"
                    price={10000}
                />
            </div>
        </div>
    );
}

import { utilFuncs } from "../../../utils/helperFunctions";
type EventCardsProps = {
    price: number;
    date: string;
    nameOrTitle: string;
    location: string;
    image?: string;
};
function EventCard({
    price,
    date,
    nameOrTitle,
    location,
    image,
}: EventCardsProps) {
    const [window, setWindow] = useState<any>(undefined);
    const dateAndTimeValue = useMemo(() => {
        const dateAndTimeFormat = new Intl.DateTimeFormat(
            utilFuncs.getLocale(window),
            {
                dateStyle: "full",
                timeStyle: "short",
            }
        ).format;

        const dateValue = new Date(date);
        return dateAndTimeFormat(dateValue);
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
    return (
        <div className="w-full rounded-2xl overflow-hidden border-[1px] border-priColor">
            {/* Image */}
            <div className="w-full h-[200px] relative">
                <Image
                    src={image || ""}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            {/* Content */}
            <div className="px-5 py-4">
                {/* Title */}
                <div className="w-full text-2xl font-medium">{nameOrTitle}</div>
                {/* Date */}
                <div className="w-full py-2 flex items-center space-x-3">
                    <div className="text-priColor text-lg">
                    <BsCalendar2WeekFill />
                    </div>
                    <p>{dateAndTimeValue}</p>{" "}
                </div>
                {/* Location */}
                <div className="w-full py-2 flex items-center space-x-3">
                    <div className="text-priColor text-xl">
                    <TfiLocationPin/>
                    </div>
                    <p className="line-clamp-2">{location}</p>
                </div>
                {/* price and link to event */}
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-2xl">{priceValue}</p>
                    <button className="btn1 rounded-full p-0 h-8 w-8 flex justify-center items-center">
                        <BsArrowUpRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPopularEvent;
