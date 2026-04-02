import LinkTab from "@/components/ui/admin/tabs/LinkTab"
import { SPECALIZE_TREATMENT_TRAINING_TAB } from "@/constants/admin-constants"

const SpecalizeTreatmentTrainingLayout = ({ children }) => {
    return (
        <div className="w-full space-y-6">
            <LinkTab tabs={SPECALIZE_TREATMENT_TRAINING_TAB} />
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default SpecalizeTreatmentTrainingLayout