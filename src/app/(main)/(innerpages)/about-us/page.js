"use client";

import ExperienceSection from "@/components/aboutus/ExperienceSection";
import MindBehindSection from "@/components/aboutus/MindBehindSection";
import PowerOfDhstSection from "@/components/aboutus/PowerOfDhstSection";
import ScienceBehindOne from "@/components/aboutus/ScienceBehindSuccessSection/ScienceBehindOne";
import ScienceBehindTwo from "@/components/aboutus/ScienceBehindSuccessSection/ScienceBehindTwo";
import UnderstandingRoleSection from "@/components/aboutus/UnderstandingRoleSection";
import InnerPageBanner from "@/components/banner/InnerPageBanner";
import { ABOUT_PAGE_CONTENT_TYPE } from "@/constants/pages";
import { usePageData } from "@/hooks/usePageData";
import { mapComponentsByType } from "@/lib/pageUtils";

const AboutUsPage = () => {
  const { data: aboutPageData, loading } = usePageData({ slug: "about_us" });

  if (loading) return;

  const aboutPageComponent = mapComponentsByType(aboutPageData || []);
  const banner = aboutPageComponent?.[ABOUT_PAGE_CONTENT_TYPE.banner];
  const section_one = aboutPageComponent?.[ABOUT_PAGE_CONTENT_TYPE.section_one];
  const section_two = aboutPageComponent?.[ABOUT_PAGE_CONTENT_TYPE.section_two];
  const treatment_procedures =
    aboutPageComponent?.[ABOUT_PAGE_CONTENT_TYPE.treatment_procedures];
  const workflow_steps =
    aboutPageComponent?.[ABOUT_PAGE_CONTENT_TYPE.workflow_steps];
  const dhst_theraphy_hotspot =
    aboutPageComponent?.[ABOUT_PAGE_CONTENT_TYPE.dhst_theraphy_hotspot];
  const mind_behind_the_therapy =
    aboutPageComponent?.[ABOUT_PAGE_CONTENT_TYPE.mind_behind_the_therapy];
  const practitioner_says =
    aboutPageComponent?.[ABOUT_PAGE_CONTENT_TYPE.practitioner_says];
  const dhst_specalist_section =
    aboutPageComponent?.[ABOUT_PAGE_CONTENT_TYPE.dhst_specalist_section];

  console.log("dhst_specalist_section", dhst_specalist_section);

  console.log("aboutPageData", aboutPageData);
  const { banner_text, banner_highlight_text, banner_description, image_url } =
    banner?.data?.banner || {};

  return (
    <>
      <InnerPageBanner
        value1={banner_text}
        value2={banner_highlight_text}
        description={banner_description}
        img={image_url}
      />
      <PowerOfDhstSection section_one={section_one} />
      <ScienceBehindOne
        section_two={section_two}
        treatment_procedures={treatment_procedures}
      />
      <ScienceBehindTwo workflow_steps={workflow_steps} />
      <ExperienceSection dhst_theraphy_hotspot={dhst_theraphy_hotspot} />
      <MindBehindSection
        mind_behind_the_therapy={mind_behind_the_therapy}
        practitioner_says={practitioner_says}
      />
      <UnderstandingRoleSection
        dhst_specalist_section={dhst_specalist_section}
      />
    </>
  );
};

export default AboutUsPage;
