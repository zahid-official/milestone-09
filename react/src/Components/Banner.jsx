import banner01 from "/assets/banner01.png";
import banner02 from "/assets/banner02.png";
import banner03 from "/assets/banner03.png";

const Banner = () => {
  return (
    <>
      <div
        className="carousel w-full custom-gradient py-12 relative"
        style={{ height: `calc(100vh - 105px)` }}
      >
        {/* slider-01 */}
        <div id="item1" className="carousel-item w-full ">
          <div className="w-full text-white content-center">
            <div className="flex gap-10 lg:flex-row flex-col-reverse items-center mx-5 justify-around">
              <div className="flex-1 flex justify-center pb-12">
                <div>
                  <h1 className="sm:text-5xl text-3xl font-bold">
                    Enhance Your Language <br className="xl:block hidden" />
                    Learning Experience!
                  </h1>
                  <p className="py-6 xl:w-[550px] ">
                    Master Languages Online with Expert Instructors and Global
                    Resources! Learn at your own pace with personalized lessons,
                    interactive tools, and a global community. Start today and
                    unlock your potential!
                  </p>
                  <button className="btn bg-[#098a9b] hover:bg-[#18717c] text-white text-base border-none px-8">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="flex-1">
                <img src={banner01} className="" />
              </div>
            </div>
          </div>
        </div>

        {/* slider-02 */}
        <div id="item2" className="carousel-item w-full">
          <div className="w-full text-white content-center">
            <div className="flex gap-10 lg:flex-row-reverse flex-col-reverse items-center mx-5 justify-around">
              <div className="flex-1 flex justify-center pb-12">
                <div>
                  <h1 className="sm:text-5xl text-3xl font-bold">
                    Elevate Your Communication
                    <br className="xl:block hidden" />
                    Skills Journey!
                  </h1>
                  <p className="py-6 xl:w-[550px] ">
                    Learn Languages Online with Expert Instructors and Global
                    Resources! Progress at your own pace with personalized
                    lessons, interactive tools, and a supportive global
                    community. Whether you are a beginner or refining your
                    skills, our platform has everything you need to succeed.
                    Enjoy flexible learning, connect with experienced
                    instructors, and unlock your full potential as you embark on
                    your language journey.
                  </p>
                  <button className="btn bg-[#098a9b] hover:bg-[#18717c] text-white text-base border-none px-8">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="flex-1">
                <img src={banner02} className="" />
              </div>
            </div>
          </div>
        </div>

        {/* slider-03 */}
        <div id="item3" className="carousel-item w-full">
          <div className="w-full text-white content-center">
            <div className="flex gap-10 lg:flex-row flex-col-reverse items-center mx-5 justify-around">
              <div className="flex-1 flex justify-center pb-12">
                <div>
                  <h1 className="sm:text-5xl text-3xl font-bold">
                    Transform the Journey of <br className="xl:block hidden" /> Communication Excellence!
                  </h1>
                  <p className="py-6 xl:w-[550px] ">
                    Discover Languages Online with Professional Teachers and
                    Global Tools! Learn at your own pace with customized
                    sessions, interactive features, and a connected
                    international community. Whether you are a novice or honing
                    your expertise, our platform offers everything you need to
                    thrive. Enjoy flexible learning, engage with knowledgeable
                    instructors, and unlock your true potential as you embark on
                    your language learning path.
                  </p>
                  <button className="btn bg-[#098a9b] hover:bg-[#18717c] text-white text-base border-none px-8">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="flex-1">
                <img src={banner03} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* indicators */}
      <div className="flex w-full justify-center gap-2 py-2 absolute bg-transparent bottom-3">
        <a href="#item1" className="btn btn-xs rounded-full bg-transparent text-white">
          1
        </a>
        <a href="#item2" className="btn btn-xs rounded-full bg-transparent text-white">
          2
        </a>
        <a href="#item3" className="btn btn-xs rounded-full bg-transparent text-white">
          3
        </a>
      </div>
    </>
  );
};

export default Banner;
