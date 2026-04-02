"use client";

import { END_POINTS } from "@/lib/endPoints";
import { useEffect, useState, useCallback, useRef } from "react";

export const usePageData = ({ slug, componentType }) => {
    const [data, setData] = useState(null);
    const [type, setType] = useState(null); // "page" | "component"
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const controllerRef = useRef(null);

    const fetchData = useCallback(async () => {
        if (!slug) return;

        // 🔥 cancel previous request if exists
        if (controllerRef.current) {
            controllerRef.current.abort();
        }

        const controller = new AbortController();
        controllerRef.current = controller;

        try {
            setLoading(true);
            setError(null);

            let url = `${END_POINTS.pages_data}?slug=${slug}`;

            if (componentType) {
                url += `&componentType=${componentType}`;
            }

            const res = await fetch(url, {
                signal: controller.signal,
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || "Something went wrong");
            }

            // ✅ conditional data handling
            setData(
                componentType
                    ? result.data?.data
                    : result.data?.components
            );

            setType(result.type);
        } catch (err) {
            if (err.name !== "AbortError") {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    }, [slug, componentType]);

    useEffect(() => {
        fetchData();

        // 🧹 cleanup on unmount
        return () => {
            if (controllerRef.current) {
                controllerRef.current.abort();
            }
        };
    }, [fetchData]);

    return {
        data,
        type,
        loading,
        error,
        refetch: fetchData,
    };
};