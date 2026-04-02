import LinkTab from "@/components/ui/admin/tabs/LinkTab"
import { HOW_TREATMENT_WORKS_TAB } from "@/constants/admin-constants"

const HowTreatmentWorkLayout = ({ children }) => {
    return (
        <div className="w-full space-y-6">
            <LinkTab tabs={HOW_TREATMENT_WORKS_TAB} />
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default HowTreatmentWorkLayout