const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-3/12 mx-auto text-center">
      <p className="text-yellow-500 mb-2">---{subHeading}---</p>
      <h3 className="text-3xl uppercase border-y-2 p-2">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
