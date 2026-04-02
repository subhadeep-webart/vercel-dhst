"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../ui/Button";
import Image from "next/image";
import GradientWrapper from "../../wrapper/GradientWrapper";
import styles from "../../wrapper/GradientWrapper/gradientwrapper.module.css";
import { Icons, PUBLIC_IMAGES } from "@/assets";

const testimonials = [
  {
    name: "Sofia L., Marketing Lead",
    text: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos h.",
    image: PUBLIC_IMAGES.Face,
  },
  {
    name: "John D., Product Manager",
    text: "Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur Nunc vulputate libero et velit interdum.",
    image: PUBLIC_IMAGES.Face2,
  },
  {
    name: "Alice K., UX Designer",
    text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image: PUBLIC_IMAGES.Face3,
  },
];

const TransformationSection = ({ testimonialData = {} }) => {
  const { section_heading = {}, testimonials = [] } =
    testimonialData?.data ?? {};
  const {
    section_title = "",
    section_highlight_text = "",
    section_description = "",
  } = section_heading || {};
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // const handleNext = () => {
  //     setDirection(1);
  //     setCurrentIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
  // };

  // const handlePrev = () => {
  //     setDirection(-1);
  //     setCurrentIndex((prev) => Math.max(prev - 1, 0));
  // };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const orderedTestimonials = [
    ...testimonials.slice(currentIndex),
    ...testimonials.slice(0, currentIndex),
  ];

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      y: dir > 0 ? 60 : -60,
      scale: 0.98,
    }),
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: (dir) => ({
      opacity: 0,
      y: dir > 0 ? -60 : 60,
      scale: 0.98,
    }),
  };

  return (
    <section className="py-16 bg-vanilla-cream">
      <div className="container h-auto w-full">
        <GradientWrapper
          id="gradient_center"
          className={styles.gradient_wrapper_container_1}
        >
          <div className="flex justify-between mb-6">
            <div className="flex flex-col max-w-[756px] w-full gap-3 2xl:gap-5">
              <h3 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16">
                {section_title}{" "}
                <span className="text-2xl 2xl:text-4xl text-autumn-leaves italic">
                  {section_highlight_text}
                </span>
              </h3>
              <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8">
                {section_description}
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              <Button
                onClick={handlePrev}
                className="h-16 w-10 min-w-10 bg-white border border-button-primary text-button-primary cursor-pointer group hover:bg-button-primary transition-all"
                size="sm"
                rounded="full"
              >
                <Icons.ArrowUp className="w-4 h-4 text-button-primary group-hover:text-white" />
              </Button>
              <Button
                onClick={handleNext}
                className="h-16 w-10 min-w-10 bg-white border border-button-primary text-button-primary cursor-pointer group hover:bg-button-primary transition-all"
                size="sm"
                rounded="full"
              >
                <Icons.ArrowDown className="w-4 h-4 text-button-primary group-hover:text-white" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-7 relative">
            {/* {testimonials.map((item, index) => { */}
            {orderedTestimonials.map((testimonial, index) => {
              // const isActive = index === currentIndex;
              const isActive = index === 0;

              return (
                <div key={index} className="flex flex-col gap-2">
                  <AnimatePresence mode="wait" custom={direction}>
                    {isActive ? (
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        variants={variants}
                        transition={{
                          duration: 0.45,
                          ease: "easeInOut",
                        }}
                        className="flex gap-7 items-center"
                      >
                        {/* <div className="relative aspect-[32/50] w-full max-w-32 rounded-full"> */}
                        <div className="relative aspect-square w-32 rounded-full overflow-hidden shrink-0">
                          <Image
                            // src={testimonials[currentIndex].image}
                            src={testimonial.image_url}
                            alt="Face"
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h5 className="text-lg 2xl:text-2xl leading-6 2xl:leading-8 text-foreground">
                            <span className="text-button-primary">—</span>
                            {/* {testimonials[currentIndex].name} */}
                            {testimonial.name}, {testimonial.position}
                          </h5>
                          <p className="text-sm 2xl:text-base leading-5 2xl:leading-7 text-secondary">
                            {/* {testimonials[currentIndex].text} */}
                            {testimonial.feedback}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div className="flex gap-7 pointer-events-none h-20 overflow-hidden">
                        <div className="flex flex-col gap-1">
                          <h5 className="text-base 2xl:text-lg leasing-4 2xl:leading-6 text-foreground">
                            <span className="text-button-primary">—</span>{" "}
                            {testimonial.name}
                          </h5>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className={`border border-dashed mt-4 ${
                      isActive ? "border-button-primary" : "border-silver-rose"
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
        </GradientWrapper>
      </div>
    </section>
  );
};

export default TransformationSection;
