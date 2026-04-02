"use client"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard"
import SectionHeadingForm from "@/components/admin/common/SectionHeadingForm"
import { HOME_PAGE_COMPONENT_TYPE } from "@/constants/pages"
import { useHomeSaveSection } from "@/hooks/useHomeSaveSection"
import { usePageData } from "@/hooks/usePageData"

const SectionHeading = () => {
    const { data: experInsightContent, loading: isContentUpdating } = usePageData({ slug: "home", componentType: HOME_PAGE_COMPONENT_TYPE.expert_insight });
    const { saveSection, loading: isSectionUpdating } = useHomeSaveSection();

    const handleSaveSection = async (data) => {
        const payload = {
            componentType: HOME_PAGE_COMPONENT_TYPE.expert_insight,
            data: {
                section_heading: {
                    ...data
                }
            },
        }
        await saveSection(payload);
    }

    if (isContentUpdating) {
        return <ContentLoadingCard title="Expert insight section heading" />
    }

    return (
        <ComponentCard title="Expert insight section heading">
            <SectionHeadingForm handler={handleSaveSection} isUpdating={isSectionUpdating} defaultValues={experInsightContent?.section_heading} />
        </ComponentCard>
    )
}

export default SectionHeading