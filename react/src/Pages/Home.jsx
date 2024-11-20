import AboutSection from "../Components/Home/AboutSection";
import Banner from "../Components/Home/Banner";
import FeedbackSection from "../Components/Home/FeedbackSection";
import FeatureSection from "../Components/Home/FeatureSection";
import SuccessSection from "../Components/Home/SuccessSection";
import Title from "../Components/Home/Title";
import JoinSection from "../Components/Home/JoinSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <section data-aos="fade-left" data-aos-duration="1300">
        <Banner></Banner>
      </section>

      {/* About Section */}
      <section>
        <div data-aos="fade-up">
          <Title
            section={"About Elex"}
            heading1={"Upgrade your learning Skills"}
            heading2={"and Upgrade Life"}
          ></Title>
        </div>
        <AboutSection></AboutSection>
      </section>

      {/* Success Section */}
      <section className="bg-[#eef5f7] mt-10">
        <div data-aos="fade-up">
          <Title
            section={"Start To Success"}
            heading1={"Start your journey & Achieve your goal"}
            heading2={""}
          ></Title>
        </div>
        <SuccessSection></SuccessSection>
      </section>

      {/* Feature Section */}
      <section>
        <div data-aos="fade-up">
          <Title
            section={"Our Features"}
            heading1={"Why You Should Choose Elex"}
            heading2={""}
          ></Title>
        </div>
        <FeatureSection></FeatureSection>
      </section>

      {/* feedback Section */}
      <section className="bg-[#eef5f7] mt-10 py-16">
        <FeedbackSection></FeedbackSection>
      </section>

      {/* Join Us */}
      <section  data-aos="fade-up" data-aos-duration="2000"> 
        <JoinSection></JoinSection>
      </section>
    </div>
  );
};

export default Home;
