import join from "/assets/Join.png";

const JoinSection = () => {
  return (
    <>
      <div className="hero bg-[#e5f5eb] py-10 xl:w-10/12 lg:w-11/12 mx-auto my-28 lg:rounded-2xl">
        <div className="hero-content gap-8 flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <img src={join} />
          </div>

          <div className="flex-1">
            <h1 className="sm:text-4xl text-2xl font-bold">
              Be A Member Of <span className="text-[#098b99]">Elex!</span> & Start Your Journey Today
            </h1>
            <p className="py-6">
            Join a global community of instructors who are shaping the future of learning on Elex. With our powerful tools and expert resources, you can teach what you love and make a lasting impact. Achieve your dreams and inspire your journey starts here!
            </p>
            <button className="btn custom-btn mt-5 text-xl h-14 sm:px-16">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinSection;