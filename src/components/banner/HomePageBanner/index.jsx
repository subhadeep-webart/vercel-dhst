import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import style from "./homebanner.module.css";

const HomePageBanner = ({ bannerData = {} }) => {
  console.log("Banner Data===>", bannerData);
  const { banner_content } = bannerData?.data ?? {};
  console.log("Banner content", banner_content);
  return (
    <section className={`${style.home_banner_container}`}>
      <div className="container grid grid-cols-12 gap-2">
        <div className="col-span-6 pt-44">
          <LeftContainer banner_content={banner_content} />
        </div>
        <div className="col-span-6 pt-60">
          <RightContainer banner_content={banner_content} />
        </div>
      </div>
      {/* <div className="relative z-50 bg-white h-16">

            </div> */}
    </section>
  );
};

export default HomePageBanner;
