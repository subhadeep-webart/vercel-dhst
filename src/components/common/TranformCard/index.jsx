
"use client"
import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";
import Button from "../../ui/Button";
import styles from "./transform.module.css"
import { useRouter } from "next/navigation";

const TransformCard = () => {
    const router = useRouter();
    return (
        <div className="flex justify-center items-center p-6">
            <div className="relative rounded-2xl hover:bg-soft-ivory hover-border-none border border-button-primary pt-28 pb-10 px-6 md:px-10 max-w-[646px] w-full text-center">


                <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex gap-12 2xl:gap-16">

                    <div className="relative w-[120px] sm:w-[160px] md:w-[200px] aspect-square rotate-[-14deg] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={PUBLIC_IMAGES.ExpertInsight2}
                            alt=""
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="relative w-[120px] sm:w-[160px] md:w-[200px] aspect-square rotate-[14deg] rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={PUBLIC_IMAGES.ExpertInsight2}
                            alt=""
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                </div>

                <div className="flex flex-col gap-6 2xl:gap-8 justify-center items-center pt-10 pb-4">

                    <h3 className="text-xl 2xl:text-3xl leading-snug text-foreground">
                        Success: I Want to be Motivated
                    </h3>

                    <p className="text-secondary text-sm 2xl::text-xl leading-relaxed max-w-[520px]">
                        Build the foundation for change. Learn core awareness, basic movement
                        principles, and how to reconnect with your body's natural alignment.
                    </p>

                    <div className="flex justify-center">
                        <h4 className="bg-autumn-orange-10 hover:bg-snow text-button-primary text-sm 2xl:text-lg px-10 py-2 rounded-full">
                            Best For:
                            <span className="text-secondary text-xs 2xl:text-sm ml-1">
                                New learners, recovery phase, awareness building.
                            </span>
                        </h4>
                    </div>


                    <Button onClick={() => router.push("/training-details")} className={`${styles.transform_btn} cursor-pointer h-16 w-64 2xl:w-72 text-secondary hover:text-white font-semibold bg-gainsboro hover:bg-button-primary`} rounded="full">Explore The Training</Button>

                </div>
            </div>
        </div>
    );
};

export default TransformCard;


