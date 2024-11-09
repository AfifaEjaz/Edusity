import React from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import whiteArrow from "../assets/whiteArrow.png";
import contact from "../assets/contact.png";
import phone from "../assets/phone.png";
import address from "../assets/address.png";

const Contact = () => {
  const handleVerificationSuccess = (token) => {
    console.log("hCaptcha Token:", token);
  };
  return (
    <>
      <p className="text-dark-blue text-center text-base font-semibold mt-10 mb-2">
        CONTACT US
      </p>
      <h3 className="text-center text-3xl font-extrabold mb-12">
        Get In Touch
      </h3>
      <div className="w-6/7 lg:w-4/5  flex flex-col md:flex-row gap-8 px-10 my-10">
        <div className="w-full md:w-1/2 ">
          <h3
            className="mb-5 flex items-center gap-3 text-2xl font-medium"
            style={{ color: "#000f38" }}
          >
            Send us a message
            <img
              src="https://greatstack.in/assets/msg-icon-ClKDHhj8.png"
              alt=""
              className=" object-cover"
              style={{width: "35px"}}
            />
          </h3>

          <p className="mb-3 text-gray">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul className="flex flex-col gap-3 text-gray">
            <li className="flex gap-2">
              <img src={contact} alt="" className="object-cover w-8" />
              Contact@GreatStack.dev
            </li>
            <li className="flex gap-2">
              <img src={phone} alt="" className="object-cover w-6" />
              +1 123-456-7890
            </li>
            <li className="flex gap-2">
              <img src={address} alt="" className="object-cover w-5 h-5" />
              77 Massachusetts Ave, Cambridge
              <br /> MA 02139, United States
            </li>
          </ul>
        </div>
        <form className="w-full md:w-1/2 flex flex-col gap-3 text-gray">
          <div>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-2"
              style={{ backgroundColor: "#ebecfe" }}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your mobile number"
              className="w-full p-2"
              style={{ backgroundColor: "#ebecfe" }}
            />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email id"
              className="w-full p-2"
              style={{ backgroundColor: "#ebecfe" }}
            />
          </div>
          <div>
            <label htmlFor="message">Write your messages here</label>
            <textarea
              placeholder="Enter your message"
              className="w-full p-2"
              style={{ backgroundColor: "#ebecfe" }}
              id="message"
              rows={5}
            ></textarea>
          </div>
          <HCaptcha
            sitekey="10000000-ffff-ffff-ffff-000000000001"
            onVerify={handleVerificationSuccess}
          />

          <button className="bg-dark-blue mb-10 inline-flex gap-3 w-fit text-white ps-5 py-2 rounded-full">
            Submit now
            <img src={whiteArrow} alt="" className="w-1/6 py-1" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
