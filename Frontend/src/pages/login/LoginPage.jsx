import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async() => {
    try {
      const { data } =await axios.post(
        "http://localhost:8080/login",
        {
          username: username,
          password: password,
          email: email,
          phoneNumber: phoneNumber,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("http://localhost:5173/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" mt-28 h-screen min-h-screen w-full">
      <div className="h-3/4 w-full flex flex-wrap justify-center items-center">
        <div className=" flex flex-wrap justify-center items-center h-full w-2/4 ">
          <div className="flex flex-wrap justify-center w-3/4 h-2/3 min-h-fit ">
            <h1 className="w-full h-14  text-4xl text-gray-700 font-medium text-center">
              Login
            </h1>
            <p className="text-center w-full h-10 text-xl text-gray-700 font-light">
              Or not registered yet?{" "}
              <Link
                to={"/signup"}
                className="text-blue-400 hover:text-blue-800"
              >
                signup
              </Link>
              .
            </p>
            <div className="text-center w-3/5 text-xl text-gray-700 font-light flex flex-wrap justify-center">
              <label htmlFor="username" className="w-full h-10 text-left">
                Username:{" "}
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="border w-full"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="text-center w-3/5 text-xl text-gray-700 font-light flex flex-wrap justify-center">
              <label htmlFor="email" className="w-full h-10 text-left">
                Email:{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="border w-full"
              />
            </div>
            <div className="text-center w-3/5 text-xl text-gray-700 font-light flex flex-wrap justify-center">
              <label htmlFor="password" className="w-full h-10 text-left">
                Password:{" "}
              </label>
              <input
                type="text"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="border w-full"
              />
            </div>
            <fieldset className="border border-black w-3/5 h-1/6 flex flex-wrap text-gray-600 px-2">
              <legend>Mobile Number</legend>
              <input
                type="number"
                name="isd"
                id=""
                placeholder="+91"
                value={"+91"}
                className="bg-gray-100 w-2/12 h-8 text-gray-600 text-center scale-105"
              />
              <input
                type="number"
                name="number"
                id="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-10/12 h-8 text-gray-600 "
              />
            </fieldset>

            <div className="w-full h-12 flex flex-wrap justify-center items-center">
              <button
                type="submit"
                className="bg-blue-400 w-1/4 h-5/6 mt-6 text-white rounded-3xl hover:bg-black "
                onClick={() => handleSubmit()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap justify-start items-center h-full w-2/4 ">
          <div className="flex flex-wrap justify-center items-center h-2/3 w2/3 ">
            <img
              src="media/images/signup.png"
              alt="Sign up"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
