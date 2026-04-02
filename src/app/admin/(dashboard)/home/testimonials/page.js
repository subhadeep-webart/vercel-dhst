import AddTestimonialButton from "@/components/admin/testimonials/AddTestimonialButton"
import TestimonialTable from "@/components/admin/testimonials/TestimonialTable"

const TestimonialsPage = () => {
    return (
        <section className="w-full space-y-6">
            <AddTestimonialButton />
            <TestimonialTable />
        </section>
    )
}

export default TestimonialsPage