import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RecentBlogPostChild = (data) => {
  return (
    <div className="border w-1/4 rounded-xl me-10 mb-5">
      <div className="">
        <img src={data.imgPath} alt="" />
        <h1 className="text-primary text-xl">
          <FontAwesomeIcon icon={faCalendarDay} />
          {data.date}
        </h1>
      </div>
      <div className="mt-5">
        <h1>{data.heading}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
};
const RecentBlogPost = (parentData) => {
  const { data } = parentData;
  return (
    <div className="h-96 border flex justify-center">
      {data.map((list, index) => {
        return <RecentBlogPostChild {...list} key={index} />;
      })}
    </div>
  );
};
export default RecentBlogPost;
