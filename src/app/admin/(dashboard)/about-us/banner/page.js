"use client"
import BannerForm from "@/components/admin/common/BannerForm"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard"
import { ABOUT_PAGE_CONTENT_TYPE } from "@/constants/pages"
import { useAboutusSaveSection } from "@/hooks/useAboutusSaveSection"
import { usePageData } from "@/hooks/usePageData"

const AboutusBannerPage = () => {
    const { data: aboutPageData, loading: isContentLoading } = usePageData({ slug: "about_us", componentType: ABOUT_PAGE_CONTENT_TYPE.banner });
    const { saveSection, loading } = useAboutusSaveSection();
    const handleSaveSection = async (data) => {
        const payload = {
            componentType: ABOUT_PAGE_CONTENT_TYPE.banner,
            data: {
                banner: {
                    ...data
                }
            },
        }
        await saveSection(payload);
    }

    if (isContentLoading) {
        return <ContentLoadingCard title="About us page banner" />
    }

    console.log("About page",aboutPageData?.banner);

    return (
        <ComponentCard title={"About us page banner"}>
            <BannerForm defaultValues={aboutPageData?.banner ?? ""} submitHandler={handleSaveSection} isLoading={loading} />
        </ComponentCard>
    )
}

export default AboutusBannerPage