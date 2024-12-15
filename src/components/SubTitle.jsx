const SubTitle = ({ subTitle, title }) => {
  return (
    <div className=" w-full md:w-[800px] container mx-auto">
      <h1 className="text-red-500 font-bold text-xl text-center">{subTitle}</h1>
      <h1 className="font-bold text-center text-4xl md:text-6xl ">{title}</h1>
    </div>
  );
};

export default SubTitle;
