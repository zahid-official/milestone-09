/* eslint-disable react/prop-types */

const PageTitle = ({ pageTitle, text }) => {
  return (
    <div className="font-bold custom-gradient text-white text-center py-28 space-y-2 px-2">
      <h2 className="sm:text-5xl text-4xl">
        {pageTitle}
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default PageTitle;
