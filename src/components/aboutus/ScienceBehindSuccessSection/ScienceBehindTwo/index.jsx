import styles from "./sciencebehind.module.css";
import styles1 from "../../../wrapper/GradientWrapper/gradientwrapper.module.css";
import GradientWrapper from "@/components/wrapper/GradientWrapper";
import BehindSuccess from "@/components/common/BehindSucces";

const ScienceBehindTwo = ({ workflow_steps }) => {
  const { section_description, section_highlight_text, section_title } =
    workflow_steps?.data?.section_heading || {};

  return (
    <GradientWrapper
      id="gradient_center"
      className={styles1.gradient_wrapper_container_1}
    >
      <section className="py-16">
        <div className="container w-full h-auto">
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-12 gap-2">
              <h2 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16 col-span-6">
                {section_title}
                <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">
                  {" "}
                  {section_highlight_text}
                </span>
              </h2>
              <p className="text-secondary text-base 2xl:text-xl leading-6 2xl:leading-8 col-span-6">
                {section_description}
              </p>
            </div>
            {/* <div
              className={`${styles.behind_success_wrapper} py-11 2xl:py-13 flex flex-col gap-8 2xl:gap-10`}
            >
              <BehindSuccess
                title="Assess the System, ATS Integration"
                description="Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos  sit amet, consectetur adipiscing elit. Nunc vulputate libero  himenaeos."
              />
              <BehindSuccess
                title="Identify the DEMOR HotSpot"
                description="Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos  sit amet, consectetur adipiscing elit. Nunc vulputate libero  himenaeos."
              />
              <BehindSuccess
                title="Apply DHST Techniques"
                description="Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos  sit amet, consectetur adipiscing elit. Nunc vulputate libero  himenaeos."
              />
              <BehindSuccess
                title="Integrate the System"
                description="Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos  sit amet, consectetur adipiscing elit. Nunc vulputate libero  himenaeos."
              />
            </div> */}
            <div
              className={`${styles.behind_success_wrapper} py-11 2xl:py-13 flex flex-col gap-8 2xl:gap-10`}
            >
              {workflow_steps?.data?.workflow_steps?.map((step) => (
                <BehindSuccess
                  key={step.id}
                  title={step.title}
                  description={step.description}
                  img={step.image_url}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </GradientWrapper>
  );
};

export default ScienceBehindTwo;
