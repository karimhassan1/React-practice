import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RecentBlogPostChild = (data) => {
  return (
    <div className="border w-full flex h-auto lg:h-96 lg:flex-col justify-center lg:w-1/4 rounded-xl me-10 mb-5 mt-5">
      <div className="flex w-1/2 lg:w-full">
        <img
          src={data.imgPath}
          alt=""
          className="h-full w-full lg:w-full  lg:h-auto "
        />
      </div>
      <div className="lg:mt-5 flex flex-col start ms-3">
        <h1 className="text-primary text-xs lg:text-xl">
          <FontAwesomeIcon icon={faCalendarDay} />
          {data.date}
        </h1>
        <h1 className="text-xs lg:text-xl">{data.heading}</h1>
        <p className="text-xs lg:text-xl">{data.description}</p>
      </div>
    </div>
  );
};
const RecentBlogPost = (parentData) => {
  const { data } = parentData;
  return (
    <div className="h-auto  border flex flex-col lg:flex-row items-center justify-center">
      {data.map((list, index) => {
        return <RecentBlogPostChild {...list} key={index} />;
      })}
    </div>
  );
};
export default RecentBlogPost;
