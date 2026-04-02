"use client"

import AddHowDemorWorkModal from "@/components/admin/about-us/AddHowDemorWorkModal";
import HowDemorWorkCard from "@/components/admin/about-us/HowDemorWorkCard";
import ComponentCard from "@/components/admin/common/ComponentCard";
import ContentLoadingCard from "@/components/admin/common/ContentLoadingCard";
import { useHowDemorWorkProcedures } from "@/hooks/useHowDemorWorkProcedure";


const HowDemorWorkPage = () => {
    const { howDemorWorkProcedures, addHowDemorWorkProcedure, deleteHowDemorWorkProcedure, loading } = useHowDemorWorkProcedures();

    const handleAddWorkProcedure = async (procedures_data) => {
        addHowDemorWorkProcedure(procedures_data)
    }

    const handleDeleteProcedure = async (procedure_id) => {
        await deleteHowDemorWorkProcedure(procedure_id);
    }

    if (loading) {
        return <ContentLoadingCard title="How demor work procedures" />
    }

    return (
        <div className="w-full space-y-6">
            <div className="w-full flex items-center justify-end">
                <AddHowDemorWorkModal handleAddWorkProcedure={handleAddWorkProcedure} loading={loading} />
            </div>
            <ComponentCard title={"How demor work procedures"}>
                <div className="w-full grid grid-cols-3 gap-4">
                    {
                        howDemorWorkProcedures?.map((details) => (
                            <HowDemorWorkCard key={details.id} workProcedure={details} handleDeleteProcedure={handleDeleteProcedure} loading={loading} />
                        ))
                    }
                </div>
            </ComponentCard>
        </div>
    )
}

export default HowDemorWorkPage