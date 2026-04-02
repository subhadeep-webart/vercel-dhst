"use client"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard"
import SectionHeadingForm from "@/components/admin/common/SectionHeadingForm"
import { HOME_PAGE_COMPONENT_TYPE } from "@/constants/pages"
import { useHomeSaveSection } from "@/hooks/useHomeSaveSection"
import { usePageData } from "@/hooks/usePageData"

const SectionHeading = () => {
    const { data: sectionContent, loading } = usePageData({ slug: "home", componentType: HOME_PAGE_COMPONENT_TYPE.testimonial });
    const { saveSection, loading: isSectionUpdating } = useHomeSaveSection();

    const handleSaveSection = async (data) => {
        const payload = {
            componentType: HOME_PAGE_COMPONENT_TYPE.testimonial,
            data: {
                section_heading: {
                    ...data
                }
            },
        }
        await saveSection(payload);
    }

    if (loading) {
        return <ContentLoadingCard title="Testimonial section heading" />
    }

    const { section_heading = {} } = sectionContent || {};

    return (
        <ComponentCard title="Testimonial section heading">
            <SectionHeadingForm handler={handleSaveSection} isUpdating={isSectionUpdating} defaultValues={section_heading} />
        </ComponentCard>
    )
}

export default SectionHeading