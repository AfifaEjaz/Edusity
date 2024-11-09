import whiteArrow from "../assets/whiteArrow.png";

const Campus = () => {
  return (
    <>
      <p className="text-dark-blue text-center text-base font-semibold mt-10">
        GALLERY
      </p>
      <h3 className="text-center text-3xl font-extrabold my-2">
        Campus Photos
      </h3>

      <div className="flex flex-wrap justify-center gap-5 items-center w-10/12 my-12">
        <div className="w-2/5 lg:w-1/5">
          <img
            src="https://greatstack.in/assets/gallery-1-HP2uKW94.png"
            alt=""
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
        <div className="w-2/5 lg:w-1/5">
          <img
            src="https://greatstack.in/assets/gallery-2-DYatBGZh.png"
            alt=""
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
        <div className="w-2/5 lg:w-1/5">
          <img
            src="https://greatstack.in/assets/gallery-3-C4KpO1U2.png"
            alt=""
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
        <div className="w-2/5 lg:w-1/5">
          <img
            src="https://greatstack.in/assets/gallery-4-LJEJ329C.png"
            alt=""
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
      </div>

      <button className="bg-dark-blue inline-flex gap-3 text-white ps-5 py-2 rounded-full">
        Explore More
        <img src={whiteArrow} alt="" className="w-1/6 py-1"/>
      </button>
    </>
  );
};

export default Campus;
