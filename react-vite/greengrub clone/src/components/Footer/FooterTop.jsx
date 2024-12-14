const FooterTop = () => {
  return (
    <div className="h-32 border bg-primary flex bg-none justify-center">
      <div className="w-1/2 text-white flex justify-center items-center">
        <h1 className="text-3xl">
          Subscribe & Enjoy 10% Off On Your First Subscribe
        </h1>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <input type="email" className="w-96 p-2 rounded" placeholder="Email" />
      </div>
    </div>
  );
};
export default FooterTop;
