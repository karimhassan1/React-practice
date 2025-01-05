import { useState } from "react";

const MegaMenu = (parentData) => {
  const { id } = parentData;

  return (
    <div id={id} className="absolute top-10  w-full h-96  left-0">
      <div className="h-6"></div>
      <div className="bg-white h-full">checkng...</div>
    </div>
  );
};

export default MegaMenu;
