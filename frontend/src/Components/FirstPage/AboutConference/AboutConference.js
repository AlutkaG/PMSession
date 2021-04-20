import "./AboutConference.css";
import photo1 from "../../../Assets/photo1.jpg";
import photo2 from "../../../Assets/photo2.png";
import photo3 from "../../../Assets/photo3.jpg";
import photo4 from "../../../Assets/photo4.jpg";
import photo5 from "../../../Assets/photo5.jpg";
import { useState, useEffect } from "react";

const slidesImg = [
  { slide: photo3 },
  { slide: photo1 },
  { slide: photo4 },
  { slide: photo5 },
];

const AboutConference = (props) => {
  const [activeRadio, setActiveRadio] = useState(null);
  const [checked, setChecked] = useState(3);
  const [bgColor, setBgColor] = useState("white");
  const [sizeCircle, setSizeCircle] = useState("1.5");

  const changeBgColor = (id) => {
    setActiveRadio(id);
    setBgColor("white");
    setSizeCircle("1.5");
  };

  useEffect(() => {
    var counter = 1;
    const interval = setInterval((e) => {
      document.getElementById("radio" + counter).checked = true;
      setActiveRadio(0);
      counter++;
      if (counter > 5) {
        counter = 1;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div id="about-conference">
      <div className="about-full-screen">
        <div className="about-full1">
          <div className="slider">
            <div className="slides">
              <input
                type="radio"
                name="radio-btn"
                id="radio1"
                onClick={(e) => changeBgColor(1)}
                onChange={(e) => setChecked(1)}
                checked={checked === 1 ? "checked" : ""}
              />
              <input
                type="radio"
                name="radio-btn"
                id="radio2"
                onClick={(e) => changeBgColor(2)}
                onChange={(e) => setChecked(2)}
                checked={checked === 2 ? "checked" : ""}
              />
              <input
                type="radio"
                name="radio-btn"
                id="radio3"
                onClick={(e) => changeBgColor(3)}
                onChange={(e) => setChecked(3)}
                checked={checked === 3 ? "checked" : ""}
              />
              <input
                type="radio"
                name="radio-btn"
                id="radio4"
                onClick={(e) => changeBgColor(4)}
                onChange={(e) => setChecked(4)}
                checked={checked === 4 ? "checked" : ""}
              />
              <input
                type="radio"
                name="radio-btn"
                id="radio5"
                onClick={(e) => changeBgColor(5)}
                onChange={(e) => setChecked(5)}
                checked={checked === 5 ? "checked" : ""}
              />

              {/* pierwsze zdjecie, ktore jest odnosnikiem 
								do przesuwania sie kolejnych zdj. */}
              <div className="slide first">
                <img src={photo2} alt="Zdjęcie" />
              </div>
              {/* mapowanie zdjec */}
              {slidesImg.map((slide, index) => {
                return (
                  <div key={index} className="slide">
                    <img src={slide.slide} alt="Zdjęcie" />
                  </div>
                );
              })}
              <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
                <div className="auto-btn5"></div>
              </div>
            </div>
            <div className="navigation-manual">
              <label
                for="radio1"
                className="manual-btn"
                style={
                  activeRadio === 1
                    ? {
                        backgroundColor: bgColor,
                        transform: `scale(${sizeCircle})`,
                      }
                    : null
                }
              ></label>

              <label
                for="radio2"
                className="manual-btn"
                style={
                  activeRadio === 2
                    ? {
                        backgroundColor: bgColor,
                        transform: `scale(${sizeCircle})`,
                      }
                    : null
                }
              ></label>
              <label
                for="radio3"
                className="manual-btn"
                style={
                  activeRadio === 3
                    ? {
                        backgroundColor: bgColor,
                        transform: `scale(${sizeCircle})`,
                      }
                    : null
                }
              ></label>
              <label
                for="radio4"
                className="manual-btn"
                style={
                  activeRadio === 4
                    ? {
                        backgroundColor: bgColor,
                        transform: `scale(${sizeCircle})`,
                      }
                    : null
                }
              ></label>
              <label
                for="radio5"
                className="manual-btn"
                style={
                  activeRadio === 5
                    ? {
                        backgroundColor: bgColor,
                        transform: `scale(${sizeCircle})`,
                      }
                    : null
                }
              ></label>
            </div>
          </div>
          <div className="grey-circle" />
        </div>
        <div className="about-full2">
          <div className="header-conf">O konferencji</div>
          <div className="text-conf">
            Project Management Session to cykl szkoleń, dzięki którym dowiesz
            się przede wszystkim, jak efektywniej prowadzić projekty, budować
            sieć powiązań biznesowych, jak współpracować z kontrahentami, a
            także w jaki sposób pozyskiwać nowe bazy klientów. 
            Z uwagi na zaistniałą sytuację epidemiologiczną wydarzenie w tym
            roku odbędzie się na platformie ZOOM.
            <br />
            Nasi prelegenci, którzy podzielą się swoim doświadczeniem, to ludzie
            pełni pasji, na co dzień zaangażowani w rozwiązywanie realnych
            wyzwań, jakie stawia przed nimi realizacja projektu. To szczególnie
            ważne, by w tej dziedzinie być „na bieżąco”, ponieważ w dzisiejszych
            czasach rynek jest dynamicznie kształtowany przez konsumenta.
            Podczas cyklu szkoleń zostanie poruszony między innymi temat
            radzenia sobie w stresujących sytuacjach, więc skorzystają na tym
            także osoby pracujące w takich warunkach. Nie może Cię zabraknąć, do
            zobaczenia online.
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutConference;
