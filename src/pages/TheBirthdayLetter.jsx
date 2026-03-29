// ...existing code...
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheBirthdayLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>Hi lorraine sorry for everything its your special day and i wouldnt miss saying happy birthday to you thank you fort everything and dli taka malimtan as always ill always be thankful nimo and always be cheering for you from afar, i hope happy naka and if naa man kay problema ma doulan ra gyud ko perme gotcha always chempe</p>
                    <p style={{ textAlign: "right" }}>with love,</p>
                    <p style={{ textAlign: "right" }}>momkie</p>
                </div>
            </div>
            <div className="title">
                <p>ABRIHI CHEME BOLEME </p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/i forgive you as much as you forgive me.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">i forgive you as much as you forgive me</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/bolepe.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">bolepe</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/cherpe.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">cherpe</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/chembe.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">chembe</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
// ...existing code...