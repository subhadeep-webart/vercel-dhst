import { error, success } from "@/lib/responseHandler";
import { cookies } from "next/headers";

export async function POST() {
    try {
        const cookieStore = await cookies();

        // 🔥 Remove cookie
        cookieStore.set({
            name: "adminToken",
            value: "",
            httpOnly: true,
            expires: new Date(0), // ⛔ expire immediately
            path: "/",
        });

        return success("Logged out successfully");
    } catch (err) {
        return error({ error: err.message });
    }
}