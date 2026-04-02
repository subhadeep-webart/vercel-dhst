"use client"
import AddTreatmentProcedureModal from "@/components/admin/about-us/AddTreatmentProcedureModal"
import TreatmentProcedureCard from "@/components/admin/about-us/TreatmentProcedureCard"
import ComponentCard from "@/components/admin/common/ComponentCard"
import { useTreatmentProcedure } from "@/hooks/useTreatmentProcedure"

const TreatmentProcedurePage = () => {
    const { treatmentProcedures, deleteTreatmentProcedure, addTreatmentProcedure, loading } = useTreatmentProcedure();

    console.log("Treatment Procedures", treatmentProcedures);
    const handleAddTreatmentProcedure = async (procedureData) => {
        await addTreatmentProcedure(procedureData)
    }

    const handleDeleteProcedure = async (procedure_id) => {
        await deleteTreatmentProcedure(procedure_id);
    }
    return (
        <div className="w-full space-y-6">
            <div className="w-full flex items-center justify-end">
                <AddTreatmentProcedureModal handleAddTreatmentProcedure={handleAddTreatmentProcedure} loading={loading}/>
            </div>
            <ComponentCard title={"Treatment procedures"}>
                <div className="w-full grid grid-cols-3 gap-4">
                    {
                        treatmentProcedures?.map((procedure) => (
                            <TreatmentProcedureCard key={procedure.id} procedure={procedure} handleDeleteProcedure={() => handleDeleteProcedure(procedure.id)} loading={loading} />
                        ))
                    }
                </div>
            </ComponentCard>
        </div>
    )
}

export default TreatmentProcedurePage