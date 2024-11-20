import AboutSection from "../Components/AboutSection";
import Banner from "../Components/Banner";
import FeedbackSection from "../Components/FeedbackSection";
import FeatureSection from "../Components/FeatureSection";
import SuccessSection from "../Components/SuccessSection";
import Title from "../Components/Title";
import JoinSection from "../Components/JoinSection";

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
