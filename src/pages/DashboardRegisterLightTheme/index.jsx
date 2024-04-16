"use client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Img, Input, Text } from "components";

const DashboardRegisterLightThemePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNavigate = () => {
    // if (username === "max.vasteppan@f1.com" && password === "qwerty1234") {
    //   console.log("Username:", username);
    //   console.log("Password:", password);
    //   navigate("/translater");
    // } else {
    //   setErrorMessage("Incorrect email or password.");
    // }
    navigate("/pm");
  };

  return (
    <>
      <div className="bg-gray-300 flex flex-col font-lexenddeca sm:gap-10 md:gap-10 gap-[9.5rem] items-center justify-end mx-auto w-full">  {/*pt-24  */}
        <div className="flex items-center justify-center">
          <div className="bg-[#5de194] flex flex-row items-center justify-between p-[5px] md:px-5 rounded-[25px] w-full mt-5">
            <Link to="/">
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
            <div className="flex flex-row items-center justify-between gap-[20rem] ml-[10rem]">
              <div className="flex flex-row items-center justify-between gap-10">
                <div className="flex items-center">
                  <Link to="/">
                    <Text
                      className="text-2xl sm:text-[38px] md:text-[44px] text-black-400 text-center ml-1 hover:underline cursor-pointer"
                      size="txtLexendDecaRegular48"
                    >
                      home
                    </Text>
                  </Link>
                </div>
                <div className="flex items-center ml-3">
                  <Link to="/">
                    <Text
                      className="text-3xl sm:text-[38px] md:text-[44px] text-white-A700 text-center ml-1 underline cursor-pointer mr-2"
                      size="txtLexendDecaRegular48"
                    >
                      Registration Page
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
                <div className="bg-blue_gray-800 flex flex-col items-center md:ml-auto mr-[17px] p-[9px] px-[50px] md:px-5 rounded-[10px] w-full">
                  <div className="h-[25px] relative w-full overflow-hidden">
                    <Link to="/pm">
                      <Text
                        className="m-auto text-center text-white-A700 text-xl md:text-[15px]"
                        size="txtLexendDecaRegular20"
                      >
                        back
                      </Text>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[57px] items-center justify-start md:px-5 w-[24%] md:w-full">
          <Text
            className="md:text-5xl text-[64px] text-blue_gray-800 text-center"
            size="txtLexendDecaRegular64"
          >
            Create employer
          </Text>
          {errorMessage && (
            <Text className="text-red-500 mb-2" size="txtMontserratMedium14">
              {errorMessage}
            </Text>
          )}
          <div className="flex flex-col items-center justify-start w-full gap-3">
            {/* <Input
              name="username"
              placeholder="Login"
              className="p-0 placeholder:text-white-A700 text-center text-sm min-w-[276px]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              // onChange={(e) => {
              //   console.log("Username changed:", e.target.value);
              //   setUsername(e.target.value);
              // }}
            />
            <Input
              name="password"
              placeholder="Password"
              className="p-0 placeholder:text-white-A700 text-center text-sm min-w-[276px]"
              wrapClassName="mt-[10px]"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // onChange={(e) => setPassword(e.target.value)}
            /> */}
            <Input
              name="email"
              placeholder="Email"
              className="p-0 placeholder:text-white-A700 text-center text-sm min-w-[276px]"
              wrapClassName="mt-[10px]"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              name="full_name"
              placeholder="Full name"
              className="p-0 placeholder:text-white-A700 text-center text-sm min-w-[276px]"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              name="username"
              placeholder="Username"
              className="p-0 placeholder:text-white-A700 text-center text-sm min-w-[276px]"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              name="password"
              placeholder="Password"
              className="p-0 placeholder:text-white-A700 text-center text-sm min-w-[276px]"
              wrapClassName="mt-[10px]"
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="capitalize cursor-pointer min-w-[300px] mt-[15px] text-base text-center"
              color="green_A400"
              size="xs"
              onClick={handleNavigate}
            >
              create
            </Button>
            {/* <Button
              className="capitalize cursor-pointer min-w-[300px] mt-[18px] text-base text-center"
              color="green_A400"
              size="xs"
            >
              sign up {username} {password}
            </Button> */}
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
    </>
  );
};

export default DashboardRegisterLightThemePage;
