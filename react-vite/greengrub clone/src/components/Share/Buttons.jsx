const Button = (childData) => {
  const { buttonText } = childData;
  return (
    <>
      <button className="border p-5 me-10 bg-primary rounded-xl text-white">
        {buttonText}
      </button>
    </>
  );
};
const Buttons = (parentData) => {
  const { data } = parentData;
  return (
    <div
      className="h-36 flex justify-center items-start
    "
    >
      {data.map((list, index) => {
        return <Button buttonText={list} key={index} />;
      })}
    </div>
  );
};
export default Buttons;
