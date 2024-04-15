import React from "react";
import { useState } from "react";

import { Button, Img, List, Text } from "components";
import { Link } from "react-router-dom";

const DashboardProjectManagerPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectChange = (project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-lexenddeca gap-[10vh] justify-end mx-auto w-full">
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
                  <Link to="/pm">
                    <Text
                      className="text-3xl sm:text-[38px] md:text-[44px] text-white-A700 text-center ml-1 underline cursor-pointer mr-2"
                      size="txtLexendDecaRegular48"
                    >
                      Employer management
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
                      Product Manager
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20vh] items-center w-full">
          <div className="flex flex-col gap-3 items-center justify-start max-w-[1357px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-start px-[17px] w-full mb-2">
              <Link to="/register">
                <Text
                  className="bg-blue_gray-800 h-[45px] justify-center pb-[7px] pt-3 sm:px-5 px-[35px] rounded-[10px] text-center text-white-A700 text-xl w-[300px] mr-[5.25rem]"
                  size="txtLexendDecaRegular20"
                >
                  create employer
                </Text>
              </Link>
            </div>
            <div className="sm:h-[352px] h-[92px] relative w-full">
              <div className="bg-blue_gray-100_01 h-[92px] m-auto rounded-[30px] w-[99%]"></div>
              <div className="absolute bg-blue_gray-100_01 flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-end justify-center m-auto p-[11px] rounded-[30px] w-full">
                <Text
                  className="mb-3 sm:mt-0 mt-[7px] text-5xl md:text-2xl text-black-900 text-center"
                  size="txtLexendDecaRegular48"
                >
                  Max Vasteppan:{" "}
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
                  <select className="bg-blue_gray-800 h-[70px] pb-[7px] pt-3 sm:px-5 px-[35px] rounded-[10px] text-center text-white-A700 text-xl mr-[5.25rem]">
                    <option>Project 1</option>
                    <option>Project 2</option>
                  </select>
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
                  <select className="bg-blue_gray-800 h-[70px] pb-[7px] pt-3 sm:px-5 px-[35px] rounded-[10px] text-center text-white-A700 text-xl mr-[5.25rem]">
                    <option>Project 1</option>
                    <option>Project 2</option>
                  </select>
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
                  <select className="bg-blue_gray-800 h-[70px] pb-[7px] pt-3 sm:px-5 px-[35px] rounded-[10px] text-center text-white-A700 text-xl mr-[5.25rem]">
                    <option>Project 1</option>
                    <option>Project 2</option>
                  </select>
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
                  <select className="bg-blue_gray-800 h-[70px] pb-[7px] pt-3 sm:px-5 px-[35px] rounded-[10px] text-center text-white-A700 text-xl mr-[5.25rem]">
                    <option>Project 1</option>
                    <option>Project 2</option>
                  </select>
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
