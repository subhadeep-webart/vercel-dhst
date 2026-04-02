import GradientWrapper from "../../wrapper/GradientWrapper"
import TreatmentSection from "./TreatmentSection"
import styles from "../../wrapper/GradientWrapper/gradientwrapper.module.css"

const HowItWorksSection = ({ howTreatmentWork }) => {
    const { section_heading = {}, how_treatment_work_steps = {} } = howTreatmentWork?.data ?? {};
    const { section_title = "", section_highlight_text = "", section_description = "" } = section_heading;

    console.log("How treatment works===>", how_treatment_work_steps);
    return (
        <GradientWrapper id="gradient_center" className={styles.gradient_wrapper_container_1}>
            <section className="pt-16 pb-28">
                <div className="container flex flex-col items-center justify-center gap-5 h-auto w-full">
                    <div className="flex flex-col gap-5 items-center justify-center max-w-[756px] w-full text-center">
                        <h3 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16">{section_title} <span className="text-4xl text-autumn-leaves italic">{" "}{section_highlight_text}</span></h3>
                        <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8">{section_description}</p>
                    </div>
                    <TreatmentSection treatmentSteps={how_treatment_work_steps?.treatment_steps ?? []} />
                </div>
            </section>
        </GradientWrapper>

    )
}

export default HowItWorksSection