"use client"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard";
import SectionHeadingForm from "@/components/admin/common/SectionHeadingForm"
import { ABOUT_PAGE_CONTENT_TYPE } from "@/constants/pages";
import { useAboutusSaveSection } from "@/hooks/useAboutusSaveSection";
import { usePageData } from "@/hooks/usePageData";

const SectionHeadingPage = () => {
    const { data: aboutPageData, loading: isContentLoading } = usePageData({ slug: "about_us", componentType: ABOUT_PAGE_CONTENT_TYPE.how_demor_work_procedure });
    const { saveSection, loading } = useAboutusSaveSection();
    const handleSaveSection = async (data) => {
        const payload = {
            componentType: ABOUT_PAGE_CONTENT_TYPE.how_demor_work_procedure,
            data: {
                section_heading: {
                    ...data
                }
            },
        }
        await saveSection(payload);
    }

    console.log("About page data===>", aboutPageData);

    if (isContentLoading) {
        return <ContentLoadingCard title="About us page work steps content" />
    }

    return (
        <ComponentCard title={"About us page work steps content"}>
            <SectionHeadingForm defaultValues={aboutPageData?.section_heading ?? {}} handler={handleSaveSection} isUpdating={loading} />
        </ComponentCard>
    )
}

export default SectionHeadingPage