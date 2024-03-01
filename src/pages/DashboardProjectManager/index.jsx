import React from "react";

import { Button, Img, List, Text } from "components";

const DashboardProjectManagerPage = () => {
  return (
    <>
      <div className="bg-gray-300 flex flex-col font-lexenddeca sm:gap-10 md:gap-10 gap-[111px] justify-end mx-auto pt-[23px] w-full">
        <div className="flex flex-col items-end px-[17px] w-full">
          <Text
            className="bg-blue_gray-800 h-[45px] justify-center pb-[7px] pt-3 sm:px-5 px-[35px] rounded-[10px] text-center text-white-A700 text-xl w-[300px]"
            size="txtLexendDecaRegular20"
          >
            Product Manager
          </Text>
        </div>
        <div className="flex flex-col gap-[29px] items-center w-full">
          <div className="flex flex-col gap-3 items-center justify-start max-w-[1117px] mx-auto md:px-5 w-full">
            <div className="sm:h-[352px] h-[92px] relative w-full">
              <div className="bg-blue_gray-100_01 h-[92px] m-auto rounded-[30px] w-[99%]"></div>
              <div className="absolute bg-blue_gray-100_01 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-end justify-center m-auto p-[11px] rounded-[30px] w-full">
                <Text
                  className="mb-0.5 sm:mt-0 mt-[7px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                  size="txtLexendDecaRegular48"
                >
                  Max Vasteppan:{" "}
                </Text>
                <Button className="cursor-pointer mb-0.5 min-w-[190px] sm:ml-[0] ml-[33px] text-2xl md:text-[22px] text-center sm:text-xl">
                  Remove
                </Button>
                <Button className="cursor-pointer min-w-[190px] sm:ml-[0] ml-[54px] sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-center sm:text-xl">
                  Edit
                </Button>
                <Button className="cursor-pointer mb-0.5 min-w-[190px] sm:ml-[0] ml-[33px] mr-[11px] text-2xl md:text-[22px] text-center sm:text-xl">
                  Accept
                </Button>
              </div>
            </div>
            <div className="md:h-[292px] h-[297px] sm:h-[580px] relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                    <div className="bg-blue_gray-100_01 flex flex-col items-start justify-start p-[15px] rounded-[30px] w-full">
                      <Text
                        className="md:ml-[0] ml-[17px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                        size="txtLexendDecaRegular48"
                      >
                        Translator 1:{" "}
                      </Text>
                    </div>
                    <div className="bg-blue_gray-100_01 flex flex-col items-start justify-start p-2.5 rounded-[30px] w-full">
                      <Text
                        className="mb-[9px] md:ml-[0] ml-[22px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                        size="txtLexendDecaRegular48"
                      >
                        Translator 2:{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="bg-blue_gray-100_01 flex flex-col items-start justify-start p-3 rounded-[30px] w-full">
                    <Text
                      className="mb-1.5 ml-4 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                      size="txtLexendDecaRegular48"
                    >
                      Chief translator:{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="absolute sm:flex-col flex-row gap-[54px] grid sm:grid-cols-1 grid-cols-2 inset-y-[0] my-auto right-[22%] w-[39%]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-8 items-center justify-start rounded-[10px] shadow-bs1 w-full">
                  <div className="bg-blue_gray-700 flex flex-col items-center justify-start p-[17px] rounded-[10px] w-full">
                    <Text
                      className="mb-0.5 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtLexendDecaRegular24"
                    >
                      Remove
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[33px] items-center justify-start rounded-[10px] shadow-bs1 w-full">
                    <div className="bg-blue_gray-700 flex flex-col items-center justify-start p-[15px] rounded-[10px] w-full">
                      <Text
                        className="mb-1.5 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtLexendDecaRegular24"
                      >
                        Remove
                      </Text>
                    </div>
                    <div className="bg-blue_gray-700 flex flex-col items-center justify-start p-[17px] rounded-[10px] w-full">
                      <Text
                        className="mb-0.5 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtLexendDecaRegular24"
                      >
                        Remove
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-7 items-center justify-start rounded-[10px] shadow-bs1 w-full">
                  <div className="bg-blue_gray-700 flex flex-col items-center justify-start p-4 rounded-[10px] w-full">
                    <Text
                      className="mb-1 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtLexendDecaRegular24"
                    >
                      Edit
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[38px] items-center justify-start rounded-[10px] shadow-bs1 w-full">
                    <div className="bg-blue_gray-700 flex flex-col items-center justify-start p-[17px] rounded-[10px] w-full">
                      <Text
                        className="mb-0.5 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtLexendDecaRegular24"
                      >
                        Edit
                      </Text>
                    </div>
                    <div className="bg-blue_gray-700 flex flex-col items-center justify-start p-4 rounded-[10px] w-full">
                      <Text
                        className="mb-1 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtLexendDecaRegular24"
                      >
                        Edit
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
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
      </div>
    </>
  );
};

export default DashboardProjectManagerPage;
