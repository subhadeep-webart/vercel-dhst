"use client";

import Image from "next/image";
import styles from "./insightcard.module.css";
import { PUBLIC_IMAGES } from "@/assets";
import CommonButton from "../CommonButton";

const InsightsCard = ({ item }) => {
  console.log("item", item);
  return (
    <div className={styles.flip_card}>
      <div className={styles.card_inner}>
        <div className={styles.card_front}>
          <div className="flex flex-col gap-6 items-center justify-center h-full">
            <div className="relative aspect-[309/215] w-full max-w-[309px]">
              <Image
                src={
                  item?.image_url
                    ? item?.image_url
                    : PUBLIC_IMAGES.ExpertInsight1
                }
                alt="ExpertInsight1"
                fill
                className="object-contain"
                priority
              />
            </div>

            <h5 className="text-base 2xl:text-lg leading-5 2xl:leading-7 text-foreground text-center">
              {" "}
              {item?.title}
            </h5>
          </div>
        </div>

        <div className={`${styles.card_back} px-4`}>
          <div className="flex flex-col items-center justify-center text-center gap-4 h-full">
            <h5 className="text-autumn-leaves text-base 2xl:text-lg leading-6 2xl:leading-8">
              {item?.highlight_text}
            </h5>
            <h5 className="text-foreground text-base 2xl:text-lg leading-6 2xl:leading-8">
              {item?.title}
            </h5>
            <p className="text-xs 2xl:text-sm leading-5 2xl:leading-7 text-secondary line-clamp-3">
              {item?.description}
            </p>

            <CommonButton
              title={item?.button_text ? item?.button_text : "Know More"}
              className="w-40 h-12 2xl:w-40"
              onClick={() => {
                if (item?.button_url) {
                  window.open(item.button_url, "_blank");
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsCard;
