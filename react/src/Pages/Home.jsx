import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <header>
        <nav className="w-11/12 mx-auto py-4">
          <Navbar></Navbar>
        </nav>
        <Banner></Banner>
      </header>
    </div>
  );
};

export default Home;
