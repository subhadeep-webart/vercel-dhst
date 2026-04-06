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

  let component = page.components.find((c) => c.type === COMPONENT_TYPE);

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

    const component = page?.components?.find((c) => c.type === COMPONENT_TYPE);

    return NextResponse.json({
      success: true,
      data: component?.data?.testimonials || [],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    const { page, component } = await getTestimonialsComponent();

    const newTestimonial = {
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

    component.data.testimonials.push(newTestimonial);

    await page.save();

    return NextResponse.json({
      success: true,
      message: "Testimonial added",
      data: newTestimonial,
    });
  } catch (error) {
    console.error("POST ERROR:", error);

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}

// Update the testimonial
export async function PUT(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { id, ...rest } = body;

    if (!id) throw new Error("Testimonial ID is required");

    const { page, component } = await getTestimonialsComponent();

    const testimonials = component.data.testimonials;

    const index = testimonials.findIndex((i) => i.id === id);

    if (index === -1) throw new Error("Testimonial not found");

    testimonials[index] = {
      ...testimonials[index],
      ...rest,
    };

    page.markModified("components");

    await page.save();

    return NextResponse.json({
      success: true,
      message: "Testimonial updated",
      data: testimonials[index],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
// remove testimonial
export async function DELETE(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) throw new Error("Testimonial ID is required");

    const { page, component } = await getTestimonialsComponent();

    page.markModified("components");

    component.data.testimonials = component.data.testimonials.filter(
      (i) => i.id !== id,
    );

    await page.save();

    return NextResponse.json({
      success: true,
      message: "Testimonial deleted",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
