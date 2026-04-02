import { Edit, Eye, Trash } from "lucide-react"
import WaringModal from "../common/WaringModal"

const InsightActionButtonGroup = ({ insight = {}, loading, deleteInsight }) => {
    const handleDeleteInsight = async () => {
        await deleteInsight(insight?.id);
    }
    return (
        <div className="w-full flex gap-4">
            <button>
                <Eye size={20} />
            </button>
            <button>
                <Edit size={20} />
            </button>
            <WaringModal submitHandler={handleDeleteInsight} isProcessing={loading}>
                <Trash className="text-red-500" size={20} />
            </WaringModal>
        </div>
    )
}

export default InsightActionButtonGroup