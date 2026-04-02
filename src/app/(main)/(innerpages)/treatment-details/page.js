import InnerPageBanner from "@/components/banner/InnerPageBanner";
import BenefitsSection from "@/components/treatment/TreatmentDetails/BenefitsSection";
import RestoreBalanceSection from "@/components/treatment/TreatmentDetails/RestoreBalanceSection";
import SessionSection from "@/components/treatment/TreatmentDetails/SessionSection";
import WhatThisHelpsSection from "@/components/treatment/TreatmentDetails/WhatThisHelpsSection";


const TreatmentDetailsPage = () => {
    return (
        <>
            <InnerPageBanner value1="DEMOR HotSpot Treatment" description="Specialized d-hotspot treatment to identify and treat the root cause of your distress, discomfort, and pain with targeted bodywork techniques." />
            <RestoreBalanceSection />
            <WhatThisHelpsSection />
            <BenefitsSection />
            <SessionSection/>
        </>
    )
};

export default TreatmentDetailsPage;