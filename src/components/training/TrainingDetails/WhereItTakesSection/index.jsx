
import Image from "next/image";
import styles from "../../../wrapper/GradientWrapper/gradientwrapper.module.css"
import { PUBLIC_IMAGES } from "@/assets";
import CommonButton from "@/components/common/CommonButton";
import GradientWrapper from "@/components/wrapper/GradientWrapper";

const WhereItTakesSection = () => {
    return (
        <GradientWrapper id="gradient_center" className={styles.gradient_wrapper_container_1}>
            <section className="pb-40">
                <div className="container w-full h-auto flex flex-col gap-0 items-center">
                    <div className="flex items-center gap-20 px-13">
                        <div className="relative h-[243px] aspect-[362/50] w-full max-w-[362px]">
                            <Image
                                src={PUBLIC_IMAGES.ItTakesImg}
                                alt="ItTakesImg"
                                fill
                                className="object-contain rounded-xl"
                                priority
                            />
                        </div>

                        <div className="max-w-[762px] w-full flex flex-col text-center gap-3">
                            <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16 ">Where This Program
                                <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">{" "}Takes You</span></h2>
                            <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8 ">By completing this program, you will gain the awareness, control, and confidence needed to progress to higher levels of DHST training.</p>
                        </div>
                    </div>
                    <div className="w-full rounded-xl h-auto border border-button-primary py-14 px-28 relative">
                        <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8 text-center">Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis . Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent .</p>
                        <div className="absolute left-[40px] bottom-[-30px]">
                            <CommonButton title="Explore Beginner Pack" className={"w-60"}/>
                        </div>
                    </div>
                </div>
            </section>
        </GradientWrapper>
    )
};

export default WhereItTakesSection;