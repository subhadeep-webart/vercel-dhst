import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Page } from "@/model/page";

const COMPONENT_TYPE = "testimonial";
const SLUG = "home";

// ✅ GET testimonial by ID
export async function GET(req, { params }) {
  try {
    await dbConnect();

    const { testimonial_id } = await params;

    if (!testimonial_id) {
      return NextResponse.json(
        { success: false, message: "Testimonial ID is required" },
        { status: 400 },
      );
    }

    // 🔥 READ ONLY (no creation here)
    const page = await Page.findOne({ slug: SLUG });

    if (!page) {
      return NextResponse.json(
        { success: false, message: "Page not found" },
        { status: 404 },
      );
    }

    const component = page.components.find((c) => c.type === COMPONENT_TYPE);

    if (!component) {
      return NextResponse.json(
        { success: false, message: "Component not found" },
        { status: 404 },
      );
    }

    const testimonial = component.data?.testimonials?.find(
      (t) => t.id === testimonial_id,
    );

    if (!testimonial) {
      return NextResponse.json(
        { success: false, message: "Testimonial not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
