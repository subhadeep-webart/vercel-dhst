"use client"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard"
import SectionHeadingForm from "@/components/admin/common/SectionHeadingForm"
import { HOME_PAGE_COMPONENT_TYPE } from "@/constants/pages"
import { useHomeSaveSection } from "@/hooks/useHomeSaveSection"
import { usePageData } from "@/hooks/usePageData"

const SectionHeading = () => {
    const { data: sectionHeadingData, loading: isContentLoading } = usePageData({ slug: "home", componentType: HOME_PAGE_COMPONENT_TYPE.interactive_3d_section })
    const { saveSection, loading: isSectionUpdating } = useHomeSaveSection();

    const handleSaveSection = async (data) => {
        const payload = {
            componentType: HOME_PAGE_COMPONENT_TYPE.interactive_3d_section,
            data: {
                section_heading: {
                    ...data
                }
            },
        }
        await saveSection(payload);
    }

    console.log("Section heading content", sectionHeadingData);

    if (isContentLoading) {
        return <ContentLoadingCard title="Interactive 3d model section heading" />
    }

    return (
        <ComponentCard title="Interactive 3d model section heading">
            <SectionHeadingForm handler={handleSaveSection} isUpdating={isSectionUpdating} defaultValues={sectionHeadingData?.section_heading} />
        </ComponentCard>
    )
}

export default SectionHeading