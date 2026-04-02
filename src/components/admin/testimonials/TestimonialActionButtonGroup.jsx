import { Edit, Eye, Trash } from "lucide-react"
import WaringModal from "../common/WaringModal"

const TestimonialActionButtonGroup = ({ testimonial = {}, loading, deleteTestimonial }) => {
    const handleDeleteTestimonial = async () => {
        await deleteTestimonial(testimonial?.id);
    }
    return (
        <div className="w-full flex gap-4">
            <button>
                <Eye size={20} />
            </button>
            <button>
                <Edit size={20} />
            </button>
            <WaringModal submitHandler={handleDeleteTestimonial} isProcessing={loading}>
                <Trash className="text-red-500" size={20} />
            </WaringModal>
        </div>
    )
}

export default TestimonialActionButtonGroup