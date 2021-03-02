import "./SpeakersSection.css";


const SpeakersSection = (props) => {
    const speakersRows = props.speakersRows;
    return (
        
        <div className="speakers-section">
            <div className="section-title programme-title">Prelegenci</div>
            {speakersRows.map((row)=> {return(
            <div className="speaker-item">
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
