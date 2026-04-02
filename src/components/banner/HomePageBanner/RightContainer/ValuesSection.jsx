import ValuesCard from "@/components/common/ValuesCard";

const ValuesSection = ({ banner_info }) => {
  console.log("banner_info", banner_info);
  return (
    // <div className="flex gap-5 2xl:gap-7">
    //   <ValuesCard value="95%" title="Client Improvement Rate" />
    //   <div className="flex gap-2">
    //     <div className="h-20 w-0.5 bg-ash-rose mt-20"></div>
    //     <div className="h-14 w-1 bg-ash-rose mt-32"></div>
    //   </div>

    //   <ValuesCard
    //     className="mt-12"
    //     value="10,000+"
    //     title="Assessments Completed"
    //   />

    //   <div className="flex gap-2">
    //     <div className="h-20 w-0.5 bg-ash-rose mt-32"></div>
    //     <div className="h-14 w-1 bg-ash-rose mt-44"></div>
    //   </div>
    //   <ValuesCard
    //     className="mt-24"
    //     value="20+"
    //     title="Years of Research & Practice"
    //   />
    // </div>

    <div className="flex gap-5 2xl:gap-7">
      {banner_info?.map((item, index) => {
        return (
          <div key={index} className="flex">
            <ValuesCard
              className={index === 1 ? "mt-12" : index === 2 ? "mt-24" : ""}
              value={item?.title}
              title={item?.description}
              icon={item?.icon}
            />

            {index !== banner_info.length - 1 && (
              <div className="flex gap-2 ml-5">
                <div
                  className={`h-20 w-0.5 bg-ash-rose ${
                    index === 0 ? "mt-20" : "mt-32"
                  }`}
                ></div>
                <div
                  className={`h-14 w-1 bg-ash-rose ${
                    index === 0 ? "mt-32" : "mt-44"
                  }`}
                ></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ValuesSection;
