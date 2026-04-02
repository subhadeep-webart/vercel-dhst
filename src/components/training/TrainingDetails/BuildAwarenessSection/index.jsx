
import Image from "next/image";
import styles from "../../../wrapper/GradientWrapper/gradientwrapper.module.css"
import { PUBLIC_IMAGES } from "@/assets";
import GradientWrapper from "@/components/wrapper/GradientWrapper";
import CommonCircle from "@/components/common/CommonCircle";
import CommonButton from "@/components/common/CommonButton";

const BuildAwarenesssection = () => {
    return (
        <GradientWrapper id="gradient_center_2" className={styles.gradient_wrapper_container_2}>
            <section className="pb-20">
                <div className="container w-full h-auto flex flex-col gap-11 items-center">
                    <div className="max-w-[984px] w-full flex flex-col text-center gap-3">
                        <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16 ">Build Awareness And Start
                            <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">{" "}Your Transformation.</span></h2>
                        <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8 ">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                    <div className="relative w-full">
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                            <CommonCircle className={"w-[480px] h-[480px] 2xl:w-[480px] 2xl:h-[480px]"} innerClassName={"w-[270px] h-[270px] 2xl:w-[270px] 2xl:h-[270px]"} />
                        </div>

                        <div className="px-20 relative z-10">
                            <div className="w-full max-w-[1174px] h-auto rounded-xl px-32 py-13  bg-peach">
                                <p className="text-base 2xl:text-xl leading-6 2xl:leading-8 text-secondary text-center">You will learn how to identify imbalance, improve posture, and develop control through guided system-based training. The focus is on building strong foundations that support long-term physical and mental well-being.</p>
                            </div>
                        </div>

                        <div className="flex justify-between w-full relative z-20">

                            <div className="mt-[-45px]">
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

                            <div className="mt-[-35px]">
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

                        <div className="flex justify-center relative z-20 mb-[22px] 2xl:mb-[40px] mr-[50px]">
                            <CommonButton title="Explore Beginner Pack" />
                        </div>
                    </div>
                </div>
            </section>
        </GradientWrapper>
    )
};

export default BuildAwarenesssection;