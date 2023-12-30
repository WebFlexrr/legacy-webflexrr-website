import Image from "next/image";
import React from "react";

const loading = (): React.JSX.Element => {
  return (
    <div className="w-full h-screen p-5 flex justify-center items-center">
      <Image
        src={"/logos/logo.png"}
        width={"300"}
        height={"0"}
        alt="Logo"
        className=" animate-pulse"
      />
    </div>
  );
};

export default loading;
