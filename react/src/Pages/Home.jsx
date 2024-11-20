import AboutSection from "../Components/AboutSection";
import Banner from "../Components/Banner";
import SuccessSection from "../Components/SuccessSection";
import Title from "../Components/Title";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

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
    </div>
  );
};

export default Home;
