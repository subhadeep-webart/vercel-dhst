import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import CommonButton from "../../common/CommonButton";

const PowerOfDhstSection = ({ section_one }) => {
  const {
    button_text,
    button_url,
    description,
    highlight_text,
    image_url_1,
    image_url_2,
    sub_description,
    title,
    treatment_info_description,
    treatment_info_title,
  } = section_one?.data?.section_one || {};
  return (
    <section className="pt-16 pb-28">
      <div className="container w-full h-auto relative">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-6 flex flex-col gap-8">
            <h1 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16">
              {title}
              <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">
                {" "}
                {highlight_text}
              </span>
            </h1>

            <div className="relative aspect-[534/400] w-full max-w-[534px]">
              <Image
                src={image_url_1 ? image_url_1 : PUBLIC_IMAGES.PowerOfDhstImg1}
                alt="PowerOfDhstImg1"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
            <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8 max-w-[390px] 2xl:max-w-[421px]">
              {description}
            </p>
          </div>
          <div className="col-span-6 flex flex-col items-end gap-7">
            <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8">
              {sub_description}
            </p>
            <CommonButton
              title={button_text}
              className={"w-60"}
              onClick={() => {
                if (button_url) {
                  window.open(button_url, "_blank");
                }
              }}
            />
            <div className="relative aspect-[324/330] w-full max-w-[324px] mt-[271px]">
              <Image
                src={image_url_2 ? image_url_2 : PUBLIC_IMAGES.PowerOfDhstImg2}
                alt="PowerOfDhstImg2"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
          </div>
        </div>

        <div className="max-w-[450px] 2xl:max-w-[574px] max-h-[449px] 2xl:max-h-[559px] w-full h-full bg-vanilla-cream rounded-xl p-12 2xl:p-14 flex flex-col gap-2 absolute left-[35%] bottom-[56px] 2xl:bottom-[-30px] -rotate-[20deg]">
          <p className="font-semibold text-lg 2xl:text-2xl leading-6 2xl:leading-8 text-secondary">
            {treatment_info_title}
          </p>
          <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8">
            {treatment_info_description}
          </p>
          {/* <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8">
            DHST integrates manual assessment, Anatomical Tracking System (ATS)
            data, and the 10-Zones Framework to accurately locate and treat
            DEMOR HotSpots. By addressing both physical and psychophysical
            dynamics, DHST restores alignment, mobility, and coordinated
            function.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default PowerOfDhstSection;
