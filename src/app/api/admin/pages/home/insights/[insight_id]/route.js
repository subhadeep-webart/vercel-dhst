import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Page } from "@/model/page";

const COMPONENT_TYPE = "expert_insight";
const SLUG = "home";

const getInsightComponent = async () => {
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

// ✅ GET insight by ID
export async function GET(req, { params }) {
  try {
    await dbConnect();

    const { insight_id } = await params;

    if (!insight_id) {
      return NextResponse.json(
        { success: false, message: "Insight ID is required" },
        { status: 400 },
      );
    }

    const { component } = await getInsightComponent();

    const insight = component?.data?.insights?.find((i) => i.id === insight_id);

    if (!insight) {
      return NextResponse.json(
        { success: false, message: "Insight not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: insight,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
