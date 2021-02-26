import Programme from "./ProgrammeSection/Programme";
import SpeakersSection from "./SpeakersSection/SpeakersSection";
import TopWave from "./TopWaveSection/TopWave";
import photo from "../../Assets/SzymonGornik_PMI.jpg"

const speakersRows =[{title: "Lorem Ipsumowicz", subTitle:"minim veniam", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", photoL: photo, photoR:photo},
{title: "Lorem Ipsumowicz", subTitle:"minim veniam", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", photoL: photo, photoR:photo},
{title: "Lorem Ipsumowicz", subTitle:"minim veniam", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", photoL: photo, photoR:photo}]



const Schedule = () => {
    return (
        <div>
            <TopWave />
            <Programme />
            
            < SpeakersSection speakersRows={speakersRows}/>
        </div>
    );
};

export default Schedule;
