"use client";

import Button from "@/components/ui/admin/Button";
import { Modal } from "@/components/ui/admin/modal";
import { CircleFadingPlus } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import PractitionerSaysForm from "./PractitionerSaysForm";

export default function AddPractitionerSaysModal({ handleAddPractionerSays, loading }) {

    const { isOpen, openModal, closeModal } = useModal();
    const handleSave = async (data) => {
        // Handle save logic here
        await handleAddPractionerSays(data)
        closeModal();
    };
    return (
        <>
            <Button size="sm" onClick={openModal} startIcon={<CircleFadingPlus />}>
                Add Practitioner says
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                className="max-w-[786px] p-5 lg:p-14"
            >
                <PractitionerSaysForm submitHandler={handleSave} isLoading={loading} defaultValues={{}} />
            </Modal>
        </>
    );
}
