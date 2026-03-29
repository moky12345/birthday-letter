import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom"; 
import "../App.css";

function Home() {
  const navigate = useNavigate(); 
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <>
    <div className="app">
      {/* Top image spot */}
      <div className="home-top-image" style={{ textAlign: "center", marginTop: 20 }}>
        <button className="img-button" onClick={() => openPopup("/img/letter2.png")} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <img src="/img/letter2.png" alt="top-letter" style={{ width: 120, height: "auto" }} />
        </button>
      </div>

      <div className="text-container">
        <div className="text">
          <Typewriter
            options={{
              strings: ["HAPPY BIRTHDAY LOWEMPS THE CHEME DEVOURER🎂"],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </div>
        <button className="btn" onClick={() => navigate("/letter")}>
          Next
        </button>
      </div>
  </div>
  {popupImage && (
      <div className="popup-overlay" onClick={closePopup}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <img src={popupImage} alt="Popup" className="popup-image" />
          <button className="close-btn" onClick={closePopup}>X</button>
        </div>
      </div>
    )}
    </>
  );
}

export default Home;
