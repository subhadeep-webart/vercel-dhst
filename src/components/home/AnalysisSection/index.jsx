import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import CommonCircle from "../../common/CommonCircle";
import GradientWrapper from "../../wrapper/GradientWrapper";
import styles from "../../wrapper/GradientWrapper/gradientwrapper.module.css";

const AnalysisSection = ({ analysisSectionData = {} }) => {
  console.log("Analysis session data=====>", analysisSectionData);
  const {
    section_title = "",
    section_highlight_text = "",
    section_description = "",
  } = analysisSectionData?.data?.section_heading ?? {};
  return (
    <GradientWrapper
      id="gradient_center_1_after"
      className={styles.gradient_wrapper_container_1_after}
    >
      <section className="py-16">
        <div className="container bg-soft-ivory w-full h-auto relative rounded-xl">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-5 pt-16 pb-12 pl-16">
              <div className="relative aspect-[455/625] w-[400px] 2xl:w-[455px]">
                <Image
                  src={PUBLIC_IMAGES.HumanSkeleton}
                  alt="HumanSkeleton"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="col-span-7 pt-20 pr-32">
              <div className="flex flex-col gap-5">
                <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16">
                  {section_title}{" "}
                  <span className="text-autumn-leaves text-4xl italic">
                    {" "}
                    {section_highlight_text}
                  </span>
                </h2>
                <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8">
                  {section_description}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute right-[37px] bottom-[2px]">
            <CommonCircle />
          </div>
        </div>
      </section>
    </GradientWrapper>
  );
};

export default AnalysisSection;
