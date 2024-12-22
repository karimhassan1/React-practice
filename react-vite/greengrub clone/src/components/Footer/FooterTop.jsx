const FooterTop = () => {
  return (
    <div className="h-32 border bg-primary flex bg-none justify-center">
      <div className="lg:w-1/2 text-white flex justify-center items-center">
        <h1 className="lg:text-3xl">
          Subscribe & Enjoy 10% Off On Your First Subscribe
        </h1>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center">
        <input
          type="email"
          className="lg:w-96 lg:p-2 rounded"
          placeholder="Email"
        />
      </div>
    </div>
  );
};
export default FooterTop;
