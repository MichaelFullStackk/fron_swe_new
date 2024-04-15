import React from "react";

import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";

const DashboardChiefTranslaterPage = () => {
  return (
    <>
      <div className="bg-gray-300 flex flex-col font-lexenddeca items-center  justify-end mx-auto pt-[23px] w-full">
        <div className="flex flex-col justify-start w-full gap-[100px]">
          {/* <Text
            className="bg-blue_gray-800 h-[45px] justify-center md:ml-auto ml-[67%] sm:px-5 px-[35px] py-[9px] rounded-[10px] text-center text-white-A700 text-xl w-[300px]"
            size="txtLexendDecaRegular20"
          >
            Chief translator
          </Text> */}
          <div className="flex items-center justify-center">
            <div className="bg-[#5de194] flex flex-row items-center justify-between p-[5px] md:px-5 rounded-[25px] w-[95%] mt-5">
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
              <div className="flex flex-row items-center justify-between gap-[3rem]">
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
                    <Link to="/cheif">
                      <Text
                        className="text-3xl sm:text-[38px] md:text-[44px] text-white-A700 text-center ml-1 underline cursor-pointer mr-2"
                        size="txtLexendDecaRegular48"
                      >
                        Employer status
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
                  {/* <div className="bg-blue_gray-800 flex flex-col items-center md:ml-auto mr-[17px] p-[9px] px-[30px] md:px-5 rounded-[10px] w-full">
                    <div className="h-[25px] relative w-[100%]">
                      <Text
                        className="m-auto text-center text-white-A700 text-xl md:text-[15px] hover:text-back-A200"
                        size="txtLexendDecaRegular20"
                      >
                        log out
                      </Text>
                    </div>
                  </div> */}

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
                      <Text
                        className="m-auto text-center text-white-A700 text-xl md:text-[15px] whitespace-nowrap"
                        size="txtLexendDecaRegular20"
                      >
                        Chief translator
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[26px] items-start justify-start max-w-[1184px] mt-[30px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-1.5 md:ml-[0] w-3/5 md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                size="txtLexendDecaRegular48"
              >
                Max Vasteppan:{" "}
              </Text>
              <div className="flex md:gap-[26px]">
                <Text
                  className="bg-blue_gray-100 h-[68px] justify-center mb-0.5 md:ml-[0] ml-[13px] sm:px-5 px-[35px] py-[21px] rounded-[10px] text-black-900 text-center text-xl w-[178px]"
                  size="txtLexendDecaRegular20Black900"
                >
                  43%
                </Text>
                <Button className="cursor-pointer min-w-[190px] md:ml-[0] ml-[39px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-center sm:text-xl">
                  Join to help
                </Button>
              </div>
            </div>
            <div className="bg-blue_gray-800 flex flex-col items-start justify-start rounded-[16px] w-full">
              <div className="flex flex-col items-center justify-start w-[43%] md:w-[43%]">
                <div className="bg-green-A400 h-[33px] rounded-[16px] w-full"></div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-1.5 md:ml-[0] w-3/5 md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                size="txtLexendDecaRegular48"
              >
                Translator 1:{" "}
              </Text>
              <div className="flex md:gap-[26px]">
                <Text
                  className="bg-blue_gray-100 h-[68px] justify-center mb-0.5 md:ml-[0] ml-[13px] sm:px-5 px-[35px] py-[21px] rounded-[10px] text-black-900 text-center text-xl w-[178px]"
                  size="txtLexendDecaRegular20Black900"
                >
                  64%
                </Text>
                <Button className="cursor-pointer min-w-[190px] md:ml-[0] ml-[39px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-center sm:text-xl">
                  Join to help
                </Button>
              </div>
            </div>
            <div className="bg-blue_gray-800 flex flex-col items-start justify-start rounded-[16px] w-full">
              <div className="flex flex-col items-center justify-start w-[57%] md:w-[57%]">
                <div className="bg-green-A400 h-[33px] rounded-[16px] w-full"></div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-1.5 md:ml-[0] w-3/5 md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                size="txtLexendDecaRegular48"
              >
                Translator 2:{" "}
              </Text>
              <div className="flex md:gap-[26px]">
                <Text
                  className="bg-blue_gray-100 h-[68px] justify-center mb-0.5 ml-3.5 md:ml-[0] sm:px-5 px-[35px] py-[21px] rounded-[10px] text-black-900 text-center text-xl w-[178px]"
                  size="txtLexendDecaRegular20Black900"
                >
                  25%
                </Text>
                <Button className="cursor-pointer min-w-[190px] md:ml-[0] ml-[39px] md:mt-0 mt-0.5 text-2xl md:text-[22px] text-center sm:text-xl">
                  Join to help
                </Button>
              </div>
            </div>
            <div className="bg-blue_gray-800 flex flex-col items-start justify-start rounded-[16px] w-full">
              <div className="flex flex-col items-center justify-start w-[27%] md:w-[27%]">
                <div className="bg-green-A400 h-[33px] rounded-[16px] w-full"></div>
              </div>
            </div>
          </div>
          <footer
            className="bg-cover bg-no-repeat flex flex-col h-[111px] items-center justify-center mt-[27px] md:px-5 w-full"
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
    </>
  );
};

export default DashboardChiefTranslaterPage;
