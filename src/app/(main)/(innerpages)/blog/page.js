import InnerPageBanner from "@/components/banner/InnerPageBanner";
import BlogsSection from "@/components/blog/BlogsSection";


const BlogPage = () => {
    return (
        <>
            <InnerPageBanner value1="All " value2="Blogs" description="Specialized d-hotspot treatment to identify and treat the root cause of your distress, discomfort, and pain with targeted bodywork techniques." />
            <BlogsSection />
        </>
    )
};

export default BlogPage;