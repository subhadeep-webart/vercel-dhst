"use client"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard"
import HealingJourneyForm from "@/components/admin/home/HealingJourneyForm"
import { HOME_PAGE_COMPONENT_TYPE } from "@/constants/pages"
import { usePageData } from "@/hooks/usePageData"

const HealingJourneySection = () => {
    const { data: startHealingJourneyData, loading: isHealingJourneyLoading } = usePageData({ slug: "home", componentType: HOME_PAGE_COMPONENT_TYPE.start_healing_journey });

    if (isHealingJourneyLoading) {
        return <ContentLoadingCard title={"Healing journey section"} />
    }

    return (
        <ComponentCard title={"Healing journey section"}>
            <HealingJourneyForm defaultValues={startHealingJourneyData?.section_details} />
        </ComponentCard>
    )
}

export default HealingJourneySection