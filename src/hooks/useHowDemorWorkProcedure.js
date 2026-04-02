import { END_POINTS } from "@/lib/endPoints";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useHowDemorWorkProcedures = () => {
    const [howDemorWorkProcedures, setHowDemorWorkProcedures] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 🔄 FETCH
    const fetchHowDemorWorkProcedures = async () => {
        try {
            setLoading(true);
            const res = await fetch(END_POINTS.how_demor_work);
            const json = await res.json();

            if (!json.success) throw new Error(json.message);

            setHowDemorWorkProcedures(json.data);
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    // ➕ ADD
    const addHowDemorWorkProcedure = async (data) => {
        try {
            setLoading(true);

            const res = await fetch(END_POINTS.how_demor_work, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            setHowDemorWorkProcedures((prev) => [...prev, json.data]);
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
    const updateHowDemorWorkProcedure = async (id, data) => {
        try {
            setLoading(true);

            const res = await fetch(END_POINTS.how_demor_work, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id, ...data }),
            });

            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            setHowDemorWorkProcedures((prev) =>
                prev.map((item) =>
                    item.id === id ? json.data : item
                )
            );

            toast.success(json?.message ?? "Updated successfully");

            return json.data;
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    // ❌ DELETE
    const deleteHowDemorWorkProcedure = async (id) => {
        try {
            setLoading(true);

            const res = await fetch(
                `${END_POINTS.how_demor_work}?id=${id}`,
                { method: "DELETE" }
            );

            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            setHowDemorWorkProcedures((prev) =>
                prev.filter((item) => item.id !== id)
            );

            toast.success(json?.message ?? "Deleted successfully");
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    // 🔄 AUTO FETCH
    useEffect(() => {
        fetchHowDemorWorkProcedures();
    }, []);

    return {
        howDemorWorkProcedures,
        loading,
        error,
        fetchHowDemorWorkProcedures,
        addHowDemorWorkProcedure,
        updateHowDemorWorkProcedure,
        deleteHowDemorWorkProcedure,
    };
};