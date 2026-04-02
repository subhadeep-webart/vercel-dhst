import BlogCard from "../../common/BlogCard";
import GradientWrapper from "../../wrapper/GradientWrapper";
import styles from "../../wrapper/GradientWrapper/gradientwrapper.module.css"

const BlogsSection = () => {
    return (
        <GradientWrapper id="gradient_center_2" className={styles.gradient_wrapper_container_2}>
            <section className="pt-16 pb-32">
                <div className="container w-full h-auto flex flex-col gap-36 items-center">
                    <div className="max-w-[984px] w-full flex flex-col text-center gap-3">
                        <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16 ">Insights That Shape
                            <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">{" "} Performance</span></h2>
                        <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8 ">Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-5 2xl:gap-7">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                    <div className="grid grid-cols-3 gap-5 2xl:gap-7">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </section>
        </GradientWrapper>
    )
};

export default BlogsSection;