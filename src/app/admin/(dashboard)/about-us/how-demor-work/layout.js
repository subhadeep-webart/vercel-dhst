import LinkTab from "@/components/ui/admin/tabs/LinkTab";
import { HOW_DEMOR_WORK_TAB } from "@/constants/admin-constants";

const HowDemorWorkLayout = ({children}) => {
    return (<div className="w-full space-y-6">
        <LinkTab tabs={HOW_DEMOR_WORK_TAB} />
        <div className="w-full">
            {children}
        </div>
    </div>)
}

export default HowDemorWorkLayout;