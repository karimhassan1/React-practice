const HeadMiddle = () => {
  return (
    <div className="border h-24 flex justify-around items-center">
      <div className="w-1/5">
        <input type="text" className="border" />
        <button>Search</button>
      </div>
      <div className="w-1/2 flex justify-center">
        <img
          src="//greengrub-theme.myshopify.com/cdn/shop/files/L09-logo.png?v=1706086795&width=600"
          alt="Logo"
        />
      </div>
      <div className="w-1/5">3</div>
    </div>
  );
};
export default HeadMiddle;
