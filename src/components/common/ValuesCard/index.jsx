import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import Card from "../../ui/Card";
import { cn } from "@/lib/utils";

const ValuesCard = ({ className, value, title, icon }) => {
  return (
    <Card className={cn("", className)}>
      <Card.Body className={"flex flex-col gap-3.5"}>
        <div className="relative  aspect-[53/50] w-11 2xl:w-13">
          <Image
            src={icon ? icon : PUBLIC_IMAGES.Rehabilitation}
            alt="Rehabilitation"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="text-black text-xl 2xl:text-3xl font-medium leading-5 2xl:leading-7">
          {value}
        </p>
        <span className="text-black text-sm 2xl:text-base font-light leading-5 2xl:leading-7">
          {title}
        </span>
      </Card.Body>
    </Card>
  );
};

export default ValuesCard;
