import AddInsightsButton from "@/components/admin/insights/AddInsightsButton"
import InsightTable from "@/components/admin/insights/InsightTable"

const Insights = () => {
    return (
        <section className="w-full space-y-6">
            <AddInsightsButton />
            {/* <ComponentCard > */}
                <InsightTable />
            {/* </ComponentCard> */}
        </section>
    )
}

export default Insights