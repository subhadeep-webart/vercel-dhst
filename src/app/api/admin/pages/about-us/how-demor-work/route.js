import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Page } from "@/model/page";

const COMPONENT_TYPE = "workflow_steps";
const SLUG = "about_us";

// 🔍 Helper: get or create component
const getWorkflowStepsComponent = async () => {
    let page = await Page.findOne({ slug: SLUG });

    if (!page) {
        page = await Page.create({
            title: "About us",
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
                workflow_steps: [],
            },
        };

        page.components.push(component);
    }

    return { page, component };
};

// 📥 GET
export async function GET() {
    try {
        await dbConnect();

        const page = await Page.findOne({ slug: SLUG });

        const component = page?.components?.find(
            (c) => c.type === COMPONENT_TYPE
        );

        return NextResponse.json({
            success: true,
            data: component?.data?.workflow_steps || [],
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

// ➕ ADD
export async function POST(req) {
    try {
        await dbConnect();

        const body = await req.json();

        const { page, component } =
            await getWorkflowStepsComponent();

        const newItem = {
            id: crypto.randomUUID(),
            ...body,
        };

        if (!component.data) component.data = {};
        if (!component.data.workflow_steps)
            component.data.workflow_steps = [];

        component.data.workflow_steps.push(newItem);

        page.markModified("components");
        await page.save();

        return NextResponse.json({
            success: true,
            message: "Workflow step added",
            data: newItem,
        });
    } catch (error) {
        console.error("POST ERROR:", error);

        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

// ✏️ UPDATE
export async function PUT(req) {
    try {
        await dbConnect();

        const body = await req.json();
        const { id, ...rest } = body;

        if (!id) throw new Error("ID is required");

        const { page, component } =
            await getWorkflowStepsComponent();

        const items = component.data.workflow_steps;

        const index = items.findIndex((i) => i.id === id);

        if (index === -1)
            throw new Error("Workflow step not found");

        items[index] = {
            ...items[index],
            ...rest,
        };

        page.markModified("components");
        await page.save();

        return NextResponse.json({
            success: true,
            message: "Workflow step updated",
            data: items[index],
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

// ❌ DELETE
export async function DELETE(req) {
    try {
        await dbConnect();

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) throw new Error("ID is required");

        const { page, component } =
            await getWorkflowStepsComponent();

        component.data.workflow_steps =
            component.data.workflow_steps.filter(
                (i) => i.id !== id
            );

        page.markModified("components");
        await page.save();

        return NextResponse.json({
            success: true,
            message: "Workflow step deleted",
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}