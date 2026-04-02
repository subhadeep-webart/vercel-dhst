import GrowCard from "@/components/common/GrowCard";


const HelpsYouGrowSection = () => {
    const growData = [1,2,3,4];
    return (
        <section className="pb-24">
            <div className="container w-full h-auto flex flex-col gap-11 items-center">
                <div className="max-w-[984px] w-full flex flex-col text-center gap-3">
                    <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16 ">How This Program Helps
                        <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">{" "}You Grow</span></h2>
                    <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8 ">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div className="flex flex-col gap-14 2xl:gap-16 w-full">
                    {growData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-8 2xl:gap-10 ${
                                index % 2 === 0
                                    ? "flex-row"
                                    : "flex-row-reverse"
                            }`}
                        >
                            <GrowCard />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
};

export default HelpsYouGrowSection;