import dbConnect from "@/lib/mongodb";
import { Page } from "@/model/page";
import { NextResponse } from "next/server";

// GET BY SLUG
export async function GET(req) {
    try {
        await dbConnect();

        const { searchParams } = new URL(req.url);

        const slug = searchParams.get("slug");
        const componentType = searchParams.get("componentType");

        // ✅ Validation
        if (!slug) {
            throw new Error("slug is required");
        }

        // 🔥 CASE 1: Only slug → return full page
        if (!componentType) {
            const page = await Page.findOne({ slug });

            if (!page) {
                return NextResponse.json(
                    { success: false, message: "Page not found" },
                    { status: 404 }
                );
            }

            return NextResponse.json({
                success: true,
                type: "page",
                data: page,
            });
        }

        // 🔥 CASE 2: slug + componentType → return specific component (optimized)
        const page = await Page.findOne(
            { slug, "components.type": componentType },
            { "components.$": 1 }
        );

        if (!page || !page.components?.length) {
            return NextResponse.json(
                { success: false, message: "Component not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            type: "component",
            data: page.components[0],
        });

    } catch (error) {
        console.error("GET ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Something went wrong",
            },
            { status: 500 }
        );
    }
}