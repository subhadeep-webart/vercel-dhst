import InnerPageBanner from "@/components/banner/InnerPageBanner";
import BuildAwarenesssection from "@/components/training/TrainingDetails/BuildAwarenessSection";
import HelpsYouGrowSection from "@/components/training/TrainingDetails/HelpsYouGrowSection";
import KnowledgePracticeSection from "@/components/training/TrainingDetails/KnowledgePracticeSection";
import WhereItTakesSection from "@/components/training/TrainingDetails/WhereItTakesSection";


const TrainingDetailsPage = () => {
    return (
        <>
            <InnerPageBanner value1="Beginner, I Want to Get Started" description="Specialized d-hotspot treatment to identify and treat the root cause of your distress, discomfort, and pain with targeted bodywork techniques." />
            <BuildAwarenesssection />
            <KnowledgePracticeSection/>
            <HelpsYouGrowSection/>
            <WhereItTakesSection/>
        </>
    )
};

export default TrainingDetailsPage;