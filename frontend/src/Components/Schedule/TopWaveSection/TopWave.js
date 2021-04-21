import "./TopWave.css";
import logo from "../../../Assets/logo2018BW.png"
const TopWave = () => {
    return (
        <div>
            <section className="wave-container">
                <div className="wave-item">
                    <div className="wave-text">
                        <div className="wave-text-small">24-25 kwietnia 2021</div>
                        <div className="wave-text-big">Wydarzenie</div>
                    </div>
                    <div className="wave-logo">
                        <img src={logo} alt=""/>
                    </div>
                </div>
                
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
            </section>
        </div>
    );
};

export default TopWave;
