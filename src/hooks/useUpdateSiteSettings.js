import { END_POINTS } from "@/lib/endPoints";
import { useState } from "react";

export const useUpdateSiteSettings = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateSettings = async (formData) => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch(END_POINTS.site_settings, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        updateSettings,
        loading,
        error,
    };
};