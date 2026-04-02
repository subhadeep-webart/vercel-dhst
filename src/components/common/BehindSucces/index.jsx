import { PUBLIC_IMAGES } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";

const BehindSuccess = ({ classname, title, description, img }) => {
  return (
    <div className={cn("flex  items-center", classname)}>
      <div className="relative aspect-[288/188] w-full max-w-[288px]">
        <Image
          src={img ? img : PUBLIC_IMAGES.ExpertInsight2}
          alt=""
          fill
          className="object-contain rounded-xl"
          priority
        />
      </div>
      <div className="border border-dashed border-button-primary h-0 max-w-[153px] w-full mr-2"></div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl 2xl:text-3xl leading-6 2xl:leading-8 text-foreground">
          {title}
        </h3>
        <p className="text-sm 2xl:text-base leading-5 2xl:leading-7 text-secondary">
          {description}{" "}
        </p>
      </div>
    </div>
  );
};

export default BehindSuccess;
