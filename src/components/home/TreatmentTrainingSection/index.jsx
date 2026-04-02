
import { PUBLIC_IMAGES } from "@/assets";
import TrainingCard from "../../common/TrainingCard";
import Button from "../../ui/Button";

const TreatmentTrainingSection = ({treatmentTrainingData={}}) => {
    console.log("TREATMENT TRAINING DATA",treatmentTrainingData);
    const {section_heading={}}=treatmentTrainingData?.data ?? {};
    const {section_title="",section_highlight_text="",section_description=""}=section_heading || {}
    return (
        <section className="py-20">
            <div className="container w-full h-auto flex flex-col gap-32">
                <div className="flex justify-between">
                    <div className="flex flex-col max-w-[656px] 2xl:max-w-[756px] w-full gap-3 2xl:gap-5">
                        <h3 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16">{section_title} <span className="text-4xl text-autumn-leaves italic">{" "}{section_highlight_text}</span></h3>
                        <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8">{section_description}</p>
                    </div>

                    <div className="flex flex-col items-end relative">

                        <Button
                            className="h-13 max-w-[229px] w-full px-20 right-[60px] absolute bg-white right-[110px] cursor-pointer"
                            variant="bordered"
                            rounded="full"
                        >
                            Treatment
                        </Button>

                        <Button
                            className="h-13 max-w-[229px] w-full !bg-white border-taupe-gray text-taupe-gray px-20 absolute right-0 top-[30px] cursor-pointer"
                            rounded="full"
                            variant="bordered"
                        >
                            Training
                        </Button>

                    </div>
                </div>
                <div className="grid grid-cols-4 gap-5 2xl:gap-7">
                    <TrainingCard image={PUBLIC_IMAGES.TrainingImg1} />
                    <TrainingCard image={PUBLIC_IMAGES.TrainingImg2} />
                    <TrainingCard image={PUBLIC_IMAGES.TrainingImg3} />
                    <TrainingCard image={PUBLIC_IMAGES.TrainingImg3} />
                </div>
            </div>
        </section>
    )
};

export default TreatmentTrainingSection;