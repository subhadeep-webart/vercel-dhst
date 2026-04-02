import GradientWrapper from "@/components/wrapper/GradientWrapper";
import styles from "../../../wrapper/GradientWrapper/gradientwrapper.module.css";
import TargetedTreatment from "@/components/common/TargetedTreatment";

const ScienceBehindOne = ({ section_two, treatment_procedures }) => {
  const { section_description, section_highlight_text, section_title } =
    section_two?.data?.section_two || {};

  return (
    <GradientWrapper
      id="gradient_center_2_before"
      className={styles.gradient_wrapper_container_2_before}
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

            {/* <div className="flex flex-col gap-12 2xl:gap-16">
              <TargetedTreatment title={"title"} description={"description"} />
              <TargetedTreatment
                classname={"flex-row-reverse"}
                title={"title"}
                description={"description"}
              />
              <TargetedTreatment title={"title"} description={"description"} />
            </div> */}
            <div className="flex flex-col gap-12 2xl:gap-16">
              {treatment_procedures?.data?.treatment_procedures?.map(
                (item, index) => (
                  <TargetedTreatment
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    img={item.icon}
                    classname={index % 2 !== 0 ? "flex-row-reverse" : ""}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </GradientWrapper>
  );
};

export default ScienceBehindOne;
