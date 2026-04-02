import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import CommonCircle from "../../common/CommonCircle";
import CommonButton from "../../common/CommonButton";
import GradientWrapper from "../../wrapper/GradientWrapper";
import styles from "../../wrapper/GradientWrapper/gradientwrapper.module.css";

const UnderstandingRoleSection = ({ dhst_specalist_section }) => {
  const {
    button_text,
    button_url,
    left_image_url,
    left_section_text,
    right_image_url,
    right_section_text,
    section_description,
    section_heading,
    section_highlight_text,
  } = dhst_specalist_section?.data?.section_details || {};

  return (
    <GradientWrapper
      id="gradient_center"
      className={styles.gradient_wrapper_container_1}
    >
      <section className="py-16">
        <div className="container w-full h-auto flex flex-col gap-12 items-center">
          <div className="max-w-[937px] w-full flex flex-col text-center gap-3">
            <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16 ">
              {section_heading}
              <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">
                {" "}
                {section_highlight_text}
              </span>
            </h2>
            <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8 ">
              {section_description}
            </p>
          </div>

          <div className="relative w-full py-24">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
              <CommonCircle
                className={"w-[450px] h-[450px] 2xl:w-[480px] 2xl:h-[480px]"}
                innerClassName={
                  "w-[290px] h-[290px] 2xl:w-[270px] 2xl:h-[270px] bg-peach"
                }
              />
            </div>

            <div className="flex justify-between w-full relative z-10">
              <div className="flex flex-col gap-8">
                <div className="relative h-[201px] aspect-[534/50] w-full max-w-[534px]">
                  <Image
                    src={
                      left_image_url ? left_image_url : PUBLIC_IMAGES.RoleImg1
                    }
                    alt="RoleImg1"
                    fill
                    className="object-contain rounded-xl"
                    priority
                  />
                </div>

                <p className="text-secondary text-sm 2xl:text-base leading-5 2xl:leading-7 max-w-[300px] 2xl:max-w-[345px] w-full">
                  {left_section_text}
                </p>
              </div>

              <div className="flex flex-col gap-8 pt-28">
                <div className="relative h-[201px] aspect-[421/50] w-full max-w-[421px]">
                  <Image
                    src={
                      right_image_url ? right_image_url : PUBLIC_IMAGES.RoleImg1
                    }
                    alt="RoleImg1"
                    fill
                    className="object-contain rounded-xl"
                    priority
                  />
                </div>

                <p className="text-secondary text-sm 2xl:text-base leading-5 2xl:leading-7 max-w-[390px] 2xl:max-w-[421px] w-full">
                  {right_section_text}
                </p>
              </div>
            </div>

            <div className="flex justify-center relative z-10 mb-[26px] 2xl:mb-[40px] mr-[20px] 2xl:mr-[50px]">
              <CommonButton
                title={button_text}
                className={"w-60"}
                onClick={() => {
                  if (button_url) {
                    window.open(button_url, "_blank");
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </GradientWrapper>
  );
};

export default UnderstandingRoleSection;
