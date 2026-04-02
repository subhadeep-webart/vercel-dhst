"use client";

import Button from "@/components/ui/admin/Button";
import { Modal } from "@/components/ui/admin/modal";
import { CircleFadingPlus } from "lucide-react";
import AddTreatmentProcedureForm from "./AddTreatmentProcedureForm";
import { useModal } from "@/hooks/useModal";

export default function AddTreatmentProcedureModal({ handleAddTreatmentProcedure, loading }) {

    const { isOpen, openModal, closeModal } = useModal();
    const handleSave = async (data) => {
        // Handle save logic here
        await handleAddTreatmentProcedure(data)
        closeModal();
    };
    return (
        <>
            <Button size="sm" onClick={openModal} startIcon={<CircleFadingPlus />}>
                Add Treatment Procedure
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                className="max-w-[786px] p-5 lg:p-14"
            >
                <AddTreatmentProcedureForm submitHandler={handleSave} isLoading={loading} />
            </Modal>
        </>
    );
}
