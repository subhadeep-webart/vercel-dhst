"use client"

import AboutSectionOneForm from "@/components/admin/about-us/AboutSectionOneForm"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard";
import { usePageData } from "@/hooks/usePageData"

const SectionOnePage = () => {
    const { data: aboutPageData, loading: isAboutPageLoading } = usePageData({ slug: "about_us", componentType: "section_one" });

    if (isAboutPageLoading) {
        return <ContentLoadingCard title="About page section one content" />
    }

    console.log("About page data==>",aboutPageData);

    return (
        <ComponentCard title={"About page section one content"}>
            <AboutSectionOneForm defaultValues={aboutPageData?.section_one ?? {}} />
        </ComponentCard>
    )
}

export default SectionOnePage