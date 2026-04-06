"use client"

import DemorHotspotTherapyForm from "@/components/admin/about-us/DhstHotspotTherapyForm"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard"
import { ABOUT_PAGE_CONTENT_TYPE } from "@/constants/pages"
import { usePageData } from "@/hooks/usePageData"

const DemorHotspotTherapyPage = () => {
    const { data: aboutPage, loading } = usePageData({ slug: "about_us", componentType: ABOUT_PAGE_CONTENT_TYPE.dhst_theraphy_hotspot });

    if (loading) {
        return <ContentLoadingCard title="Demor hotspot therapy section" />
    }

    console.log("About page",aboutPage);s
    return (
        <ComponentCard title={"Demor hotspot therapy section"}>
            <DemorHotspotTherapyForm defaultValues={aboutPage?.section_details ?? {}} />
        </ComponentCard>
    )
}

export default DemorHotspotTherapyPage