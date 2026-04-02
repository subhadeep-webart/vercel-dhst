import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const LeftContainer = ({ banner_content }) => {
  console.log("Banner content in left container", banner_content);
  return (
    <div className="relative">
      <div className="absolute left-[0px] top-[280px] -translate-y-1/2 w-[519px] h-[478px] z-0">
        <Image
          src={PUBLIC_IMAGES.CircleBanner}
          alt="CircleBanner"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full max-w-[484px] aspect-[484/727] ml-[40px]">
        <Image
          src={
            banner_content?.image_url
              ? banner_content.image_url
              : PUBLIC_IMAGES.HomeBannerLeft
          }
          alt="HomeBannerLeft"
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* <div className="absolute bottom-[-30px] 2xl:bottom-[-50px] flex">
        <div className="relative w-[110px] sm:w-[140px] lg:w-[183px] aspect-[183/208]">
          <Image
            src={PUBLIC_IMAGES.DocImg1}
            alt="DocImg1"
            fill
            className="object-contain -rotate-12 rounded-xl"
            priority
          />
        </div>
        <div className="relative w-[110px] sm:w-[140px] lg:w-[183px] aspect-[183/208]">
          <Image
            src={PUBLIC_IMAGES.DocImg2}
            alt="DocImg2"
            fill
            className="object-contain rounded-xl"
            priority
          />
        </div>
        <div className="relative w-[110px] sm:w-[140px] lg:w-[183px] aspect-[183/208]">
          <Image
            src={PUBLIC_IMAGES.DocImg3}
            alt="DocImg3"
            fill
            className="object-contain rotate-12 rounded-xl"
            priority
          />
        </div>
      </div> */}
      <div className="absolute bottom-[-30px] 2xl:bottom-[-50px] flex">
        {banner_content?.card_images?.map((item, index) => {
          const rotations = ["-rotate-12", "", "rotate-12"];

          return (
            <div
              key={index}
              className="relative w-[110px] sm:w-[140px] lg:w-[183px] aspect-[183/208]"
            >
              <Image
                src={item?.url ? item?.url : PUBLIC_IMAGES.DocImg1}
                alt={`card-${index}`}
                fill
                className={`object-contain rounded-xl ${
                  rotations[index % rotations.length]
                }`}
                priority
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftContainer;
