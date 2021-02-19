import TimeLine from "../../TimeLine/TimeLine";
import "./Programme.css";
const Programme = () => {
    return (
        <div className="programme">
            <h1 className="programme-title">Harmonogram</h1>

            <div className="date-container-left">24 kwietnia</div>
            <TimeLine />

            <div className="date-container-right">25 kwietnia</div>
        </div>
    );
};

export default Programme;
