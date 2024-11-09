import arrow from "../assets/arrow.png";

const Banner = () => {
  return (
    <div className="relative mb-5">
      <div className="relative mb-5">
        <img
          src="https://greatstack.in/assets/hero-wMB5D_Q0.png"
          alt="Banner"
          className="w-screen h-screen object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08003ab3] to-[#08003ab3] flex items-center justify-center">
          <div className="w-10/12 text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
              We Ensure better education <br /> for a better world
            </h1>
            <p className="text-lg mb-6 text-center">
              Our cutting-edge curriculum is designed to empower students with
              the knowledge, skills, and experiences needed to excel in the
              dynamic field of education.
            </p>
            
              <button className="bg-white inline-flex gap-2 text-black ps-5 py-2 rounded-full hover:bg-gray-200">
                Explore More
                <img src={arrow} alt="" className="w-1/6  py-1"/>
              </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
