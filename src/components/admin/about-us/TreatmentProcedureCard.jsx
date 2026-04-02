import { Edit, Eye, Trash2 } from "lucide-react"
import Image from "next/image"
import Card from "@/components/ui/admin/card/Card"
import WaringModal from "../common/WaringModal"

const TreatmentProcedureCard = ({ procedure, handleDeleteProcedure, loading }) => {
    return (
        <Card>
            <div className="w-full flex justify-end items-center">
                <div className="flex gap-4">
                    <button className="cursor-pointer">
                        <Eye size={20} />
                    </button>
                    <button className="cursor-pointer">
                        <Edit size={20} />
                    </button>
                    <WaringModal submitHandler={handleDeleteProcedure} isProcessing={loading}>
                        <Trash2 size={20} color="red" />
                    </WaringModal>
                    <button className="cursor-pointer">
                    </button>
                </div>
            </div>
            <div className="w-full space-y-4">
                <div className="w-full flex gap-4 items-center">
                    <Image src={procedure.icon} alt={procedure.title} height={60} width={60} />
                    <h3>{procedure?.title ?? ""}</h3>
                </div>
                <p>{procedure?.description ?? ""}</p>
            </div>
        </Card>
    )
}

export default TreatmentProcedureCard