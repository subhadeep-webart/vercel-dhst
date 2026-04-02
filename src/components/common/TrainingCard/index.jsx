
"use client"

import TrainingTimeCard from "./TrainingTimeCard";
import Image from "next/image";
import Button from "../../ui/Button";
import { useRouter } from "next/navigation";


const TrainingCard = ({ image }) => {
    const router = useRouter()
    return (
        <div className="max-w-[421px] 2xl:min-h-[551px] max-h-[500px] 2xl:max-h-[551px] h-auto w-full rounded-xl border border-taupe-gray hover:border-button-primary px-6 relative">
            <div className="mt-[-55px] 2xl:mt-[-75px]">
                <div

                    className="relative aspect-[358/258] w-full max-w-[358px] mb-2"
                >
                    <Image
                        src={image}
                        alt="Body"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="flex flex-col gap-5 justify-center items-center pt-6 pb-8">
                    <div className="flex flex-col gap-2 justify-center items-center text-center">
                        <h4 className="text-lg 2xl:text-2xl text-foreground leading-7 2xl:leading-8">DEMOR HotSpot Treatment</h4>
                        <p className="text-sm 2xl:text-base leading-5 2xl:leading-7 text-secondary">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                    </div>
                    {/* <div className="flex flex-col gap-3">


                        <TrainingTimeCard value="Length of session:" time="Based in Minutes" />
                        <TrainingTimeCard value="Sessions:" time="Three Value Packages" />
                        <TrainingTimeCard value="Days between sessions:" time="Ideally 2 to 4" />
                    </div> */}
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <Button onClick={() => router.push("/treatment-details")} className="cursor-pointer h-14 border border-taupe-gray text-taupe-gray hover:bg-button-primary hover:text-white bg-white hover:border-none w-56" rounded="full">View Details</Button>
                {/* <Button className="cursor-pointer h-10 border hover:border-button-primary border-taupe-gray text-taupe-gray hover:text-button-primary bg-white" rounded="full">$180</Button> */}
            </div>
        </div>
    )
};

export default TrainingCard;