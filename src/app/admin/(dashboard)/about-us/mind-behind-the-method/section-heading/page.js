"use client"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard";
import SectionHeadingForm from "@/components/admin/common/SectionHeadingForm"
import { ABOUT_PAGE_CONTENT_TYPE } from "@/constants/pages";
import { useAboutusSaveSection } from "@/hooks/useAboutusSaveSection";
import { usePageData } from "@/hooks/usePageData";

const SectionTwoPage = () => {
    const {data:aboutPageContent,loading:isContentLoading}=usePageData({slug:"about_us",componentType:ABOUT_PAGE_CONTENT_TYPE.mind_behind_the_therapy});
    const { saveSection, loading } = useAboutusSaveSection();
    const handleSaveSection = async (data) => {
        const payload = {
            componentType: ABOUT_PAGE_CONTENT_TYPE.mind_behind_the_therapy,
            data: {
                section_heading: {
                    ...data
                }
            },
        }
        await saveSection(payload);
    }

    if(isContentLoading){
        return <ContentLoadingCard title="About us page"/>
    }

    return (
        <ComponentCard title={"About us page mind behind the therapy content"}>
            <SectionHeadingForm defaultValues={aboutPageContent?.section_heading ?? {}} handler={handleSaveSection} isUpdating={loading} />
        </ComponentCard>
    )
}

export default SectionTwoPage