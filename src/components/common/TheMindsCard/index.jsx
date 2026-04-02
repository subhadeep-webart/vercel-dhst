import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const TheMindsCard = ({ item }) => {
  return (
    <div className="max-w-[421px] w-full rounded-xl bg-vanilla-cream max-h-[287px] h-full px-14 pt-20 pb-12 relative">
      <div className="absolute left-[32px] 2xl:left-[44px] top-[-190px] 2xl:top-[-220px]">
        <div className="relative aspect-[327/277] w-[300px] 2xl:w-[327px]">
          <Image
            src={item?.image_url ? item?.image_url : PUBLIC_IMAGES.TheMindsImg1}
            alt="TheMindsImg1"
            fill
            className="object-contain rounded-xl"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-lg 2xl:text-2xl leading-6 2xl:leading-8 text-foreground">
          {item?.practitioner_name}
        </h3>
        <div className="rounded-full w-full bg-autumn-orange-10 h-11 flex items-center justify-center">
          <h3 className="text-sm 2xl:text-base leading-4 2xl:leading-6 text-button-primary">
            {item?.practitioner_position}
          </h3>
        </div>
        <p className="text-secondary text-xs 2xl:text-sm leading-5 2xl:leading-7 text-center">
          {item?.practitioner_details}
        </p>
      </div>
    </div>
  );
};

export default TheMindsCard;
