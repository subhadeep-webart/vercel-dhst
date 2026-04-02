import LinkTab from "@/components/ui/admin/tabs/LinkTab"
import { EXPERT_INSIGHT_TAB } from "@/constants/admin-constants"

const ExpertInsightLayout = ({ children }) => {
    return (
        <div className="w-full space-y-6">
            <LinkTab tabs={EXPERT_INSIGHT_TAB} />
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default ExpertInsightLayout