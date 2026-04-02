
import { PUBLIC_IMAGES } from "@/assets";
import CommonButton from "@/components/common/CommonButton";
import TrainingTimeCard from "@/components/common/TrainingCard/TrainingTimeCard";
import Image from "next/image";

const SessionSection = () => {
    return (
        <section className="pb-40">
            <div className="container w-full h-auto flex ">

                <div className="py-28">
                    <div className="max-w-[518px] w-full h-auto flex flex-col gap-6">
                        <div className="flex flex-col gap-2.5">
                            <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16 ">Session
                                <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">{" "}Overview</span></h2>
                            <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8 ">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                        <CommonButton title="Buy Now" className={"w-60"}/>
                    </div>
                </div>


                <div className="relative left-[50px] top-[20px] h-[472px] aspect-[421/50] w-full max-w-[421px] ">
                    <Image
                        src={PUBLIC_IMAGES.SessionImg}
                        alt="SessionImg"
                        fill
                        className="object-contain rounded-xl rotate-[15deg]"
                        priority
                    />
                </div>

                <div className="py-40 ">
                    <div className="flex flex-col gap-3.5 relative z-10">
                        <TrainingTimeCard value="Length of session:" time="Based in Minutes" />
                        <TrainingTimeCard value="Sessions:" time="Three Value Packages" />
                        <TrainingTimeCard value="Days between sessions:" time="Ideally 2 to 4" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SessionSection;