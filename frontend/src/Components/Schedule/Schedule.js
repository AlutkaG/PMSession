import Programme from "./ProgrammeSection/Programme";
import SpeakersSection from "./SpeakersSection/SpeakersSection";
import TopWave from "./TopWaveSection/TopWave";
import Footer from "../Footer/Footer";
import photo1 from "../../Assets/Dariusz Gajewicz.jpg";
import photo2 from "../../Assets/Andrzej Gajewski.jpg";
import photo3 from "../../Assets/Jakub Petrykowski.jpg";
import photo4 from "../../Assets/g_szal.jpg";
import photo5 from "../../Assets/k_krawczyk.png";

const speakersRows = [
  
    
  {
    title: "Grzegorz Szałajko",
    subTitle: "Doradca strategiczny, menedżer projektów i Coach biznesowy",
    description:
      "Pan Grzegorz ma doświadczenie zawodowe obejmujące zarówno współpracę z firmami o zasięgu globalnym, jak i z lokalnymi liderami rynku w branżach takich jak IT, telekomunikacja, outsourcing usług, finanse i bankowość, R&D, edukacja, produkcja przemysłowa, energetyka czy branża wydobywcza. Od 2005 roku aktywnie współtworzy prestiżowy konkurs IPMA Global Project Excellence Award. Uczestniczy również w tworzeniu międzynarodowych standardów, m.in. jako przodujący edytor IPMA Project Excellence Baseline oraz członek Core Team PMI Global Standard for Portfolio, Program and Project Risk Management. W roku 2016 uhonorowany międzynarodową nagrodą IPMA Otto Ziegelmeier Award za wkład w promowanie doskonałości w zarządzaniu projektami. W roku 2018 uhonorowany przez IPMA Polska nagrodą Atlas Project Managementu za szczególny wkład w rozwój dziedziny zarządzania projektami. Można spotkać go również jako cenionego speakera podczas licznych wydarzeń w kraju i na świecie.",
    photoL: photo4,
  },
  {
    title: "Dariusz Gajewicz",
    subTitle: "Menadżer projektów",
    description:
      "Pan Dariusz Gajewicz od ośmiu lat zajmuje się zarządzaniem projektami, a od pięciu robi to zawodowo. Swoją pasję do zwinnych metod zarządzania rozwijał w Kole Naukowym PMGroup, a obecnie pełni funkcję Project Managera we wrocławskim startupie GlucoActive zajmującym się technologiami medycznymi. Możecie wierzyć lub nie, ale jest współorganizatorem trzech edycji Project Management Session! Prywatnie jest miłośnikiem papierowych gier RPG, klasyki literatury, gier komputerowych oraz fotografii analogowej. Pan Dariusz Gajewicz wraz z panem Andrzejem Gajewskim zgodzili się poprowadzić dla Was warsztaty! ",
    photoL: photo1,
  },
  {
    title: "Andrzej Gajewski",
    subTitle: "Menedżer projektów",
    description:
      " Pan Andrzej Gajewski jest z kolei związany z Zarządzaniem Projektami od ponad 20 lat w różnych rolach: od Menedżera projektów, przez Program Managera po Head of PMO. Zrealizował ponad 50 inicjatyw różnej wielkości, w branżach: IT, finanse i bankowość, budownicto, hotelarstwo i turystyką, a także produkcją i logistyką. Od 2014 roku jest Assessorem w organizowanym przez IPMA Polska konkursie na najlepszy projekt roku – Polish Project Excellence Award. Pan Andrzej Gajewski jest również Trenerem Zarządzania Projektami i Myślenia Wizualnego. Jest pasjonatem turkusowych organizacji i Management 3.0, a w praktyce łączy projekty biznesowe z podejściem Agile i SAFe. Czas wolny spędza przy gitarze, sketchnoting’u, aparacie fotograficznym, czy pisząc bloga. Uwielbia słuchać muzyki.",
    photoL: photo2,
  },

  {
    title: "Karolina Krawczyk",
    subTitle: "Menadżer Branży Cyfrowej",
    description:
      " Pani Karolina pełni rolę Managera Transformacji Cyfrowej w Societe Generale Equipement Finance. Do tej pory zajmowała się szeroko rozumianym zarządzeniem projektami oraz programami projektów, zarządzaniem portfolio projektów. Była Scrum Master kilku zespołów scrumowych oraz moderatorem procesu Design Thinking. Sama najlepiej czuje się w sektorze usług branży finansowej i przez całą jej dotychczasową karierę, była związana właśnie z tym obszarem. Wielką pasją Pani Karoliny jest szeroko pojęte zarządzanie i wspieranie samoorganizacji zespołów. Prywatnie uwielbia podróżować i poznawać nowe kultury, a niedawno zakochała się w Niderlandach. Poprowadzi wykład „Scaling Agile @ Spotify, czyli jak to się robi w Skandynawii”. ",
    photoL: photo5,
  },

  {
    title: "Jakub Petrykowski",
    subTitle: "Menager IT",
    description:
      "Jest nie tylko managerem IT oraz trenerem, ale również performance coachem. Na co dzień stosuje w swojej pracy wszechstronne metody budowy mistrzostwa, zwłaszcza umiejętności miękkich. Zwraca szczególną uwagę na komunikację, sposób pracy z klientem, a także na budowanie pozytywnych, zdrowych relacji. Pan Jakub przez ostatnie 15 lat pracował w różnych rolach w firmach IT w Polsce i za granicą, m.in. jako product manager w Google, HR-owiec, trener, management coach oraz analityk biznesowy w software hous’ach. Obecnie jest Team Coachem w DO OK i trenerem, a także partnerem merytorycznym firmy szkoleniowej Zero Bullshit Management. Podczas naszego wydarzenia pan Jakub poprowadzi wykład „Relaks czy strategia: co ćwiczy sprytny manager, grając na komputerze?”. Dowiedzie się na nim między innymi o przykładach rozwoju kluczowych kompetencji managerskich za pomocą topowych gier strategicznych i symulacyjnych.",
    photoL: photo3,
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
