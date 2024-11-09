import React from "react";
import Graduation from "../assets/graduation.png";
import Masters from "../assets/masters.png";
import PostMasters from "../assets/post-graduation.png";

const Program = () => {
  return (
    <>
      <p className="text-dark-blue text-center text-base font-semibold mt-10">
        OUR PROGRAM
      </p>
      <h3 className="text-center text-3xl font-bold my-2">What We Offer</h3>
        <div className="flex flex-col md:flex-row justify-center items-center w-3/4 gap-9 my-12">
          <div className="relative group cursor-pointer w-5/6 h-5/6">
            <img
              src="https://greatstack.in/assets/program-1-DA_EvTPy.png"
              alt=""
              className="object-cover rounded-lg w-full h-full"
            />
            <div className="absolute inset-0 bg-dark-blue opacity-0 transition-opacity duration-500 flex flex-col justify-center items-center text-white rounded-lg group-hover:opacity-50">
              <img
                src={Graduation}
                alt=""
                className="h-1/5 w-1/5 object-cover transform translate-y-20 transition-transform duration-500 group-hover:translate-y-0"
              />
              <p className="transform translate-y-20 transition-transform duration-500 group-hover:translate-y-0">
                Graduation Degree
              </p>
            </div>
          </div>

          <div className="relative group cursor-pointer w-5/6 h-5/6">
            <img
              src="https://greatstack.in/assets/program-2-DRqwF0EM.png"
              alt=""
              className="object-cover rounded-lg w-full h-full"
            />
            <div className="absolute inset-0 bg-dark-blue opacity-0 transition-opacity duration-500 flex flex-col justify-center items-center text-white rounded-lg group-hover:opacity-50">
              <img
                src={Masters}
                alt=""
                className="h-1/5 w-1/5 object-cover transform translate-y-20 transition-transform duration-500 group-hover:translate-y-0"
              />
              <p className="transform translate-y-20 transition-transform duration-500 group-hover:translate-y-0">
                Masters Degree
              </p>
            </div>
          </div>
          <div className="relative group cursor-pointer w-5/6 h-5/6">
            <img
              src="https://greatstack.in/assets/program-3-C0g4YULi.png"
              alt=""
              className="object-cover rounded-lg w-full h-full"
            />
            <div className="absolute inset-0 bg-dark-blue opacity-0 transition-opacity duration-500 flex flex-col justify-center items-center text-white rounded-lg group-hover:opacity-50">
              <img
                src={PostMasters}
                alt=""
                className="h-1/5 w-1/5 object-cover transform translate-y-20 transition-transform duration-500 group-hover:translate-y-0"
              />
              <p className="transform translate-y-20 transition-transform duration-500 group-hover:translate-y-0">
                Post Graduation
              </p>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Program;
