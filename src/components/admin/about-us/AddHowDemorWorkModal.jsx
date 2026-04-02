"use client";

import Button from "@/components/ui/admin/Button";
import { Modal } from "@/components/ui/admin/modal";
import { CircleFadingPlus } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import HowDemorWorkForm from "./HowDemorWorkForm";

export default function AddHowDemorWorkModal({ handleAddWorkProcedure, loading }) {
    const { isOpen, openModal, closeModal } = useModal();
    const handleSave = async (data) => {
        // Handle save logic here
        await handleAddWorkProcedure(data)
        closeModal();
    };
    return (
        <>
            <Button size="sm" onClick={openModal} startIcon={<CircleFadingPlus />}>
                Add demor work steps
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={closeModal}
                className="max-w-[786px] p-5 lg:p-14"
            >
                <HowDemorWorkForm submitHandler={handleSave} isLoading={loading} defaultValues={{}} />
            </Modal>
        </>
    );
}
