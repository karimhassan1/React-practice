import { homeData } from "../../constant/HomeData";
import Courousal from "../../Share/Courousal";
const HomeCourousal = () => {
  return (
    <>
      <div className="w-100 courousal-img-div-height overflow-hidden">
        {homeData.map((data, index) => {
          return (
            <Courousal data={data} dataLength={homeData.length} key={index} />
          );
        })}
      </div>
    </>
  );
};
export default HomeCourousal;
