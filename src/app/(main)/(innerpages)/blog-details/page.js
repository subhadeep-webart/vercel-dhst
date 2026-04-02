import InnerPageBanner from "@/components/banner/InnerPageBanner";
import DetailsSection from "@/components/blog/BlogDetails/DetailsSection";
import MoreToDiscoverSection from "@/components/blog/BlogDetails/MoreToDiscoverSection";


const BlogDetailsPage = () => {
    return (
        <>
            <InnerPageBanner value1="All" value2="Blogs" description="Specialized in holistic treatment to identify and treat the root cause
                    of your distress, discomfort, and pain with targeted bodywork techniques."/>
            <DetailsSection />
            <MoreToDiscoverSection />
        </>
    )
};

export default BlogDetailsPage;