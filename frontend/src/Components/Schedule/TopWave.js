import "./TopWave.css";
const TopWave = () => {
    return (
        <div>
            <section className="wave-container">
                <div className="wave-text">
                    <div className="wave-text-small">21-23 Marca 2021</div>
                    <div className="wave-text-big">Wydarzenie</div>
                </div>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
            </section>
        </div>
    );
};

export default TopWave;
