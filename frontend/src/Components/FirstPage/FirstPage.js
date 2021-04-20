import AboutConference from "./AboutConference/AboutConference";
import Statistics from "./Statistics/Statistics";
import Thoughts from "./Thoughts/Thoughts";
import TopWaveMain from "./TopWaveMain/TopWaveMain";
import Sponsors from "./Sponsors/Sponsors";
import Footer from "../Footer/Footer";

const FirstPage = () => {
  return (
    <div>
      <TopWaveMain />
      <AboutConference />
      <Statistics />
      <Thoughts />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default FirstPage;
