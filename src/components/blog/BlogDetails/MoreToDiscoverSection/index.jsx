"use client"
import { Icons } from "@/assets";
import 'swiper/css';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "@/components/ui/Button";
import BlogCard from "@/components/common/BlogCard";

const MoreToDiscoverSection = () => {
    const blogs = [1, 2, 3, 4, 5, 6, 7];
    return (
        <section className="pt-16 pb-32">
            <div className="container w-full h-auto flex flex-col gap-14">
                <div className="flex justify-between">
                    <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16 ">More Insights to
                        <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">{" "} Discover</span></h2>

                    <div className="flex gap-3.5">
                         <Button
                            className="prev-btn w-16 h-10 rounded-full bg-white border border-button-primary text-button-primary cursor-pointer group hover:bg-button-primary transition-all" size="sm" rounded="full"
                        >
                            <Icons.ArrowLeft className="w-4 h-4 text-button-primary group-hover:text-white" />
                        </Button>

                        <Button
                            className="next-btn w-16 h-10 rounded-full bg-white border border-button-primary text-button-primary cursor-pointer group hover:bg-button-primary transition-all" size="sm" rounded="full"
                        >
                            <Icons.ArrowRight className="w-4 h-4 text-button-primary group-hover:text-white" />
                        </Button>
                    </div>
                </div>
                 <div 
                //  className="grid grid-cols-3 gap-5 2xl:gap-7"
                 className="w-full"
                 >
                    {/* <BlogCard/>
                    <BlogCard/>
                    <BlogCard/> */}
                      <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        autoHeight={true}

                        navigation={{
                            nextEl: ".next-btn",
                            prevEl: ".prev-btn"
                        }}
                    >
                        {blogs.map((item, index) => (
                            <SwiperSlide key={index} className="pt-[100px] pb-[50px]">
                                <BlogCard/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
};

export default MoreToDiscoverSection;