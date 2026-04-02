"use client";

import CommonButton from "@/components/common/CommonButton";
import ValuesSection from "./ValuesSection";
import { useRouter } from "next/navigation";

const RightContainer = ({ banner_content }) => {
  const router = useRouter();
  const {
    banner_button_text = "",
    banner_button_url = "#",
    banner_text = "",
    banner_highlight_text = "",
    banner_description = "",
    banner_info = [],
  } = banner_content || {};
  return (
    <div className="flex flex-col gap-13">
      <div className="flex flex-col gap-6">
        <h1 className="text-foreground text-3xl 2xl:text-5xl leading-14 2xl:leading-16">
          {banner_text}
          <span className="text-autumn-leaves text-2xl 2xl:text-4xl italic">
            {" "}
            {banner_highlight_text}
          </span>
        </h1>
        <p className="text-secondary text-base 2xl:text-xl">
          {banner_description}
        </p>
      </div>

      <CommonButton
        title={banner_button_text}
        className={"w-60"}
        onClick={() => router.push(banner_button_url)}
      />
      <ValuesSection banner_info={banner_info} />
    </div>
  );
};

export default RightContainer;
