import photo01 from "/assets/photo01.png";

const AboutSection = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content gap-8 flex-col lg:flex-row-reverse">
          <img
            src={photo01}
          />
          <div>
            <h1 className="sm:text-4xl text-2xl font-bold">We Are <span className="text-[#098b99]">Elex!</span> The Best Online Learning Platform</h1>
            <p className="py-6">
            Elexs mission is to make language learning accessible, engaging, and effective for everyone. We provide personalized lessons, interactive tools, and a supportive community to help users master new languages, build confidence, and break down communication barriers.
            </p>
            <p>To learn vocabulary, Elex offers a range of methods, including flashcards, spaced repetition, and context-based exercises. These techniques allow users to effectively memorize and apply new words in real-life situations. The platform adapts to each users progress, ensuring efficient vocabulary building and long-term retention.</p>
            <button className="btn custom-btn mt-5 text-xl h-14 sm:px-16">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
