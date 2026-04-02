"use client";
import { Icons } from "@/assets";
import InsightsCard from "../../common/InsightsCard";
import Button from "../../ui/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const ExpertInsightsSection = ({ expertInsightSectionData }) => {
  console.log("expertInsightSectionData", expertInsightSectionData);
  // const insights = [1, 2, 3, 4, 5, 6, 7, 8];
  const insights = expertInsightSectionData?.data?.insights ?? [];

  return (
    <section className="py-16">
      <div className="container w-full h-auto flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-5 items-center justify-center max-w-[756px] w-full text-center">
          <h3 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16">
            {expertInsightSectionData?.data?.section_heading?.section_title}
            <span className="text-2xl 2xl:text-4xl text-autumn-leaves italic">
              {" "}
              {
                expertInsightSectionData?.data?.section_heading
                  ?.section_highlight_text
              }
            </span>
          </h3>

          <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8">
            {" "}
            {
              expertInsightSectionData?.data?.section_heading
                ?.section_description
            }
          </p>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={4}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
          >
            {insights.map((item, index) => (
              <SwiperSlide key={item?.id}>
                <InsightsCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex gap-3.5 items-end justify-end w-full">
          <Button
            className="prev-btn w-16 h-10 rounded-full bg-white border border-button-primary text-button-primary cursor-pointer group hover:bg-button-primary transition-all"
            size="sm"
            rounded="full"
          >
            <Icons.ArrowLeft className="w-4 h-4 text-button-primary group-hover:text-white" />
          </Button>

          <Button
            className="next-btn w-16 h-10 rounded-full bg-white border border-button-primary text-button-primary cursor-pointer group hover:bg-button-primary transition-all"
            size="sm"
            rounded="full"
          >
            <Icons.ArrowRight className="w-4 h-4 text-button-primary group-hover:text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertInsightsSection;
