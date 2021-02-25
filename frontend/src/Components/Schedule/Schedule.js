import Programme from "./ProgrammeSection/Programme";
import SpeakersSection from "./SpeakersSection/SpeakersSection";
import TopWave from "./TopWaveSection/TopWave";

const Schedule = () => {
    return (
        <div>
            <TopWave />
            <Programme />
            <div className="section-title programme-title">Prelegenci</div>
            < SpeakersSection />
            < SpeakersSection />
            < SpeakersSection />
            
        </div>
    );
};

export default Schedule;
