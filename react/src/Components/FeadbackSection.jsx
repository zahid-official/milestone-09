import SliderSection from "./SliderSection";
import feadback from "/assets/feadback-01.png";

const FeadbackSection = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-10 w-11/12 mx-auto py-16">
      <div className="flex-1">
        <img src={feadback} alt="" />
      </div>

      <div className="flex-1">
        {/* title */}
        <div className="text-center">
          <h3 className="text-[#0683a2] font-bold mb-3">FeadBack</h3>
          <h2 className="sm:text-4xl text-3xl font-bold">
            Our Students Are Our Strength. <br className="xl:block hidden" />
            See What They Say About Us
          </h2>
        </div>

        <SliderSection></SliderSection>
      </div>
    </div>
  );
};

export default FeadbackSection;
