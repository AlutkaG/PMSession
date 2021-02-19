import TimeLine from "../../TimeLine/TimeLine";
import "./Programme.css";
const Programme = () => {
    return (
        <div>
            <h1 className="programme-title">Harmonogram</h1>

            <TimeLine />
            
            <div>
                <div className="date-container-left">24 kwietnia</div>
                <div className="date-container-right">24 kwietnia</div>
            </div>
        </div>
    );
};

export default Programme;
