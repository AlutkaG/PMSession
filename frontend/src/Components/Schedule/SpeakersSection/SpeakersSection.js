import "./SpeakersSection.css";
import photo from "../../../Assets/SzymonGornik_PMI.jpg"
const SpeakersSection = () => {
    return (
        <div className="speakers-section">
            
            <div className="speaker-item">
                <div className="photo-l">
                    <img src={photo} alt=""/>
                </div>
                <div className="speaker-description">
                    <div className="description-title">Lorem Ipsumowicz</div>
                    <div className="description-sub-title">minim veniam</div>
                    <div className="description-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                </div>
                <div className="photo-l"><img src={photo} alt=""/></div>
            </div>
        </div>
    );
};

export default SpeakersSection;
