import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Page } from "@/model/page";

const COMPONENT_TYPE = "treatment_procedures";
const SLUG = "about_us";

// 🔍 Helper: get or create component
const getTreatmentProcedureComponent = async () => {
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
                treatment_procedures: [],
            },
        };

        page.components.push(component);
    }

    return { page, component };
};

// 📥 GET treatment procedures
export async function GET() {
    try {
        await dbConnect();

        const page = await Page.findOne({ slug: SLUG });

        const component = page?.components?.find(
            (c) => c.type === COMPONENT_TYPE
        );

        return NextResponse.json({
            success: true,
            data: component?.data?.treatment_procedures || [],
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

// ➕ ADD treatment procedure
export async function POST(req) {
    try {
        await dbConnect();

        const body = await req.json();

        const { page, component } =
            await getTreatmentProcedureComponent();

        const newItem = {
            id: crypto.randomUUID(),
            ...body,
        };

        // 🔥 ensure structure
        if (!component.data) {
            component.data = {};
        }

        if (!component.data.treatment_procedures) {
            component.data.treatment_procedures = [];
        }

        component.data.treatment_procedures.push(newItem);

        page.markModified("components");
        await page.save();

        return NextResponse.json({
            success: true,
            message: "Treatment procedure added",
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

// ✏️ UPDATE treatment procedure
export async function PUT(req) {
    try {
        await dbConnect();

        const body = await req.json();
        const { id, ...rest } = body;

        if (!id) throw new Error("ID is required");

        const { page, component } =
            await getTreatmentProcedureComponent();

        const items = component.data.treatment_procedures;

        const index = items.findIndex((i) => i.id === id);

        if (index === -1)
            throw new Error("Treatment procedure not found");

        items[index] = {
            ...items[index],
            ...rest,
        };

        page.markModified("components");
        await page.save();

        return NextResponse.json({
            success: true,
            message: "Treatment procedure updated",
            data: items[index],
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

// ❌ DELETE treatment procedure
export async function DELETE(req) {
    try {
        await dbConnect();

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) throw new Error("ID is required");

        const { page, component } =
            await getTreatmentProcedureComponent();

        component.data.treatment_procedures =
            component.data.treatment_procedures.filter(
                (i) => i.id !== id
            );

        page.markModified("components");
        await page.save();

        return NextResponse.json({
            success: true,
            message: "Treatment procedure deleted",
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}