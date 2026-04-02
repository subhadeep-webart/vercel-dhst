import CommonCircle from "@/components/common/CommonCircle";
import HelpCard from "@/components/common/HelpCard";


const WhatThisHelpsSection = () => {
    return (
        <section className="pb-24">
            <div className="container w-full h-auto flex flex-col gap-11 items-center">
                <div className="max-w-[984px] w-full flex flex-col text-center gap-3">
                    <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16 ">What This Treatment
                        <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">{" "} Helps With</span></h2>
                    <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8 ">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>

                <div className="w-full rounded-xl h-auto border border-button-primary p-14 relative">
                       <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 bottom-[-14px]">
                    <CommonCircle className={"w-[410px] h-[410px] 2xl:w-[480px] 2xl:h-[480px]"} innerClassName={"w-[280px] h-[280px] 2xl:w-[328px] 2xl:h-[328px] bg-vermilion"} />
                </div>
                    <div className="grid grid-cols-2 gap-14 2xl:gap-16 relative z-10">
                        <HelpCard />
                        <HelpCard />
                        <HelpCard />
                        <HelpCard />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default WhatThisHelpsSection;