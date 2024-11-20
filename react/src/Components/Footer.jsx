import logo from "/assets/logo.png";

const Footer = () => {
  return (
    <>
        <footer className="footer lg:justify-around bg-[#f6fafb] py-20 text-base px-10">
      <aside>
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" />
          <h2 className="text-4xl font-bold mt-2">Elex</h2>
        </div>
        <p>
          Elex Industries Ltd.
          <br />
          Providing reliable tech since 2014
        </p>
      </aside>

      <nav>
        <h6 className="text-black font-bold text-xl">Quick Link</h6>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Features</a>
        <a className="link link-hover">Top Author</a>
        <a className="link link-hover">Top Categories</a>
      </nav>
      <nav>
        <h6 className="text-black font-bold text-xl">Help Center</h6>
        <a className="link link-hover">Courses</a>
        <a className="link link-hover">Support</a>
        <a className="link link-hover">Get Help</a>
        <a className="link link-hover">Privacy Policy</a>
      </nav>
      <nav>
        <h6 className="text-black font-bold text-xl">Contact Info</h6>
        <a className="link link-hover"> Call Us: 1-885-665-2548</a>
        <a className="link link-hover"> Address: +7811 Vermont Ave, <br /> Los Angeles, CA 90054</a>
        <a className="link link-hover">Mail Us: hello@elex.com</a>
      </nav>
    </footer>

    <div className="py-7 text-lg font-semibold text-center bg-[#f6fafb] border-t-2">
        <p>© Elex is Proudly Owned by Zahidul Islam</p>
    </div>
    </>
    
  );
};

export default Footer;
