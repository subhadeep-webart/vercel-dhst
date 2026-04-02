import { END_POINTS } from "@/lib/endPoints";
import { useState } from "react";
import toast from "react-hot-toast";

export const useAboutusSaveSection = () => {
    const [loading, setLoading] = useState(false);

    const saveSection = async ({ componentType, data }) => {
        try {
            setLoading(true);

            const res = await fetch(END_POINTS.about_us, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    componentType,
                    data,
                }),
            });

            const result = await res.json();

            if (result?.success) {
                toast.success(result?.message ?? "Page saved successfully");
            } else {
                toast.error(result?.message ?? "Page update failed");
            }

            return result; // ✅ important for chaining
        } catch (err) {
            console.error("Save section error:", err);
            toast.error(err?.message ?? "Save section failed");
        } finally {
            setLoading(false);
        }
    };

    return { saveSection, loading };
};