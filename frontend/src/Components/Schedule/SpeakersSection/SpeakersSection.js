import "./SpeakersSection.css";
import photo from "../../../Assets/SzymonGornik_PMI.jpg"

const speakerRow =[{title: "Lorem Ipsumowicz", subTitle:"minim veniam", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", photoL: photo, photoR:photo}]
const SpeakersSection = () => {
    return (
        <div className="speakers-section">
            
            {speakerRow.map((row, index)=> {return(<div className="speaker-item">
                <div className="photo-l">
                    <img src={row.photoL} alt=""/>
                </div>
                <div className="speaker-description">
                    <div className="description-title">{row.title}</div>
                    <div className="description-sub-title">{row.subTitle}</div>
                    <div className="description-content">
                        {row.description}
                    </div>
                </div>
                <div className="photo-l"><img src={row.photoR} alt=""/></div>
            </div>)})}

            
        </div>
    );
};

export default SpeakersSection;
