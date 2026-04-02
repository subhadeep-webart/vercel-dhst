"use client"
import Button from "@/components/ui/admin/Button"
import { CircleFadingPlus } from "lucide-react"
import { useRouter } from "next/navigation"

const AddTestimonialButton = () => {
    const router = useRouter();
    const handleAddInsightButtonClick = () => {
        router.push("/admin/home/testimonials/add-testimonials");
    }
    return (
        <div className="w-full flex justify-end items-center py-2">
            <Button size="sm" variant="primary" startIcon={<CircleFadingPlus size={20} className="text-white" />} onClick={handleAddInsightButtonClick}>
                ADD TESTIMONIALS
            </Button>
        </div>
    )
}

export default AddTestimonialButton