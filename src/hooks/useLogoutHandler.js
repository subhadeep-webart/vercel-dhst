import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useLogoutHandler = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            setLoading(true);

            const res = await fetch("/api/admin/logout", {
                method: "POST",
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.message || "Logout failed");
            }

            toast.success("Logged out successfully");

            // 🔥 redirect after logout
            router.push("/admin/login");

            // Optional: refresh to clear client state
            router.refresh();

        } catch (err) {
            console.error(err);
            toast.error(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return {
        handleLogout,
        loading,
    };
};