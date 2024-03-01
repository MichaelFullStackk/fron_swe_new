import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const DashboardHomepagePage = () => {
  const navigate = useNavigate(); 
  const handleNavigate = () => navigate("/login");
  return (
    <>
      <div className="bg-gray-300 flex flex-col font-lexenddeca sm:gap-10 md:gap-10 gap-[295px] justify-end mx-auto pt-[23px] w-full">
        <div className="flex flex-col items-end px-[17px] w-full">
          <Button
            className="cursor-pointer min-w-[300px] text-center text-xl"
            color="blue_gray_800"
            size="xs"
            onClick={handleNavigate}
          >
            Login
          </Button>
          <Text
            className="mr-[180px] mt-[97px] md:text-5xl text-[64px] text-blue_gray-800 text-center"
            size="txtLexendDecaRegular64"
          >
            Welcome to our platform
          </Text>
          <div className="flex flex-col items-center justify-start mr-[204px] mt-6 md:px-5 px-[83px]">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-800 text-center"
              size="txtLexendDecaRegular36"
            >
              please to start your work sign in
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <footer
            className="bg-cover bg-no-repeat flex flex-col h-[111px] items-center justify-center md:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group27.svg')" }}
          >
            <Img
              className="h-[70px] ml-9 md:ml-[0] mr-[1174px] my-5 w-[70px]"
              src="images/img_clock.svg"
              alt="clock"
            />
          </footer>
        </div>
      </div>
    </>
  );
};

export default DashboardHomepagePage;
