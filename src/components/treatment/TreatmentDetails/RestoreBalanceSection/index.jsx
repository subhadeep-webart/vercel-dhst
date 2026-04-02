
import Image from "next/image";
import styles from "../../../wrapper/GradientWrapper/gradientwrapper.module.css"
import { PUBLIC_IMAGES } from "@/assets";
import CommonButton from "@/components/common/CommonButton";
import GradientWrapper from "@/components/wrapper/GradientWrapper";

const RestoreBalanceSection = () => {
    return (
        <GradientWrapper id="gradient_center_2" className={styles.gradient_wrapper_container_2}>
            <section className="pb-28">
                <div className="container w-full h-auto flex flex-col gap-11 items-center">
                    <div className="max-w-[1215px] w-full flex flex-col text-center gap-3">
                        <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16 ">Restore Balance, Relieve Dysfunction
                            <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">{" "} Optimize Movement.</span></h2>
                        <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8 ">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>

                    <div className="relative w-full">

                        <div className="px-20 relative z-10 flex flex-col items-center justify-center gap-12">
                            <div className="w-full max-w-[999px] 2xl:max-w-[1174px] h-auto rounded-xl px-32 py-13  bg-peach flex flex-col items-center gap-6">
                                <p className="text-base 2xl:text-xl leading-6 2xl:leading-8 text-secondary text-center">The DEMOR HotSpot Treatment System is a precision-based therapeutic approach designed to identify and correct the exact points of dysfunction affecting overall body performance. Rather than focusing only on symptoms, this treatment addresses the root cause of imbalance to restore natural alignment and movement efficiency.</p>
                                <p className="text-base 2xl:text-xl leading-6 2xl:leading-8 text-secondary text-center max-w-[550px] 2xl:max-w-[660px]">Using the Anatomical Tracking System (ATS) and structured zone analysis, specialists assess how different parts of the body interact. Targeted corrections are then applied to release restrictions, improve mobility, and enhance system-wide coordination.</p>
                            </div>

                            <CommonButton title="Buy Now" className={"w-60"}/>
                        </div>

                        <div className="flex justify-between w-full relative z-20">

                            <div className="mt-[-306px]">
                                <div className="relative h-[351px] aspect-[262/50] w-full max-w-[262px]">
                                    <Image
                                        src={PUBLIC_IMAGES.AwarenessImg1}
                                        alt="AwarenessImg1"
                                        fill
                                        className="object-contain rounded-xl"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="mt-[-296px]">
                                <div className="relative h-[250px] aspect-[262/50] w-full max-w-[262px]">
                                    <Image
                                        src={PUBLIC_IMAGES.AwarenessImg2}
                                        alt="AwarenessImg2"
                                        fill
                                        className="object-contain rounded-xl"
                                        priority
                                    />
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </section>
        </GradientWrapper>
    )
};

export default RestoreBalanceSection;