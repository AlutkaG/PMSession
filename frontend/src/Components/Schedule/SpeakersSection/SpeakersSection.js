import "./SpeakersSection.css";
const SpeakersSection = () => {
    return (
        <div className="speakers-section">
            <div className="speakers-section-title">Prelegenci</div>
            <div className="speakers-section-content">
                <div className="speakers-section-content-row">
                    <div className="speakers-section-item">
                        <div className="speakers-section-item-photo"></div>
                        <div className="speakers-section-item-text">
                            <div className="speakers-section-item-text-name">
                                Magdalena Gruszka
                            </div>
                            <div className="speakers-section-item-text-subdescription">
                                Pieniąki
                            </div>
                            <div className="speakers-section-item-text-description">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur eu tortor bibendum,
                                tempus sapien in, egestas sem.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeakersSection;
