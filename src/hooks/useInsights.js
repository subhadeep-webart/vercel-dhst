import { END_POINTS } from "@/lib/endPoints";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useInsights = () => {
    const [insights, setInsights] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 📥 GET INSIGHTS
    const fetchInsights = async () => {
        try {
            setLoading(true);
            const res = await fetch(END_POINTS.insights);
            const json = await res.json();

            if (!json.success) throw new Error(json.message);

            setInsights(json.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // ➕ ADD INSIGHT
    const addInsight = async (data) => {
        try {
            setLoading(true);

            const res = await fetch(END_POINTS.insights, {
                method: "POST",
                body: JSON.stringify(data),
            });

            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            setInsights((prev) => [...prev, json.data]);
            toast.success(json?.message ?? "Insight added successfully");
            return json.data;
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    // ✏️ UPDATE INSIGHT
    const updateInsight = async (id, data) => {
        try {
            setLoading(true);

            const res = await fetch(END_POINTS.insights, {
                method: "PUT",
                body: JSON.stringify({ id, ...data }),
            });

            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            // ⚡ Update locally
            setInsights((prev) =>
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

    // ❌ DELETE INSIGHT
    const deleteInsight = async (id) => {
        try {
            setLoading(true);

            const res = await fetch(`${END_POINTS.insights}?id=${id}`, {
                method: "DELETE",
            });

            const json = await res.json();
            if (!json.success) throw new Error(json.message);

            // ⚡ Remove locally
            setInsights((prev) =>
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
        fetchInsights();
    }, []);

    return {
        insights,
        loading,
        error,
        fetchInsights,
        addInsight,
        updateInsight,
        deleteInsight,
    };
};