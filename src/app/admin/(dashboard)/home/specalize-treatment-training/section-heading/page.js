"use client"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard"
import SectionHeadingForm from "@/components/admin/common/SectionHeadingForm"
import { HOME_PAGE_COMPONENT_TYPE } from "@/constants/pages"
import { useHomeSaveSection } from "@/hooks/useHomeSaveSection"
import { usePageData } from "@/hooks/usePageData"

const SectionHeading = () => {
    const { data: specalizeTreatmentData, loading: isContentLoading } = usePageData({ slug: "home", componentType: HOME_PAGE_COMPONENT_TYPE.specalize_treatment_training })
    const { saveSection, loading: isSectionUpdating } = useHomeSaveSection();

    const handleSaveSection = async (data) => {
        const payload = {
            componentType: HOME_PAGE_COMPONENT_TYPE.specalize_treatment_training,
            data: {
                section_heading: {
                    ...data
                }
            },
        }
        await saveSection(payload);
    }

    if (isContentLoading) {
        return <ContentLoadingCard title="Specalize treatment training section heading" />
    }

    console.log("Specalize treatment data", specalizeTreatmentData);

    return (
        <ComponentCard title="Specalize treatment training section heading">
            <SectionHeadingForm handler={handleSaveSection} isUpdating={isSectionUpdating} defaultValues={specalizeTreatmentData?.section_heading} />
        </ComponentCard>
    )
}

export default SectionHeading