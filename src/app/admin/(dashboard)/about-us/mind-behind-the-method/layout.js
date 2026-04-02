import LinkTab from "@/components/ui/admin/tabs/LinkTab"
import { PRACTIONER_SECTION_TAB } from "@/constants/admin-constants"

const MindBehindTheMethodLayout = ({ children }) => {
    return (
        <div className="w-full space-y-6">
            <LinkTab tabs={PRACTIONER_SECTION_TAB} />
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default MindBehindTheMethodLayout
