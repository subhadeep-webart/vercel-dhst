import BannerForm from "@/components/admin/common/BannerForm"
import ComponentCard from "@/components/admin/common/ComponentCard"

const BannerPage = () => {
    return (
        <ComponentCard title={"Blog banner content"}>
            <BannerForm />
        </ComponentCard>
    )
}

export default BannerPage