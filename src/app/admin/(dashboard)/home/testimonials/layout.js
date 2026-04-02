import LinkTab from "@/components/ui/admin/tabs/LinkTab"
import { TESTIMONIAL_TAB } from "@/constants/admin-constants"

const TestimonialsLayout = ({ children }) => {
    return (
        <div className="w-full space-y-6">
            <LinkTab tabs={TESTIMONIAL_TAB} />
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}

export default TestimonialsLayout