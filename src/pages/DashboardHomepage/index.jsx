import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const DashboardHomepagePage = () => {
  const navigate = useNavigate(); 
  const handleNavigate = () => navigate("/login");
  return (
    <>
      <div className="bg-gray-300 flex flex-col font-lexenddeca relative mx-auto w-full h-screen">
        <Button
          className="absolute top-0 cursor-pointer min-w-[300px] text-center text-xl right-0 mt-5 mr-4"
          color="blue_gray_800"
          size="xs"
          onClick={handleNavigate}
        >
          Login
        </Button>
        <div className="flex flex-col items-center justify-center w-full h-full mt-5 gap-3">
          <div className="mt-[100px]">
            <Text
              className="text-center md:text-4xl text-[64px] text-blue_gray-800 text-center mt-5"
              size="txtLexendDecaRegular64"
            >
              Welcome to our platform
            </Text>
            <Text
              className="text-4xl md:text-2xl text-blue_gray-800 text-center mt-5"//sm:text-[32px]
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
              className="h-[70px] w-[70px] mr-auto ml-5 mt-5" //ml-9 md:ml-[0] mr-[1174px] mt-5
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
