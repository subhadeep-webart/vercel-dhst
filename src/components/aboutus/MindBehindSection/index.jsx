"use client";
import { Icons } from "@/assets";
import TheMindsCard from "../../common/TheMindsCard";
import Button from "../../ui/Button";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const MindBehindSection = ({ mind_behind_the_therapy, practitioner_says }) => {
  const { section_description, section_highlight_text, section_title } =
    mind_behind_the_therapy?.data?.section_heading || {};
  //   const minds = [1, 2, 3, 4, 5, 6, 7];
  const minds = practitioner_says?.data?.practitioner_says ?? [];
  return (
    <section className="py-16">
      <div className="container w-full h-auto flex flex-col gap-28 items-center">
        <div className="max-w-[871px] w-full flex flex-col text-center gap-3">
          <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16 ">
            {section_title}
            <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">
              {" "}
              {section_highlight_text}
            </span>
          </h2>
          <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8 ">
            {section_description}
          </p>
        </div>

        <div
          // className="grid grid-cols-3 gap-5 2xl:gap-7"
          className="w-full"
        >
          {/* <TheMindsCard />
                        <TheMindsCard />
                        <TheMindsCard /> */}

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            autoHeight={true}
            navigation={{
              nextEl: ".mind-next",
              prevEl: ".mind-prev",
            }}
          >
            {minds.map((item) => (
              <SwiperSlide key={item?.id} className="pt-[236px]">
                <TheMindsCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex gap-3.5 items-center justify-center w-full mt-13">
            <Button
              className="mind-prev w-16 h-10 rounded-full bg-white border border-button-primary text-button-primary cursor-pointer group hover:bg-button-primary transition-all"
              size="sm"
              rounded="full"
            >
              <Icons.ArrowLeft className="w-4 h-4 text-button-primary group-hover:text-white" />
            </Button>

            <Button
              className="mind-next w-16 h-10 rounded-full bg-white border border-button-primary text-button-primary cursor-pointer group hover:bg-button-primary transition-all"
              size="sm"
              rounded="full"
            >
              <Icons.ArrowRight className="w-4 h-4 text-button-primary group-hover:text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindBehindSection;
