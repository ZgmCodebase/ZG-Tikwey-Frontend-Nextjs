import { BsArrowUpRight, BsCalendar2WeekFill } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";

function CheckoutPopularEvent() {
    return (
        <div className="gen-p">
            {/* Title */}
            <h1 className="text-size9Mob md:text-size9 max-w-4xl mx-auto text-center font-bold pt-10 pb-3">
                Checkout Out Popular Events
            </h1>

            <div className="w-full py-5 pb-10 ">
                <div className="btn1 w-max flex justify-between space-x-5 md:space-x-10 mx-auto items-center cursor-pointer hover:bg-whiteColor hover:text-priColor ease-in duration-75">
                    {" "}
                    <p>See All</p> <BsArrowUpRight className="text-base" />
                </div>
            </div>

            <div className="w-full flex md:grid md:grid-cols-4 pb-10 overflow-x-scroll md:gap-x-10 space-x-7 md:space-x-0">
                <EventCard
                    image="/images/index/popular_ticket.png"
                    date={new Date().toISOString()}
                    nameOrTitle="The Caveman Live in Lagos"
                    location="29 Adigun Street, Ikeja GRA, Magodo, Lagos, Ijebu, Abuja, Kingdome"
                    price={10000}
                />
                <EventCard
                    image="/images/index/popular_ticket.png"
                    date={new Date().toISOString()}
                    nameOrTitle="The Caveman Live in Lagos"
                    location="29 Adigun Street, Ikeja GRA, Magodo, Lagos, Ijebu, Abuja, Kingdome"
                    price={10000}
                />
                <EventCard
                    image="/images/index/popular_ticket.png"
                    date={new Date().toISOString()}
                    nameOrTitle="The Caveman Live in Lagos"
                    location="29 Adigun Street, Ikeja GRA, Magodo, Lagos, Ijebu, Abuja, Kingdome"
                    price={10000}
                />
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
    const [clientWindow, setWindow] = useState<any>(undefined);
    const [isMounted, setMounted] = useState(false);
    const dateAndTimeValue = useMemo(() => {
        const dateAndTimeFormat = new Intl.DateTimeFormat(
            utilFuncs.getLocale(clientWindow),
            {
                dateStyle: "full",
                timeStyle: "short",
            }
        ).format;

        const dateValue = new Date(date);
        return dateAndTimeFormat(dateValue);
    }, [date, clientWindow]);
    const priceValue = useMemo(() => {
        const priceFormatter = Intl.NumberFormat(
            utilFuncs.getLocale(clientWindow),
            {
                notation: "compact",
                currencyDisplay: "narrowSymbol",
                currency: "NGN",
                style: "currency",
            }
        );

        return priceFormatter.format(price);
    }, [price, clientWindow]);

    useEffect(() => {
        setWindow(window);
        setMounted(true);
    }, []);

    return (
        <div className="min-w-[300px] md:w-full rounded-2xl overflow-hidden border-[1px] border-priColor">
            {/* Image */}
            <div className="w-full h-[200px] relative rounded-2xl overflow-hidden">
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
                    <p>{isMounted && dateAndTimeValue}</p>{" "}
                </div>
                {/* Location */}
                <div className="w-full py-2 flex items-center space-x-3">
                    <div className="text-priColor text-xl">
                        <TfiLocationPin />
                    </div>
                    <p className="line-clamp-2">{location}</p>
                </div>
                {/* price and link to event */}
                <div className="flex justify-between items-center pt-5">
                    <p className="font-semibold text-2xl">
                        {isMounted && priceValue}
                    </p>
                    <button className="btn1 rounded-full p-0 h-8 w-8 flex justify-center items-center">
                        <BsArrowUpRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPopularEvent;
