import { END_POINTS } from "@/lib/endPoints";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const usePractionerSays = () => {
    const [practionerSays, setPractionerSays] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 🔄 FETCH
    const fetchPractionerSays = async () => {
        try {
            setLoading(true);
            const res = await fetch(END_POINTS.practioner_says);
            const json = await res.json();

            if (!json.success) throw new Error(json.message);

            setPractionerSays(json.data);
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    // ➕ ADD
    const addPractionerSay = async (data) => {
        try {
            setLoading(true);

            const res = await fetch(END_POINTS.practioner_says, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            setPractionerSays((prev) => [...prev, json.data]);
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
    const updatePractionerSay = async (id, data) => {
        try {
            setLoading(true);

            const res = await fetch(END_POINTS.practioner_says, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id, ...data }),
            });

            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            setPractionerSays((prev) =>
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
    const deletePractionerSay = async (id) => {
        try {
            setLoading(true);

            const res = await fetch(
                `${END_POINTS.practioner_says}?id=${id}`,
                { method: "DELETE" }
            );

            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            setPractionerSays((prev) =>
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
        fetchPractionerSays();
    }, []);

    return {
        practionerSays,
        loading,
        error,
        fetchPractionerSays,
        addPractionerSay,
        updatePractionerSay,
        deletePractionerSay,
    };
};