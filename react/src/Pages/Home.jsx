import AboutSection from "../Components/Home/AboutSection";
import Banner from "../Components/Home/Banner";
import FeedbackSection from "../Components/Home/FeedbackSection";
import FeatureSection from "../Components/Home/FeatureSection";
import SuccessSection from "../Components/Home/SuccessSection";
import Title from "../Components/Home/Title";
import JoinSection from "../Components/Home/JoinSection";

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <section>
        <Banner></Banner>
      </section>

      {/* About Section */}
      <section>
        <Title
          section={"About Elex"}
          heading1={"Upgrade your learning Skills"}
          heading2={"and Upgrade Life"}
        ></Title>
        <AboutSection></AboutSection>
      </section>

      {/* Success Section */}
      <section className="bg-[#eef5f7] mt-10">
        <Title
          section={"Start To Success"}
          heading1={"Start your journey & Achieve your goal"}
          heading2={""}
        ></Title>
        <SuccessSection></SuccessSection>
      </section>

      {/* Feature Section */}
      <section>
        <Title
          section={"Our Features"}
          heading1={"Why You Should Choose Elex"}
          heading2={""}
        ></Title>
        <FeatureSection></FeatureSection>
      </section>

      {/* feedback Section */}
      <section className="bg-[#eef5f7] mt-10 py-16">
        <FeedbackSection></FeedbackSection>
      </section>

      {/* Join Us */}
      <section>
        <JoinSection></JoinSection>
      </section>
    </div>
  );
};

export default Home;
