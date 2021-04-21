import Programme from "./ProgrammeSection/Programme";
import SpeakersSection from "./SpeakersSection/SpeakersSection";
import TopWave from "./TopWaveSection/TopWave";
import Footer from "../Footer/Footer";
import photo1 from "../../Assets/Dariusz Gajewicz.jpg";
import photo2 from "../../Assets/Andrzej Gajewski.jpg";
import photo3 from "../../Assets/Jakub Petrykowski.jpg";
import photo4 from "../../Assets/g_szal.jpg";


const speakersRows = [
  {
    title: "Dariusz Gajewicz",
    subTitle: "Project Manager",
    description:
      "Sami nie możemy uwierzyć, że już za chwilę wszyscy spotkamy się na tegorocznej edycji Project Management Session! A naszą radość podkręca to, że pan Dariusz Gajewicz wraz z panem Andrzejem Gajewskim zgodzili się poprowadzić dla Was warsztaty! Pan Dariusz Gajewicz od ośmiu lat zajmuje się zarządzaniem projektami, a od pięciu robi to zawodowo. Swoją pasję do zwinnych metod  zarządzania rozwijał w Kole Naukowym PMGroup, a obecnie pełni rolę Project Managera we wrocławskim startupie GlucoActive zajmującym się technologiami medycznymi. Możecie wierzyć lub nie, ale jest współorganizatorem trzech edycji PMSession! Prywatnie jest miłośnikiem papierowych gier RPG, klasyki literatury, gier komputerowych oraz fotografii analogowej. Do zobaczenia już za parę dni! ",
    photoL: photo1,
  },
  {
    title: "Andrzej Gajewski",
    subTitle: "Project Manager",
    description:
      " Pan Andrzej Gajewski jest z kolei związany z Zarządzaniem Projektami od ponad 20 lat w różnych rolach: od Project Managera przez Program Managera po Head of PMO. Zrealizował ponad 50 różnej wielkości inicjatyw w branżach od IT przez finanse i bankowość, ale także budownictwo, hotelarstwo i turystykę, aż do produkcji i logistyki.  Od 2014 roku jest Assessorem w organizowanym przez IPMA Polska konkursie na najlepszy projekt roku – Polish Project Excellence Award. Pan Andrzej Gajewski jest również Trenerem Zarządzania Projektami i Myślenia Wizualnego. Jest fascynatem turkusowych organizacji i Management 3.0, a w praktyce łączy projekty biznesowe z podejściem Agile i SAFe. Czas wolny spędza przy gitarze, sketchnoting’u, aparacie fotograficznym, czy pisząc bloga. Uwielbia słuchać muzyki. Te warsztaty to nie byle co! Cały będzie przeprowadzony przy użyciu technik i narzędzi facylitacji.  Do zobaczenia już za parę dni! ",
    photoL: photo2,
  },

  

  {
    title: "Jakub Petrykowski",
    subTitle: "Menager IT",
    description:
      "Do Project Management Session zostało dokładnie 10 dni! Nie pozostaje nam nic innego jak przedstawić kolejnego prelegenta! Na tegorocznym PMS będziecie mieli okazję posłuchać pana Jakuba Petrykowskiego! Jest nie tylko managerem IT oraz trenerem, ale również performance coachem. Na co dzień stosuje w swojej pracy wszechstronne metody budowy mistrzowstwa, zwłaszcza umiejętności miękkich. Zwraca szczególną uwagę na komunikację, sposób pracy z klientem, a także na budowanie pozytywnych, zdrowych relacji.       Pan Jakub przez ostatnie 15 lat pracował w różnych rolach w firmach IT w Polsce i za granicą, m.in. jako product manager w Google, HR-owiec, trener, management coach oraz analityk biznesowy w software house’ach. Obecnie jest Team Coachem w DO OK i trenerem a także pertnerem merytorycznym firmy szkoleniowej Zero Bullshit Management.      Podczas naszego wydarzenia pan Jakub poprowadzi wykład „Relaks czy strategia: co ćwiczy sprytny manager grając na komputerze?”. Dowiedzie się na nim między innymi  o przykładach rozwoju kluczowych kompetencji managerskich za pomocą topowych gier strategicznych i symulacyjnych.       To co, widzimy się?      Do zobaczenia! ",
    photoL: photo3,
  },

  {
    title: "Grzegorz Szałajko",
    subTitle: "Międzynarodowy ekspert w obszarze zarządzania projektami",
    description:
      "Jako doradca strategiczny wspiera organizacje w budowaniu strategii, modeli biznesowych oraz skutecznych środowisk do realizacji przedsięwzięć i wprowadzania zmian. Posiada doświadczenie zawodowe obejmujące zarówno współpracę z firmami o zasięgu globalnym jak i z lokalnymi liderami rynku w branżach takich jak IT, telekomunikacja, outsourcing usług, finanse i bankowość, R&D, edukacja, produkcja przemysłowa, energetyka czy branża wydobywcza.  Od 2005 roku aktywnie współtworzy prestiżowy konkurs IPMA Global Project Excellence Award. Uczestniczy również w tworzeniu międzynarodowych standardów, m.in. jako wiodący edytor IPMA Project Excellence Baseline oraz członek core team PMI Global Standard for Portfolio, Program and Project Risk Management. W roku 2016 uhonorowany międzynarodową nagrodą IPMA Otto Ziegelmeier Award za wkład w promowanie doskonałości w zarządzaniu projektami. W roku 2018 uhonorowany przez IPMA Polska nagrodą Atlas Project Management’u za szczególny wkład w rozwój dziedziny zarządzania projektami. Można spotkać go również jako cenionego speakera podczas licznych wydarzeń w kraju i na świecie. ",
    photoL: photo4,
  },
 
];

const Schedule = () => {
  return (
    <div>
      <TopWave />
      <Programme />
      <SpeakersSection speakersRows={speakersRows} />
      <Footer style={{ backgroundColor: "#efb822", color: "#464646" }} />
    </div>
  );
};

export default Schedule;
