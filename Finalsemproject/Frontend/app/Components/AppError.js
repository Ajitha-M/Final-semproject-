import React from "react";
import AppText from "../Components/AppText";

const AppError = ({ errors }) => {
  return (
    <>
      <AppText 
    //   style={{color:'red'}} 
      >{errors}</AppText>
    </>
  );
};

export default AppError;