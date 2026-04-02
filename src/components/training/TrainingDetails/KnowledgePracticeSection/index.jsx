
import Image from "next/image";
import styles from "./knowledgepractice.module.css"
import { PUBLIC_IMAGES } from "@/assets";
import KnowledgePoints from "@/components/common/KnowledgePoints";
const KnowledgePracticeSection = () => {
    return (
        <section className="pb-20">
            <div className="container w-full h-auto flex flex-col gap-11 items-center">
                <div className="max-w-[984px] w-full flex flex-col text-center gap-3">
                    <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16 ">Where Knowledge Becomes
                        <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">{" "}Practice</span></h2>
                    <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8 ">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div className={` flex`}>
                    <div className="py-13">
                    <div className="relative  aspect-[421/551] w-[390px] 2xl:w-[421px]">
                        <Image
                            src={PUBLIC_IMAGES.KnowledgeImg}
                            alt="KnowledgeImg"
                            fill
                            className="object-contain rounded-xl"
                            priority
                        />
                    </div>
                    </div>
                    <div className={`${styles.knowledge_points_wrapper}`}>
                        <div className="py-20">
                            <div className="flex flex-col gap-12 2xl:gap-14 items-start relative z-10" >
                                <KnowledgePoints value="How to identify tension and imbalance" />
                                <KnowledgePoints value="Foundational corrective exercises" />
                                <KnowledgePoints value="Basic DHST awareness techniques" />
                                <KnowledgePoints value="Understanding body alignment and movement " />
                                <KnowledgePoints value="How to identify tension and imbalance" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default KnowledgePracticeSection;