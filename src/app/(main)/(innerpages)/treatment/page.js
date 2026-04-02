import InnerPageBanner from "@/components/banner/InnerPageBanner"
import TreatmentsSectiion from "@/components/treatment/TreatmentsSection"


const TreatmentPage = () => {
    return (
        <>
            <InnerPageBanner value1="Treatment" value2="Courses" description="Specialized d-hotspot treatment to identify and treat the root cause of your distress, discomfort, and pain with targeted bodywork techniques." />
            <TreatmentsSectiion />
        </>
    )
}

export default TreatmentPage