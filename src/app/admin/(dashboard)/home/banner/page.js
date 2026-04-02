"use client"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard"
import HomeBannerForm from "@/components/admin/home/HomeBannerForm"
import { HOME_PAGE_COMPONENT_TYPE } from "@/constants/pages"
import { useHomeSaveSection } from "@/hooks/useHomeSaveSection"
import { usePageData } from "@/hooks/usePageData"

const HomeBannerPage = () => {
    const { data: bannerContentData, loading: isContentLoading } = usePageData({ slug: "home", componentType: HOME_PAGE_COMPONENT_TYPE.banner_content })
    const { saveSection, loading } = useHomeSaveSection();

    const handleSaveSection = async (data) => {
        const payload = {
            componentType: HOME_PAGE_COMPONENT_TYPE.banner_content,
            data: {
                banner_content: {
                    ...data
                }
            },
        }
        await saveSection(payload);
    }

    if (isContentLoading) {
        return <ContentLoadingCard title="Home page banner content" />
    }

    return (
        <ComponentCard title={"Home page banner content"}>
            <HomeBannerForm submitHandler={handleSaveSection} isLoading={loading} defaultValues={bannerContentData?.banner_content} />
        </ComponentCard>
    )
}

export default HomeBannerPage