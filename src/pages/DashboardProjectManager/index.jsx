import React from "react";

import { Button, Img, List, Text } from "components";

const DashboardProjectManagerPage = () => {
  return (
    <>
      <div className="bg-gray-300 flex flex-col font-lexenddeca gap-[15vh] justify-end mx-auto pt-[23px] w-full">
        <div className="flex flex-col items-end px-[17px] w-full">
          <Text
            className="bg-blue_gray-800 h-[45px] justify-center pb-[7px] pt-3 sm:px-5 px-[35px] rounded-[10px] text-center text-white-A700 text-xl w-[300px] mr-[5.25rem]"
            size="txtLexendDecaRegular20"
          >
            Product Manager
          </Text>
        </div>
        <div className="flex flex-col gap-[20vh] items-center w-full">
          <div className="flex flex-col gap-3 items-center justify-start max-w-[1117px] mx-auto md:px-5 w-full">
            <div className="sm:h-[352px] h-[92px] relative w-full">
              <div className="bg-blue_gray-100_01 h-[92px] m-auto rounded-[30px] w-[99%]"></div>
              <div className="absolute bg-blue_gray-100_01 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-end justify-center m-auto p-[11px] rounded-[30px] w-full">
                <Text
                  className="mb-3 sm:mt-0 mt-[7px] text-5xl md:text-2xl text-black-900 text-center"
                  size="txtLexendDecaRegular48"
                >
                  Max Vasteppan:{" "}
                </Text>
                {/* <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] sm:ml-[0] ml-[33px] text-2xl md:text-xl text-center sm:text-xl">
                  Remove
                </Button>
                <Button className="cursor-pointer min-w-[190px] md:min-w-[80px] sm:ml-[0] ml-[54px] sm:mt-0 mt-0.5 text-2xl md:text-xl text-center sm:text-xl">
                  Edit
                </Button>
                <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] sm:ml-[0] ml-[33px] mr-[11px] text-2xl md:text-xl text-center sm:text-xl">
                  Accept
                </Button> */}
                <div className="ml-auto mr-[10px]">
                  <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] md:ml-[20px] ml-[40px] text-2xl md:text-base text-center sm:text-base">
                      Remove
                  </Button>
                  <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] md:ml-[20px] ml-[40px] text-2xl md:text-base text-center sm:text-base">
                      Edit
                  </Button>
                  <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] md:ml-[20px] ml-[40px] mr-[11px] text-2xl md:text-base text-center sm:text-base">
                      Accept
                  </Button>
                </div>
              </div>
            </div>
            {/* <div className="sm:h-[352px] h-[92px] relative w-full">
              <div className="bg-blue_gray-100_01 h-[92px] m-auto rounded-[30px] w-[99%]"></div>
              <div className="absolute bg-blue_gray-100_01 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-end justify-start m-auto p-[11px] rounded-[30px] w-full">
                <Text
                  className="mb-3 sm:mt-0 mt-[7px] text-5xl md:text-2xl text-black-900 text-center"
                  size="txtLexendDecaRegular48"
                >
                  Translator 1:{" "}
                </Text>
                <div className="ml-auto mr-[10px]">
                  <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] sm:ml-[0] ml-[33px] text-2xl md:text-xl text-center sm:text-xl">
                    Remove
                  </Button>
                  <Button className="cursor-pointer min-w-[190px] md:min-w-[80px] sm:ml-[0] ml-[54px] sm:mt-0 mt-0.5 text-2xl md:text-xl text-center sm:text-xl">
                    Edit
                  </Button>
                  <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] sm:ml-[0] ml-[33px] mr-[11px] text-2xl md:text-xl text-center sm:text-xl">
                    Accept
                  </Button>
                </div>
              </div>
            </div> */}
            <div className="sm:h-[352px] h-[92px] relative w-full">
              <div className="bg-blue_gray-100_01 h-[92px] m-auto rounded-[30px] w-[99%]"></div>
              <div className="absolute bg-blue_gray-100_01 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-end justify-start m-auto p-[11px] rounded-[30px] w-full">
                  <Text
                      className="mb-3 sm:mt-0 mt-[7px] text-5xl md:text-2xl text-black-900 text-center"
                      size="txtLexendDecaRegular48"
                  >
                      Translator 1:{" "}
                  </Text>
                  <div className="ml-auto mr-[10px]">
                      <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] md:ml-[20px] ml-[40px] text-2xl md:text-base text-center sm:text-base">
                          Remove
                      </Button>
                      <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] md:ml-[20px] ml-[40px] text-2xl md:text-base text-center sm:text-base">
                          Edit
                      </Button>
                      <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] md:ml-[20px] ml-[40px] mr-[11px] text-2xl md:text-base text-center sm:text-base">
                          Accept
                      </Button>
                  </div>
              </div>
            </div>

            <div className="sm:h-[352px] h-[92px] relative w-full">
              <div className="bg-blue_gray-100_01 h-[92px] m-auto rounded-[30px] w-[99%]"></div>
              <div className="absolute bg-blue_gray-100_01 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-end justify-start m-auto p-[11px] rounded-[30px] w-full">
                <Text
                  className="mb-3 sm:mt-0 mt-[7px] text-5xl md:text-2xl text-black-900 text-center"
                  size="txtLexendDecaRegular48"
                >
                  Translator 2:{" "}
                </Text>
                <div className="ml-auto mr-[10px]">
                  <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] md:ml-[20px] ml-[40px] text-2xl md:text-base text-center sm:text-base">
                      Remove
                  </Button>
                  <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] md:ml-[20px] ml-[40px] text-2xl md:text-base text-center sm:text-base">
                      Edit
                  </Button>
                  <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] md:ml-[20px] ml-[40px] mr-[11px] text-2xl md:text-base text-center sm:text-base">
                      Accept
                  </Button>
                </div>
              </div>
            </div>
            <div className="sm:h-[352px] h-[92px] relative w-full">
              <div className="bg-blue_gray-100_01 h-[92px] m-auto rounded-[30px] w-[99%]"></div>
              <div className="absolute bg-blue_gray-100_01 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-end justify-start m-auto p-[11px] rounded-[30px] w-full">
                <Text
                  className="mb-3 sm:mt-0 mt-[7px] text-5xl md:text-2xl text-black-900 text-center"
                  size="txtLexendDecaRegular48"
                >
                  Chief translator:{" "}
                </Text>
                <div className="ml-auto mr-[10px]">
                  <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] md:ml-[20px] ml-[40px] text-2xl md:text-base text-center sm:text-base">
                      Remove
                  </Button>
                  <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] md:ml-[20px] ml-[40px] text-2xl md:text-base text-center sm:text-base">
                      Edit
                  </Button>
                  <Button className="cursor-pointer mb-0.5 min-w-[190px] md:min-w-[80px] md:ml-[20px] ml-[40px] mr-[11px] text-2xl md:text-base text-center sm:text-base">
                      Accept
                  </Button>
                </div>
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
    </>
  );
};

export default DashboardProjectManagerPage;
