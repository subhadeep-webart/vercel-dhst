import { Edit, Eye, Trash2 } from "lucide-react"
import Image from "next/image"
import Card from "@/components/ui/admin/card/Card"
import WaringModal from "../common/WaringModal"

const PractionerSaysCard = ({ practionerSay, handleDelete, loading }) => {
    console.log("Practitioner", practionerSay);
    const handleDeleteCard = async () => {
        if (!practionerSay.id) return;

        await handleDelete(practionerSay.id);
    }
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
                    <WaringModal submitHandler={handleDeleteCard} isProcessing={loading}>
                        <Trash2 size={20} color="red" />
                    </WaringModal>
                </div>
            </div>
            <div className="w-full space-y-4">
                <div className="w-full flex gap-4 items-center">
                    <Image src={practionerSay.image_url} alt={practionerSay.practitioner_name} height={60} width={60} />
                    <h3>{practionerSay?.practitioner_name ?? ""}</h3>
                </div>
                <p>{practionerSay?.practitioner_position ?? ""}</p>
                <p>{practionerSay?.practitioner_details ?? ""}</p>
            </div>
        </Card>
    )
}

export default PractionerSaysCard