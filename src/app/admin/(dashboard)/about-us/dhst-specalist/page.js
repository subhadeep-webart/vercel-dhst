"use client"

import DhstSpecalistForm from "@/components/admin/about-us/DhstSpecalistForm"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard"
import { ABOUT_PAGE_CONTENT_TYPE } from "@/constants/pages"
import { usePageData } from "@/hooks/usePageData"

const DhstSpecalistPage = () => {
    const { data: aboutPageContent, loading: isAboutPageContent } = usePageData({ slug: "about_us", componentType: ABOUT_PAGE_CONTENT_TYPE.dhst_specalist_section });

    if (isAboutPageContent) {
        return <ContentLoadingCard title="Dhst specalist section" />
    }

    console.log("About page content", aboutPageContent);
    return (
        <ComponentCard title={"Dhst sepcalist section"}>
            <DhstSpecalistForm defaultValues={aboutPageContent?.section_details ?? {}} />
        </ComponentCard>
    )
}

export default DhstSpecalistPage