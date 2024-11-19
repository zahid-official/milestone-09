import AboutSection from "../Components/AboutSection";
import Banner from "../Components/Banner";
import Title from "../Components/Title";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Title section={'About Elex'} heading1={'Upgrade your learning Skills'} heading2={'and Upgrade Life'}></Title>
      <AboutSection></AboutSection>

    </div>
  );
};

export default Home;
