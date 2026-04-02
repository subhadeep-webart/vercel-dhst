import Image from "next/image";
import CommonButton from "../../common/CommonButton";
import { PUBLIC_IMAGES } from "@/assets";

const ExperienceSection = ({ dhst_theraphy_hotspot }) => {
  const {
    button_text,
    button_url,
    description,
    base_image_url,
    secondary_image_url,
    section_heading,
    section_highlight_text,
  } = dhst_theraphy_hotspot?.data?.section_details || {};
  return (
    <section className="py-16">
      <div className="container w-full h-auto">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-6 pt-32">
            <div className="flex flex-col gap-7">
              <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16">
                {section_heading}
                <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">
                  {" "}
                  {section_highlight_text}
                </span>
              </h2>
              <div className="w-full h-auto bg-vanilla-cream p-10 2xl:p-12 flex flex-col gap-5">
                <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8">
                  {description}
                </p>

                <CommonButton
                  title={button_text}
                  className={"w-56"}
                  onClick={() => {
                    if (button_url) {
                      window.open(button_url, "_blank");
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="relative aspect-[646/478] w-full max-w-[646px]">
              <Image
                src={
                  base_image_url ? base_image_url : PUBLIC_IMAGES.ExperienceImg1
                }
                alt="ExperienceImg1"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="relative  aspect-[646/402] w-full max-w-[646px]">
              <Image
                src={
                  secondary_image_url
                    ? secondary_image_url
                    : PUBLIC_IMAGES.ExperienceImg2
                }
                alt="ExperienceImg2"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
