"use client"

import AddPractitionerSaysModal from "@/components/admin/about-us/AddPractionerSaysModal"
import PractionerSaysCard from "@/components/admin/about-us/PractionerSaysCard"
import ComponentCard from "@/components/admin/common/ComponentCard"
import { usePractionerSays } from "@/hooks/usePractitionerSays"

const PractionersPage = () => {
    const { practionerSays, addPractionerSay, deletePractionerSay, loading: isPractionerLoading } = usePractionerSays();

    const handleAddPractionerSays = async (data) => {
        await addPractionerSay(data);
    }

    const handleDeletePractionerSays = async (id) => {
        await deletePractionerSay(id)
    }

    console.log("Practioner says", practionerSays);
    return (
        <div className="w-full space-y-6">
            <div className="w-full flex justify-end items-center">
                <AddPractitionerSaysModal handleAddPractionerSays={handleAddPractionerSays} loading={isPractionerLoading} />
            </div>
            <ComponentCard title={"Practitioner details content"}>
                <div className="w-full grid grid-cols-3 gap-4">
                    {practionerSays?.map((practionerSay) => (<PractionerSaysCard practionerSay={practionerSay} key={practionerSay?.id} handleDelete={handleDeletePractionerSays} loading={isPractionerLoading} />))}
                </div>
            </ComponentCard>
        </div>
    )
}

export default PractionersPage