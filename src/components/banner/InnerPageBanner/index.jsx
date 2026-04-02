import { PUBLIC_IMAGES } from "@/assets";
import styles from "./innerbanner.module.css";
import Image from "next/image";
const InnerPageBanner = ({ value1, value2, description, img }) => {
  return (
    <>
      <section className={styles.inner_banner_container}>
        <div
          className="relative z-10 flex
        gap-8  container w-full h-full items-center justify-between"
        >
          <div
            className="flex flex-col gap-2 max-w-[533px] w-full pt-32
          "
          >
            <h2 className="text-3xl 2xl:text-5xl font-semibold text-foreground leading-14 2xl:leading-16">
              {value1}
              <span className="text-autumn-leaves text-2xl 2xl:text-4xl leading-6 2xl:leading-8 italic">
                {" "}
                {value2}
              </span>
            </h2>

            <p className="mt-4 text-secondary font-normal text-xl">
              {description}
            </p>
          </div>
          <div className="relative flex items-center justify-end">
            <div className="absolute right-0 top-[-8px] w-[420px] h-[240px] z-10">
              <Image
                src={img ? img : PUBLIC_IMAGES.InnerBannerImg}
                alt="InnerBannerImg"
                fill
                className="object-cover rounded-xl
                "
              />
            </div>

            <div className="absolute right-[208px] top-[76px] -translate-y-1/2 w-[360px] h-[320px] z-0">
              <Image
                src={PUBLIC_IMAGES.CircleBanner}
                alt="CircleBanner"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <div className=" bg-white h-16"></div>
    </>
  );
};

export default InnerPageBanner;
