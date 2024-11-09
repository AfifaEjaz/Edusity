import React from "react";

const Aboutus = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-4/5 gap-10 my-16">
        <div className="w-full lg:w-2/4 order-2 lg:order-1">
          <img src="https://greatstack.in/assets/about-Bupj5-5F.png" alt="about-img"
          className="object-cover h-full w-full rounded-lg" />
        </div>
        <div className="flex flex-col justify-between gap-2 w-full lg:w-2/4 order-1 lg:order-2">
          <h3 className="font-semibold text-base text-dark-blue">ABOUT UNIVERSITY</h3>
          <h2 className="font-extrabold text-3xl" style={{color : '#000f38'}}>Nurturing Tomorrow's <br /> Leaders Today</h2>
          <p style={{color : '#676767'}}>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
          <p style={{color : '#676767'}}>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
          <p style={{color : '#676767'}}>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
