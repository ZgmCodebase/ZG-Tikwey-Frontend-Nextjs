import Image from "next/image";
import AppIcon from "../../shared/AppIcon";

function MostPopularTicket() {
    const hostName = "Asake jrteljlk";
    return (
        <div className="gen-p pt-16 pb-5">
            <div className="w-full bg-gradient-to-tr border-2 border-priColor from-gradientStartColor via-bgColor2 to-priColor rounded-2xl py-5 md:py-10 ">
                <div className="w-full md:my-10 my-4 px-5">
                    <h1 className="md:text-size2 text-size1Mob mx-auto py-1 px-2 bg-accentColor text-bgColor1 md:w-max md:my-10 my-5 rounded-md w-max">
                        #1 POPULAR TICKETS TO BUY
                    </h1>

                    <h1 className="md:text-size5 text-size5Mob max-w-lg text-center mx-auto font-semibold ">
                        MMWV The 1st Single Album Live Concert
                    </h1>
                </div>

                <div className="bg-white h-[40vh] md:h-[60vh] relative">
                    <Image
                        src="/images/index/popular_ticket.png"
                        alt="popular_ticket"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>

                <div className="mt-10 mb-3 max-w-3xl mx-auto space-y-10 md:space-y-20 ">
                    <div className=" gen-p flex flex-col md:flex-row justify-between space-x-4 w-full items-center  space-y-2 md:space-y-0">
                        <div className="py-1 px-2 bg-white rounded-md max-w-sm  flex space-x-2 items-center w-min">
                            <AppIcon src="/icons/profile.svg" alt="host_icon" />
                            <h1 className="whitespace-nowrap">
                                {hostName.length <= 20
                                    ? hostName
                                    : hostName.slice(0, 21).concat("...")}
                            </h1>
                        </div>

                        <div className="py-1 px-2 bg-white rounded-md flex flex-row space-x-2 items-center max-w-[250px] md:max-w-sm  ">
                            <AppIcon
                                src="/icons/locationMark.svg"
                                alt="address_icon"
                            />

                            <h1 className=" truncate">
                                02, Brexton Londons adfa ads asdf saf asd{" "}
                            </h1>
                        </div>

                        <div className="py-1 px-2 bg-white rounded-md whitespace-nowrap h-min flex space-x-2 items-center">
                            <AppIcon
                                src="/icons/calender.svg"
                                alt="date_icon"
                            />
                            <h1 className="text-xs">Sun, Dec 12th, 11pm</h1>
                        </div>
                    </div>

                    <div className=" gen-p flex justify-between items-center space-x-5 sm:space-x-20">
                        <h1 className="text-size2Mob text-bgColor1 md:text-size2 max-w-md">
                            Get IVE ticket in Mr Money With the Vibe, we give
                            you 10% discount{" "}
                        </h1>
                        <button className="btn md:text-size4 md:py-4 md:px-5">
                            Buy Ticket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MostPopularTicket;
