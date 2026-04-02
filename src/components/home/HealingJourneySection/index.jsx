import Image from "next/image";
import CommonButton from "../../common/CommonButton";
import { PUBLIC_IMAGES } from "@/assets";
import CommonCircle from "../../common/CommonCircle";

const HealingJourneySection = ({ healingJourneySectionData = {} }) => {
    const { section_details = {} } = healingJourneySectionData?.data ?? {}
    const {title="",highlight_text="",image_url="",description="",button_text="",button_url=""}=section_details;
    return (
        <section className=" pb-20">
            <div className="container w-full h-auto flex gap-12 relative ">
                <div className="flex flex-col gap-20">
                    <h3 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16">
                        {title}
                        <span className="text-2xl 2xl:text-4xl text-autumn-leaves italic">
                            {" "} {highlight_text}
                        </span>
                    </h3>

                    <CommonButton title={button_text} className="w-56" />

                </div>

                <div className="relative aspect-[422/276] w-full max-w-[422px] mb-[70px]">
                    <Image
                        src={image_url || PUBLIC_IMAGES.HeadingImg}
                        alt="HeadingImg"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <div className="flex flex-col items-end justify-end text-end gap-5 ">
                    <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8">
                        {/* Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquen */}
                        {description}
                    </p>
                    {/* <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8">
                        Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vtorquen
                    </p> */}
                </div>

                <div className="absolute left-[30%] bottom-[-180px] z-[-10]">
                    <CommonCircle innerClassName="bg-peach" />
                </div>
            </div>
        </section>
    )
};

export default HealingJourneySection;