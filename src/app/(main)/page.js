"use client"

import HomePageBanner from "@/components/banner/HomePageBanner";
import AnalysisSection from "@/components/home/AnalysisSection";
import BodyCareSection from "@/components/home/BodyCareSection";
import ExpertInsightsSection from "@/components/home/ExpertInsightsSection";
import HealingJourneySection from "@/components/home/HealingJourneySection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TransformationSection from "@/components/home/TransformationSection";
import TreatmentTrainingSection from "@/components/home/TreatmentTrainingSection";
import { HOME_PAGE_COMPONENT_TYPE } from "@/constants/pages";
import { usePageData } from "@/hooks/usePageData";
import { mapComponentsByType } from "@/lib/pageUtils";


const Home = () => {
    const { data: homePageData, loading } = usePageData({ slug: "home" });

    if (loading) return;

    const homePageComponent = mapComponentsByType(homePageData || []);
    const banner = homePageComponent?.[HOME_PAGE_COMPONENT_TYPE.banner_content];
    const analysisSection = homePageComponent?.[HOME_PAGE_COMPONENT_TYPE.interactive_3d_section];
    const bodyCareSection = homePageComponent?.[HOME_PAGE_COMPONENT_TYPE.demor_hotspot];
    const howTreatmentWork = homePageComponent?.[HOME_PAGE_COMPONENT_TYPE.how_treatment_work];
    const treatmentTrainingSection = homePageComponent?.[HOME_PAGE_COMPONENT_TYPE?.specalize_treatment_training]
    const transformationSection = homePageComponent?.[HOME_PAGE_COMPONENT_TYPE?.testimonial];
    const expertInsightSection = homePageComponent?.[HOME_PAGE_COMPONENT_TYPE?.expert_insight];
    const healingJourneySection = homePageComponent?.[HOME_PAGE_COMPONENT_TYPE?.start_healing_journey];

    return (
        <>
            <HomePageBanner bannerData={banner} />
            <AnalysisSection analysisSectionData={analysisSection} />
            <BodyCareSection bodyCareSectionData={bodyCareSection} />
            <HowItWorksSection howTreatmentWork={howTreatmentWork} />
            <TreatmentTrainingSection treatmentTrainingData={treatmentTrainingSection} />
            <TransformationSection testimonialData={transformationSection} />
            <ExpertInsightsSection expertInsightSectionData={expertInsightSection} />
            <HealingJourneySection healingJourneySectionData={healingJourneySection} />
        </>
    )
};

export default Home;