import TimeLine from "../../TimeLine/TimeLine";
import SpeakersSection from "../SpeakersSection/SpeakersSection";
import "./Programme.css";
const Programme = () => {
    return (
        <div className="programme">
            <div className="section-title programme-title">Harmonogram</div>

            <div className="date-container-left">24 kwietnia</div>
            <TimeLine />
            <div className="date-container-right">25 kwietnia</div>
            <TimeLine />

            
        </div>
    );
};

export default Programme;
