import { ProgressBar, Bars } from "react-loader-spinner";

import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center mt-auto">
      <Bars
        height="80"
        width="80"
        color="#FFCC8D"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
