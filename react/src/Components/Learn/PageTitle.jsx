/* eslint-disable react/prop-types */

const PageTitle = ({ pageTitle }) => {
  return (
    <div>
      <h2 className="text-5xl font-bold custom-gradient text-white text-center py-28">
        {pageTitle}
      </h2>
    </div>
  );
};

export default PageTitle;
