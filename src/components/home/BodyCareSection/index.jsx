"use client"
import Image from "next/image";
import CommonButton from "../../common/CommonButton";
import { PUBLIC_IMAGES } from "@/assets";
import { useRouter } from "next/navigation";

const BodyCareSection = ({ bodyCareSectionData = {} }) => {
    console.log("Body Care section data====>", bodyCareSectionData);
    const router = useRouter();
    const { image_url = "", section_image_1 = "", section_image_2 = "", demor_hotspot_treatment_title = "", hotspot_treatment_description = "", section_button_url = "", section_button_text = "", section_heading = "", section_highlight_text = "" } = bodyCareSectionData?.data?.section_content ?? {};
    return (
        <section className="py-16">
            <div className="container relative h-auto w-full flex justify-end min-h-[669px]">
                <div className="relative z-50 pr-5">
                    <div className="flex flex-col gap-16 max-w-[671px] 2xl:max-w-[771px] ml-auto">
                        <h3 className="text-3xl 2xl:text-5xl leading-14 2xl:leading-16 text-foreground">{section_heading} <span className="text-autumn-leaves text-4xl italic">{section_highlight_text}</span></h3>
                        <div className="flex flex-col gap-3.5">
                            <h4 className="italic text-xl 2xl:text-2xl text-foreground leading-7 2xl:leading-9">{demor_hotspot_treatment_title}</h4>
                            <p className="text-base 2xl:text-lg leading-6 2xl:leading-8 text-secondary">{hotspot_treatment_description}</p>
                        </div>
                        <CommonButton title={section_button_text} onClick={() => router.push(section_button_url)} />
                    </div>
                </div>
                <div className="bg-vanilla-cream h-[260px] 2xl:h-[310px] w-full max-w-[999px] 2xl:max-w-[1131px] rounded-xl absolute top-[99px] right-[2px]">

                </div>
                <div className="absolute top-[5px] left-[20px]">
                    <div

                        className="relative aspect-[463/463] w-[400px] 2xl:w-[463px]"
                    >
                        <Image
                            src={image_url || PUBLIC_IMAGES.BodyCareImg3}
                            alt="BodyCareImg3"
                            fill
                            className="object-contain rounded-xl"
                            priority
                        />
                    </div>
                </div>
                <div className="absolute bottom-[40px] 2xl:bottom-[2px] left-[2px]">
                    <div

                        className="relative aspect-[438/274] w-[390px] 2xl:w-[438px]"
                    >
                        <Image
                            src={section_image_1 || PUBLIC_IMAGES.BodyCareImg1}
                            alt="BodyCareImg1"
                            fill
                            className="object-contain rounded-xl"
                            priority
                        />
                    </div>
                </div>

                <div className="absolute bottom-[60px] 2xl:bottom-[2px] right-[50px] 2xl:right-[70px]">
                    <div

                        className="relative aspect-[337/360] w-[300px] 2xl:w-[337px]"
                    >
                        <Image
                            src={section_image_2 || PUBLIC_IMAGES.BodyCareImg2}
                            alt="BodyCareImg2"
                            fill
                            className="object-contain rounded-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default BodyCareSection;