import SpinnerLoader from "@/components/ui/loader/SpinnerLoader"
import ComponentCard from "./ComponentCard"

const ContentLoadingCard = ({ title = "", loadingText = "Loading content..." }) => {
    return (
        <ComponentCard title={title} className="min-h-[40vh]">
            <div className="w-full flex justify-center items-center h-full space-x-4">
                <SpinnerLoader /> <span className="animate-pulse">{loadingText}</span>
            </div>
        </ComponentCard>
    )
}

export default ContentLoadingCard