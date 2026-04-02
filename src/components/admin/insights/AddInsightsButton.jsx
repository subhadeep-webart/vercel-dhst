"use client"
import Button from "@/components/ui/admin/Button"
import { CircleFadingPlus } from "lucide-react"
import { useRouter } from "next/navigation"

const AddInsightsButton = () => {
    const router = useRouter();
    const handleAddInsightButtonClick = () => {
        router.push("/admin/home/expert-insight/insights/add-insight");
    }
    return (
        <div className="w-full flex justify-end items-center py-2">
            <Button size="sm" variant="primary" startIcon={<CircleFadingPlus size={20} className="text-white" />} onClick={handleAddInsightButtonClick}>
                ADD INSIGHT
            </Button>
        </div>
    )
}

export default AddInsightsButton