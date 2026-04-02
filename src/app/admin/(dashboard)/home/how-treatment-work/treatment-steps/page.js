"use client"

import ComponentCard from "@/components/admin/common/ComponentCard"
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard"
import HowTreatmentWorkForm from "@/components/admin/home/HowTreatmentWorkForm"
import { HOME_PAGE_COMPONENT_TYPE } from "@/constants/pages"
import { useHomeSaveSection } from "@/hooks/useHomeSaveSection"
import { usePageData } from "@/hooks/usePageData"

const HowTreatmentWorkPage = () => {
    const { data: howTreatmentWorkData, loading: isContentLoading } = usePageData({ slug: "home", componentType: "how_treatment_work" });

    const { saveSection, loading } = useHomeSaveSection();

    const handleSaveSection = async (data) => {
        const payload = {
            componentType: HOME_PAGE_COMPONENT_TYPE.how_treatment_work,
            data: {
                how_treatment_work_steps: {
                    ...data
                }
            },
        }
        await saveSection(payload);
    }

    console.log("How treatment===>", howTreatmentWorkData);

    if (isContentLoading) {
        return <ContentLoadingCard title="Treatment steps" />
    }

    const { how_treatment_work_steps = {} } = howTreatmentWorkData || {}
    return (
        <ComponentCard title={"Treatment steps"}>
            <HowTreatmentWorkForm submitHandler={handleSaveSection} isLoading={loading} defaultValues={how_treatment_work_steps} />
        </ComponentCard>
    )
}

export default HowTreatmentWorkPage