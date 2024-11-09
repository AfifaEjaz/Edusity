import { React, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of card content (You can add more items as needed)
  const cards = [
    { id: 1, name: "Emily Williams", address : "Edusity, USA", profile : "https://greatstack.in/assets/user-1-dp2DpvM_.png", content: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations." },
    { id: 2, name: "William Jackson", address : "Edusity, USA",profile : "https://greatstack.in/assets/user-2-UK2CIdqi.png", content: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations." },
    // Add more cards as needed
  ];

  const totalCards = cards.length;
  const cardsPerSlide = 2;

  // Function to handle next slide
  const handleNext = () => {
    if (currentIndex < totalCards - cardsPerSlide) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to handle previous slide
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <p className="text-dark-blue text-center text-base font-semibold mt-10 mb-2">
        TESTIMONIALS
      </p>
      <h3 className="text-center text-3xl font-extrabold mb-12">
        What Students Says
      </h3>

      {/* <div className="slider w-3/4">
        <ul className="flex">
          <li className="flex justify-center items-center">
            <div className="flex flex-col justify-between">
                <div className="flex">
                    <img src="https://greatstack.in/assets/user-1-dp2DpvM_.png" alt="" 
                    className="w-1/6 h-1/6 object-cover rounded-full"/>
                    <div>
                        <h3>Emily Williams</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li className="flex justify-center items-center">
            <div className="flex flex-col justify-between">
                <div className="flex">
                    <img src="https://greatstack.in/assets/user-1-dp2DpvM_.png" alt="" 
                    className="w-1/6 h-1/6 object-cover rounded-full"/>
                    <div>
                        <h3>Emily Williams</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
        </ul>
      </div> */}

      <div className="relative overflow-hidden flex justify-center items-center gap-7 w-full md:w-11/12 xl:w-3/4">
        {/* Cards Wrapper */}
        <div
          className="flex transition-transform duration-300 gap-3 md:gap-7 ease-in-out w-3/5 md:w-4/5"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)`,
          }}
        >
          {cards.map((card, key) => (
            <div className="flex flex-col justify-between gap-4 rounded-lg p-2 md:p-8 bg-white" key={key}>
              <div className="flex flex-col md:flex-row gap-3">
                <img
                  src={card.profile}
                  alt=""
                  className="w-1/5 border-4 border-dark-blue object-cover rounded-full"
                />
                <div className="text-gray">
                  <h3 className="text-extrabold text-dark-blue">{card.name}</h3>
                  <span>{card.address}</span>
                </div>
              </div>
              <p className="text-gray text-xs md:text-sm">
               {card.content}
              </p>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-dark-blue p-4 rounded-full"
          onClick={handlePrev}
          disabled={currentIndex === 0} // Disable if at the first slide
        >
         <FaArrowLeft color="white"/> {/* Left Arrow */}
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-dark-blue p-4 rounded-full"
          onClick={handleNext}
          disabled={currentIndex >= totalCards - cardsPerSlide} // Disable if at the last slide
        >
          <FaArrowRight color="white"/>{/* Right Arrow */}
        </button>
      </div>
    </>
  );
};

export default Testimonials;
