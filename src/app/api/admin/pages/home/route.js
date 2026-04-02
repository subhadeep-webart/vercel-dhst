import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Page } from "@/model/page";
import { deepMerge } from "@/lib/db_helper";

export async function PUT(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { componentType, data } = body;

    // ✅ Validation
    if (!componentType) {
      throw new Error("componentType is required");
    }

    if (!data) {
      throw new Error("data is required");
    }

    const slug = "home";

    let page = await Page.findOne({ slug });

    // ✅ Create page if not exists
    if (!page) {
      page = await Page.create({
        title: "Home",
        slug,
        status: "draft",
        components: [],
      });
    }

    // ✅ Find component index
    const index = page.components.findIndex(
      (c) => c.type === componentType
    );

    if (index !== -1) {
      // ✅ UPDATE with deep merge
      page.components[index].data = deepMerge(
        page.components[index].data || {},
        data
      );
    } else {
      // ✅ CREATE NEW COMPONENT
      page.components.push({
        id: crypto.randomUUID(),
        type: componentType,
        order: page.components.length + 1,
        isVisible: true,
        data,
      });
    }

    await page.save();

    return NextResponse.json({
      success: true,
      message: "Saved successfully",
      data: page,
    });
  } catch (error) {
    console.error("PUT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}