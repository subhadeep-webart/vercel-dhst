"use client"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard"
import SectionHeadingForm from "@/components/admin/common/SectionHeadingForm"
import { HOME_PAGE_COMPONENT_TYPE } from "@/constants/pages"
import { useHomeSaveSection } from "@/hooks/useHomeSaveSection"
import { usePageData } from "@/hooks/usePageData"

const SectionHeading = () => {
    const { data: sectionContent, loading } = usePageData({ slug: "home", componentType: HOME_PAGE_COMPONENT_TYPE.how_treatment_work })
    const { saveSection, loading: isSectionUpdating } = useHomeSaveSection();

    const handleSaveSection = async (data) => {
        const payload = {
            componentType: HOME_PAGE_COMPONENT_TYPE.how_treatment_work,
            data: {
                section_heading: {
                    ...data
                }
            },
        }
        await saveSection(payload);
    }

    console.log("Section content", sectionContent);

    if (loading) {
        <ContentLoadingCard title="How treament work section heading" />
    }

    const { section_heading = {} } = sectionContent || {};

    console.log("Section heading", section_heading);

    return (
        <ComponentCard title="How treament work section heading">
            <SectionHeadingForm handler={handleSaveSection} isUpdating={isSectionUpdating} defaultValues={section_heading} />
        </ComponentCard>
    )
}

export default SectionHeading