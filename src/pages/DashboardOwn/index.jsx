import React, { useState } from "react";

import { Button, Img, Text, Input } from "components";
import colors from "tailwindcss/colors";
import { Link } from "react-router-dom";

const DashboardOwnPage = () => {
  const [value, setValue] = useState("43%");
  const [percent, setPercent] = useState("43%");

  const handleInputChange = (e) => {
    if (parseInt(value) <= 100) {
      setPercent(value);
    } else {
      setPercent("100%");
      setValue("100%");
    }
  };

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-lexenddeca items-center justify-end mx-auto pt-[23px] w-full">
        <div className="flex flex-col gap-[130px] justify-start w-full">
          <div className="flex items-center justify-center">
            <div className="bg-[#5de194] flex flex-row items-center justify-between p-[5px] md:px-5 rounded-[25px] w-[95%]">
              <Link to="/main">
                <div className="flex items-center">
                  <img
                    src="/images/icon_main.png"
                    width={60}
                    height={20}
                    alt="icon"
                    className="object-contain"
                  />
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center ml-1"
                    size="txtLexendDecaRegular48"
                  >
                    EasyLang
                  </Text>
                </div>
              </Link>
              <div className="flex flex-row items-center justify-between gap-[10rem]">
                <div className="flex flex-row items-center justify-between gap-10">
                  <div className="flex items-center">
                    <Link to="/main">
                      <Text
                        className="text-2xl sm:text-[38px] md:text-[44px] text-black-400 text-center ml-1 hover:underline cursor-pointer"
                        size="txtLexendDecaRegular48"
                      >
                        home
                      </Text>
                    </Link>
                  </div>
                  <div className="flex items-center ml-3">
                    <Link to="/translater">
                      <Text
                        className="text-3xl sm:text-[38px] md:text-[44px] text-white-A700 text-center ml-1 underline cursor-pointer mr-2"
                        size="txtLexendDecaRegular48"
                      >
                        My profile
                      </Text>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link to="/about">
                      <Text
                        className="text-2xl sm:text-[38px] md:text-[44px] text-black-400 text-center ml-1 hover:underline cursor-pointer"
                        size="txtLexendDecaRegular48"
                      >
                        about
                      </Text>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link to="/contact">
                      <Text
                        className="text-2xl sm:text-[38px] md:text-[44px] text-black-400 text-center ml-1 hover:underline cursor-pointer"
                        size="txtLexendDecaRegular48"
                      >
                        contact us
                      </Text>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue_gray-800 flex flex-col items-center md:ml-auto mr-[17px] p-[9px] px-[30px] md:px-5 rounded-[10px] w-full hover:text-black">
                    <div className="h-[25px] relative w-[100%]">
                      <Link to="/login">
                        <Text
                          className="m-auto text-center text-white-A700 text-xl md:text-[15px]"
                          size="txtLexendDecaRegular20"
                        >
                          log out
                        </Text>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-blue_gray-800 flex flex-col items-center md:ml-auto mr-[17px] p-[9px] px-[50px] md:px-5 rounded-[10px] w-full">
                    <div className="h-[25px] relative w-full overflow-hidden">
                      <Link to="/own">
                        <Text
                          className="m-auto text-center text-white-A700 text-xl md:text-[15px] whitespace-nowrap"
                          size="txtLexendDecaRegular20"
                        >
                          Max Vasteppan
                        </Text>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="flex items-center">
                  <Link to="/contact">
                    <Text
                      className="text-2xl sm:text-[38px] md:text-[44px] text-black-400 text-center ml-1 hover:underline cursor-pointer"
                      size="txtLexendDecaRegular48"
                    >
                      contact us
                    </Text>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[80px] items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start max-w-[1397px] mx-auto md:px-5 w-full">
              <div className="flex justify-between gap-10">
                <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-start ml-1 md:ml-[0] w-4/5 md:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                    size="txtLexendDecaRegular48"
                  >
                    Full name:
                  </Text>
                  <Text
                    className="bg-blue_gray-100 h-[68px] justify-center sm:mt-0 mt-0.5 sm:px-5 px-[35px] py-[21px] rounded-[10px] text-black-900 text-center text-xl w-[300px]"
                    size="txtLexendDecaRegular20Black900"
                  >
                    Max Vasteppan
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-start ml-1 md:ml-[0] w-3/5 md:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                    size="txtLexendDecaRegular48"
                  >
                    Email:
                  </Text>
                  <Text
                    className="bg-blue_gray-100 h-[68px] justify-center sm:mt-0 mt-0.5 sm:px-5 px-[35px] py-[21px] rounded-[10px] text-black-900 text-center text-xl w-[300px]"
                    size="txtLexendDecaRegular20Black900"
                  >
                    max.vasteppan@f1.com
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-start ml-1 md:ml-[0] w-3/5 md:w-full mt-10">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                  size="txtLexendDecaRegular48"
                >
                  Position:
                </Text>
                <Text
                  className="bg-blue_gray-100 h-[68px] justify-center sm:mt-0 mt-0.5 sm:px-5 px-[35px] py-[21px] rounded-[10px] text-black-900 text-center text-xl w-[178px]"
                  size="txtLexendDecaRegular20Black900"
                >
                  translater
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[33px] items-start justify-start ml-1 md:ml-[0] w-3/5 md:w-full mt-10">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                  size="txtLexendDecaRegular48"
                >
                  Current project:
                </Text>
                <Text
                  className="bg-blue_gray-100 h-[68px] justify-center sm:mt-0 mt-0.5 sm:px-5 px-[35px] py-[21px] rounded-[10px] text-black-900 text-center text-xl w-[178px]"
                  size="txtLexendDecaRegular20Black900"
                >
                  project 1
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-12 items-end justify-start mt-[60px] w-[64%] md:w-full">
                <Text
                  className="md:mt-0 mt-1.5 text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center md:mr-auto"
                  size="txtLexendDecaRegular48"
                >
                  Current progress:{" "}
                </Text>
                <div className="flex relative w-[41%] md:w-full">
                  <Text
                    className="bg-blue_gray-100 h-[68px] justify-center sm:mt-0 mt-0.5 sm:px-5 px-[35px] py-[21px] rounded-[10px] text-black-900 text-center text-xl w-[178px]"
                    size="txtLexendDecaRegular20Black900"
                  >
                    43%
                  </Text>
                </div>
              </div>
              <div className="bg-blue_gray-800 flex flex-col items-start justify-start md:ml-[0] ml-[13px] mt-[87px] rounded-[16px] w-[99%] md:w-full">
                <div
                  style={{ width: percent, maxWidth: percent }}
                  className="flex flex-col items-center justify-start"
                >
                  <div className="bg-green-A400 h-[33px] rounded-[16px] w-full"></div>
                </div>
              </div>
            </div>
            <footer
              className="bg-cover bg-no-repeat flex flex-col h-[111px] items-center justify-center md:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group27.svg')" }}
            >
              <Img
                className="h-[70px] w-[70px] mr-auto ml-5  mt-5"
                src="images/img_clock.svg"
                alt="clock"
              />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOwnPage;
