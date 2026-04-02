"use client"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard";
import SectionHeadingForm from "@/components/admin/common/SectionHeadingForm"
import { ABOUT_PAGE_CONTENT_TYPE } from "@/constants/pages";
import { useAboutusSaveSection } from "@/hooks/useAboutusSaveSection";
import { usePageData } from "@/hooks/usePageData";

const SectionTwoPage = () => {
    const { data: aboutPageData, loading: isAboutPageLoading } = usePageData({ slug: "about_us", componentType: ABOUT_PAGE_CONTENT_TYPE.section_two });
    const { saveSection, loading } = useAboutusSaveSection();
    const handleSaveSection = async (data) => {
        const payload = {
            componentType: ABOUT_PAGE_CONTENT_TYPE.section_two,
            data: {
                section_two: {
                    ...data
                }
            },
        }
        await saveSection(payload);
    }

    if (isAboutPageLoading) {
        return <ContentLoadingCard title="About page section two content" />
    }

    console.log("About page data==>", aboutPageData);

    return (
        <ComponentCard title={"About us page section two content"}>
            <SectionHeadingForm defaultValues={aboutPageData?.section_two ?? {}} handler={handleSaveSection} isUpdating={loading} />
        </ComponentCard>
    )
}

export default SectionTwoPage