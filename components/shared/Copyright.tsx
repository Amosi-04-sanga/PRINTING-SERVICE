import Link from "next/link";
import React from "react";

const Copyright = () => {
  return (
    <div>
      <div className="bg-black p-4 text-white text-center">
        <p>
          © Copyright <strong>ODOTECH</strong> 2024 , All Rights Reserved
        </p>
        <div className="mb-2">
          <span className="">designed by </span>{" "}
          <Link className="text-[#3EC1D5]" href="/">
            Odotech Software Development Department
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
