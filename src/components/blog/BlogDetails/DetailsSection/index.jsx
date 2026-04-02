import { Icons, PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import styles from "../../../wrapper/GradientWrapper/gradientwrapper.module.css"
import GradientWrapper from "@/components/wrapper/GradientWrapper";
import ShareButton from "./ShareButton";


const DetailsSection = () => {
    return (
        <GradientWrapper id="gradient_center_2" className={styles.gradient_wrapper_container_2}>
            <section className="py-20">
                <div className="container w-full h-auto flex flex-col gap-4 2xl:gap-6">
                    <h3 className="text-2xl 2xl:text-4xl leading-11 2xl:leading-13 text-foreground text-center">Understanding Body Imbalance: Why Treating the Root Cause Matters</h3>
                    <p className="text-base 2xl:text-lg leading-7 2xl:leading-9 text-secondary text-center">Horem ipsum dolor sit amet, consecteturet condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus endum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                    </p>
                    <div

                        className="relative h-[461px] w-full"
                    >
                        <Image
                            src={PUBLIC_IMAGES.BlogDetailImg1}
                            alt="BlogDetailImg1"
                            fill
                            className="object-contain rounded-xl"
                            priority
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-base 2xl:text-lg leading-7 2xl:leading-9 text-secondary flex items-center gap-2">  <Icons.CalendarClock color="#F04A24" size={35} /> {" "} 24 april 2025, at 10:25AM</span>
                        <ShareButton />
                    </div>

                    <h3 className="text-2xl 2xl:text-4xl leading-11 2xl:leading-13 text-foreground">The Body Works as an Integrated System</h3>
                    <p className="text-base 2xl:text-lg leading-7 2xl:leading-9 text-secondary ">One of the simplest and most effective ways to prevent illness is proper hand hygiene. Viruses spread easily through contact with contaminated surfaces, followed by touching your face, nose, or mouth.</p>
                    <div className="text-base 2xl:text-lg leading-7 2xl:leading-9 text-secondary">
                        <p>Wash your hands:</p>

                        <ul className="list-disc pl-8">
                            <li>After being in public places</li>
                            <li>Before eating or preparing food</li>
                            <li>After coughing or sneezing</li>
                            <li>After touching shared surfaces</li>
                        </ul>

                        <p>
                            Use soap and water for at least 20 seconds. If handwashing isn’t possible,
                            use an alcohol-based hand sanitizer with at least 60% alcohol.
                        </p>
                    </div>

                    <h3 className="text-2xl 2xl:text-4xl leading-11 2xl:leading-13 text-foreground">Why Symptom Based Treatment Isn’t Enough</h3>
                    <p className="text-base 2xl:text-lg leading-7 2xl:leading-9 text-secondary ">Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                    </p>

                    <div className="flex gap-7 justify-between">
                        <div

                            className="relative h-[469px] w-full aspect-[534/50] max-w-[534px]"
                        >
                            <Image
                                src={PUBLIC_IMAGES.BlogDetailImg2}
                                alt="BlogDetailImg2"
                                fill
                                className="object-contain rounded-xl"
                                priority
                            />
                        </div>
                        <div

                            className="relative h-[469px] w-full aspect-[534/50] max-w-[534px]"
                        >
                            <Image
                                src={PUBLIC_IMAGES.BlogDetailImg3}
                                alt="BlogDetailImg3"
                                fill
                                className="object-contain rounded-xl"
                                priority
                            />
                        </div>
                    </div>

                    <h3 className="text-2xl 2xl:text-4xl leading-11 2xl:leading-13 text-foreground">Benefits of Root Cause Treatment</h3>
                    <p className="text-base 2xl:text-lg leading-7 2xl:leading-9 text-secondary ">Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,</p>
                    <p className="text-base 2xl:text-lg leading-7 2xl:leading-9 text-secondary ">One of the simplest and most effective ways to prevent illness is proper hand hygiene. Viruses spread easily through contact with contaminated surfaces, followed by touching your face, nose, or mouth.</p>
                    <div className="text-base 2xl:text-lg leading-7 2xl:leading-9 text-secondary">
                        <p>Wash your hands:</p>

                        <ul className="list-disc pl-8">
                            <li>After being in public places</li>
                            <li>Before eating or preparing food</li>
                            <li>After coughing or sneezing</li>
                            <li>After touching shared surfaces</li>
                        </ul>

                        <p>
                            Use soap and water for at least 20 seconds. If handwashing isn’t possible,
                            use an alcohol-based hand sanitizer with at least 60% alcohol.
                        </p>
                    </div>

                    <h3 className="text-2xl 2xl:text-4xl leading-11 2xl:leading-13 text-foreground">Moving Toward Long Term Wellness</h3>
                    <p className="text-base 2xl:text-lg leading-7 2xl:leading-9 text-secondary ">Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                    </p>
                </div>
            </section>
        </GradientWrapper>
    )
};

export default DetailsSection;