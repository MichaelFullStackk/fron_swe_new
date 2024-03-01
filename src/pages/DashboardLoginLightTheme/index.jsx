import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Img, Input, Text } from "components";

const DashboardLoginLightThemePage = () => {
  const navigate = useNavigate(); 
  const handleNavigate = () => navigate("/translater");
  return (
    <>
      <div className="bg-gray-300 flex flex-col font-lexenddeca sm:gap-10 md:gap-10 gap-[81px] items-center justify-end mx-auto pt-24 w-full">
        <div className="flex flex-col gap-[57px] items-center justify-start md:px-5 w-[24%] md:w-full">
          <Text
            className="md:text-5xl text-[64px] text-blue_gray-800 text-center"
            size="txtLexendDecaRegular64"
          >
            Sign in
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <Input
              name="username"
              placeholder="Login"
              className="p-0 placeholder:text-white-A700 text-center text-sm w-full"
              wrapClassName="w-[99%]"
            ></Input>
            <Input
              name="password"
              placeholder="Password"
              className="p-0 placeholder:text-white-A700 text-center text-sm w-full"
              wrapClassName="mt-[43px] w-[99%]"
              type="password"
            ></Input>
            <div className="flex flex-row font-montserrat items-start justify-start mt-[17px] w-[97%] md:w-full">
              <div className="bg-blue_gray-800 h-[17px] mb-0.5 rounded-[5px] w-[18px]"></div>
              <Text
                className="ml-[7px] text-center text-sm text-teal-900"
                size="txtMontserratMedium14"
              >
                Remember me
              </Text>
              <a
                href="javascript:"
                className="ml-8 text-black-900 text-center text-sm"
              >
                <Text size="txtMontserratMedium14Black900">
                  Forgot password?
                </Text>
              </a>
            </div>
            <Button
              className="capitalize cursor-pointer min-w-[300px] mt-[15px] text-base text-center"
              color="green_A400"
              size="xs"
              onClick={handleNavigate}
            >
              login
            </Button>
            <Button
              className="capitalize cursor-pointer min-w-[300px] mt-[18px] text-base text-center"
              color="green_A400"
              size="xs"
            >
              sign UP
            </Button>
          </div>
        </div>
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
    </>
  );
};

export default DashboardLoginLightThemePage;
