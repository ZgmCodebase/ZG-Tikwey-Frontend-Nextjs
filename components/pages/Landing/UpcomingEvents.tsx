import Image from "next/image";
import {RxArrowBottomRight} from "react-icons/rx"

function UpcomingEvents() {
    return (
        <div className="gen-p w-full my-10 md:my-20">
            {/* title */}
            <h1 className="text-size9Mob md:text-size9 max-w-4xl mx-auto text-center font-bold py-10">Categories for Upcoming Events</h1>

            {/* Filters */}

            {/* Categories */}

            <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-10 ">
            <EventCategoryCard category="House Party" src="/images/index/event_category1.png"/>
  
            <EventCategoryCard category="House Party" src="/images/index/event_category1.png"/>
            <EventCategoryCard category="House Party" src="/images/index/event_category1.png"/>
            <EventCategoryCard category="House Party" src="/images/index/event_category1.png"/>
            <EventCategoryCard category="House Party" src="/images/index/event_category1.png"/>
            <EventCategoryCard category="House Party" src="/images/index/event_category1.png"/>
            <EventCategoryCard category="House Party" src="/images/index/event_category1.png"/>
            <EventCategoryCard category="House Party" src="/images/index/event_category1.png"/>
            </div>

        </div>
    );
}

function EventCategoryCard ({category, src}: {category:string, src:string}) {
    return <div className="w-full h-[350px] relative rounded-3xl overflow-hidden group cursor-pointer">
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-50 z-10"></div>
        <Image src={src} alt={`${category} category`} layout="fill" objectFit="cover"/>

        <div className="absolute top-0 right-0 left-0 bottom-0 flex  z-20 justify-end items-end space-y-5 p-10 ">

        <h1 className="text-whiteColor absolute bottom-20 left-10 text-xl font-semibold">{category}</h1>

        <div className="w-12 h-12 rounded-full group-hover:bg-priColor duration-300 ease-in border-whiteColor group-hover:border-transparent border-[1px] flex justify-center items-center">
            <RxArrowBottomRight className="text-2xl text-whiteColor"/>
        </div>
        </div>
    </div>
}

export default UpcomingEvents;