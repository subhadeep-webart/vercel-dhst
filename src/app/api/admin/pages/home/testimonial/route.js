import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Page } from "@/model/page";

const COMPONENT_TYPE = "testimonial";
const SLUG = "home";

// 🔍 Helper: get or create component
const getTestimonialsComponent = async () => {
    let page = await Page.findOne({ slug: SLUG });

    if (!page) {
        page = await Page.create({
            title: "Home",
            slug: SLUG,
            status: "draft",
            components: [],
        });
    }

    let component = page.components.find(
        (c) => c.type === COMPONENT_TYPE
    );

    if (!component) {
        component = {
            id: crypto.randomUUID(),
            type: COMPONENT_TYPE,
            order: page.components.length + 1,
            isVisible: true,
            data: {
                section_heading: {},
                insights: [],
            },
        };

        page.components.push(component);
    }

    return { page, component };
};

// get insights
export async function GET() {
    try {
        await dbConnect();

        const page = await Page.findOne({ slug: SLUG });

        const component = page?.components?.find(
            (c) => c.type === COMPONENT_TYPE
        );

        return NextResponse.json({
            success: true,
            data: component?.data?.testimonials || [],
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        await dbConnect();

        const body = await req.json();

        const { page, component } = await getTestimonialsComponent();

        const newInsight = {
            id: crypto.randomUUID(),
            ...body,
        };

        // 🔥 FIX: ensure structure exists
        if (!component.data) {
            component.data = {};
        }

        if (!component.data.testimonials) {
            component.data.testimonials = [];
        }

        page.markModified("components");

        component.data.testimonials.push(newInsight);

        await page.save();

        return NextResponse.json({
            success: true,
            message: "Insight added",
            data: newInsight,
        });
    } catch (error) {
        console.error("POST ERROR:", error);

        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

// Update the insight
export async function PUT(req) {
    try {
        await dbConnect();

        const body = await req.json();
        const { id, ...rest } = body;

        if (!id) throw new Error("Insight ID is required");

        const { page, component } = await getTestimonialsComponent();

        const insights = component.data.insights;

        const index = insights.findIndex((i) => i.id === id);

        if (index === -1) throw new Error("Insight not found");

        insights[index] = {
            ...insights[index],
            ...rest,
        };

        await page.save();

        return NextResponse.json({
            success: true,
            message: "Insight updated",
            data: insights[index],
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}
// remove insight
export async function DELETE(req) {
    try {
        await dbConnect();

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) throw new Error("Insight ID is required");

        const { page, component } = await getTestimonialsComponent();

        page.markModified("components");

        component.data.testimonials = component.data.testimonials.filter(
            (i) => i.id !== id
        );

        await page.save();

        return NextResponse.json({
            success: true,
            message: "Insight deleted",
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}