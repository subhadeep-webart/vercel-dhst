"use client"
import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard"
import DemorHotspotForm from "@/components/admin/home/DemorHotspotForm"
import { HOME_PAGE_COMPONENT_TYPE } from "@/constants/pages"
import { useHomeSaveSection } from "@/hooks/useHomeSaveSection"
import { usePageData } from "@/hooks/usePageData"

const DemorHotspotTreatmentPage = () => {
    const { data: demorHotspotData, loading: isContentLoading } = usePageData({ slug: "home", componentType: "demor_hotspot" })
    const { saveSection, loading } = useHomeSaveSection();

    const handleSave = async (data) => {
        const payload = {
            componentType: HOME_PAGE_COMPONENT_TYPE.demor_hotspot,
            data: {
                section_content: {
                    ...data
                }
            },
        }
        await saveSection(payload);

    }

    console.log("Demor Hotspot data===>", demorHotspotData);

    if (isContentLoading) {
        return <ContentLoadingCard title="Demor hotspot treatment content" />
    }

    return (
        <ComponentCard title={"Demor hotspot treatment content"}>
            <DemorHotspotForm submitHandler={handleSave} isLoading={loading} defaultValues={demorHotspotData?.section_content} />
        </ComponentCard>
    )
}

export default DemorHotspotTreatmentPage