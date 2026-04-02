import { PUBLIC_IMAGES } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TargetedTreatment = ({ classname, title, description, img }) => {
  return (
    <div className={cn("flex  items-center gap-4", classname)}>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl 2xl:text-3xl leading-6 2xl:leading-8 text-foreground">
          {title}
        </h3>
        <p className="text-base leading-5 2xl:leading-7 text-secondary">
          {description}
        </p>
      </div>
      <div className="border border-dashed border-button-primary h-0 max-w-[305px] w-full"></div>

      <div className="w-20 2xl:w-24 h-20 2xl:h-24 rounded-full bg-button-primary flex items-center justify-center rotate-[23deg] shrink-0">
        <div className="relative aspect-[50/50] w-10 2xl:w-12">
          <Image
            src={img ? img : PUBLIC_IMAGES.Rehabilitation2}
            alt="Rehabilitation2"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default TargetedTreatment;
