import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import siteSettings from "@/model/siteSettings";
import { revalidatePath } from "next/cache";

export async function GET() {
    try {
        await dbConnect();

        const settings = await siteSettings.findOne();

        return NextResponse.json({
            success: true,
            data: settings || null,
        });
    } catch (error) {
        console.error("GET ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch site settings",
            },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        await dbConnect();

        const body = await req.json();

        if (!body?.contact?.email || !body?.contact?.phone) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email and Phone are required",
                },
                { status: 400 }
            );
        }

        const updatedSettings = await siteSettings.findOneAndUpdate(
            {},
            body,
            {
                new: true,
                upsert: true,
            }
        );
        revalidatePath("/admin/site-settings");
        return NextResponse.json({
            success: true,
            data: updatedSettings,
            message: "Site settings saved successfully",
        });
    } catch (error) {
        console.error("POST ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to save site settings",
            },
            { status: 500 }
        );
    }
}