import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Page } from "@/model/page";

const COMPONENT_TYPE = "practitioner_says";
const SLUG = "about_us";

// 🔍 Helper: get or create component
const getPractitionerSaysComponent = async () => {
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
                practitioner_says: [],
            },
        };

        page.components.push(component);
    }

    return { page, component };
};

// 📥 GET practitioner says
export async function GET() {
    try {
        await dbConnect();

        const page = await Page.findOne({ slug: SLUG });

        const component = page?.components?.find(
            (c) => c.type === COMPONENT_TYPE
        );

        return NextResponse.json({
            success: true,
            data: component?.data?.practitioner_says || [],
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

// ➕ ADD practitioner say
export async function POST(req) {
    try {
        await dbConnect();

        const body = await req.json();

        const { page, component } =
            await getPractitionerSaysComponent();

        const newItem = {
            id: crypto.randomUUID(),
            ...body,
        };

        // 🔥 ensure structure
        if (!component.data) {
            component.data = {};
        }

        if (!component.data.practitioner_says) {
            component.data.practitioner_says = [];
        }

        component.data.practitioner_says.push(newItem);

        page.markModified("components");
        await page.save();

        return NextResponse.json({
            success: true,
            message: "Practitioner say added",
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

// ✏️ UPDATE practitioner say
export async function PUT(req) {
    try {
        await dbConnect();

        const body = await req.json();
        const { id, ...rest } = body;

        if (!id) throw new Error("ID is required");

        const { page, component } =
            await getPractitionerSaysComponent();

        const items = component.data.practitioner_says;

        const index = items.findIndex((i) => i.id === id);

        if (index === -1)
            throw new Error("Practitioner say not found");

        items[index] = {
            ...items[index],
            ...rest,
        };

        page.markModified("components");
        await page.save();

        return NextResponse.json({
            success: true,
            message: "Practitioner say updated",
            data: items[index],
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

// ❌ DELETE practitioner say
export async function DELETE(req) {
    try {
        await dbConnect();

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) throw new Error("ID is required");

        const { page, component } =
            await getPractitionerSaysComponent();

        component.data.practitioner_says =
            component.data.practitioner_says.filter(
                (i) => i.id !== id
            );

        page.markModified("components");
        await page.save();

        return NextResponse.json({
            success: true,
            message: "Practitioner say deleted",
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}