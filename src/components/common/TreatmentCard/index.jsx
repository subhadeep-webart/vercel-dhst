import styles from "./treatment.module.css";
import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import Card from "../../ui/Card";
import { cn } from "@/lib/utils";

const TreatmentCard = ({ className, value, title, step, img }) => {
  return (
    <Card
      className={cn(styles.treatment_card, styles[`step_${step}`], className)}
    >
      <Card.Body className="flex flex-col gap-3.5">
        <div className="w-24 2xl:w-28 h-24 2xl:h-28 rounded-full bg-button-primary flex items-center justify-center">
          <div className="relative  aspect-[58/50] w-12 2xl:w-14">
            <Image
              src={img ? img : PUBLIC_IMAGES.Rehabilitation2}
              alt="Rehabilitation2"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <h5 className="text-foreground text-xl 2xl:text-3xl font-medium leading-5 2xl:leading-7">
          {value}
        </h5>

        <span className="text-secondary text-sm 2xl:text-base font-light leading-5 2xl:leading-7">
          {title}
        </span>
      </Card.Body>
    </Card>
  );
};

export default TreatmentCard;
