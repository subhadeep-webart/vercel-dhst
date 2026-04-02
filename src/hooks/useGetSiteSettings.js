"use client";

import { END_POINTS } from "@/lib/endPoints";
import { useEffect, useState } from "react";

export function useGetSiteSettings() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch(END_POINTS.site_settings);

                const json = await res.json();

                if (!res.ok) {
                    throw new Error(json.message || "Something went wrong");
                }

                setData(json.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSettings();
    }, []);

    return { data, loading, error };
}