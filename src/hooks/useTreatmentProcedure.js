import { END_POINTS } from "@/lib/endPoints";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useTreatmentProcedure = () => {
    const [treatmentProcedures, setTreatmentProcedures] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 🔄 FETCH
    const fetchTreatmentProcedures = async () => {
        try {
            setLoading(true);
            const res = await fetch(END_POINTS.treatment_procedures);
            const json = await res.json();

            if (!json.success) throw new Error(json.message);

            setTreatmentProcedures(json.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // ➕ ADD
    const addTreatmentProcedure = async (data) => {
        try {
            setLoading(true);

            const res = await fetch(END_POINTS.treatment_procedures, {
                method: "POST",
                body: JSON.stringify(data),
            });

            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            setTreatmentProcedures((prev) => [...prev, json.data]);
            toast.success(json?.message ?? "Added successfully");

            return json.data;
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    // ✏️ UPDATE
    const updateTreatmentProcedure = async (id, data) => {
        try {
            setLoading(true);

            const res = await fetch(END_POINTS.treatment_procedures, {
                method: "PUT",
                body: JSON.stringify({ id, ...data }),
            });

            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            setTreatmentProcedures((prev) =>
                prev.map((item) =>
                    item.id === id ? json.data : item
                )
            );

            return json.data;
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // ❌ DELETE
    const deleteTreatmentProcedure = async (id) => {
        try {
            setLoading(true);

            const res = await fetch(
                `${END_POINTS.treatment_procedures}?id=${id}`,
                { method: "DELETE" }
            );

            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            setTreatmentProcedures((prev) =>
                prev.filter((item) => item.id !== id)
            );
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // 🔄 AUTO FETCH
    useEffect(() => {
        fetchTreatmentProcedures();
    }, []);

    return {
        treatmentProcedures,
        loading,
        error,
        fetchTreatmentProcedures,
        addTreatmentProcedure,
        updateTreatmentProcedure,
        deleteTreatmentProcedure,
    };
};