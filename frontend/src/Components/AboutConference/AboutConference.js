import "./AboutConference.css";
import photo1 from "../../Assets/photo1.jpg";
import photo2 from "../../Assets/photo2.png";
import photo3 from "../../Assets/photo3.jpg";
import photo4 from "../../Assets/photo4.jpg";
import photo5 from "../../Assets/photo5.jpg";
import { useState, useEffect } from "react";

const AboutConference = () => {
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

			counter++;
			if (counter > 5) {
				counter = 1;
			}
		}, 5000);
		return () => clearInterval(interval);
	});
	return (
		<div id='about-conference'>
			<div style={{ display: "flex" }}>
				<div>
					<div className='slider'>
						<div className='slides'>
							<input
								type='radio'
								name='radio-btn'
								id='radio1'
								onClick={(e) => changeBgColor(1)}
								onChange={(e) => setChecked(1)}
								checked={checked === 1 ? "checked" : ""}
							/>
							<input
								type='radio'
								name='radio-btn'
								id='radio2'
								onClick={(e) => changeBgColor(2)}
								onChange={(e) => setChecked(2)}
								checked={checked === 2 ? "checked" : ""}
							/>
							<input
								type='radio'
								name='radio-btn'
								id='radio3'
								onClick={(e) => changeBgColor(3)}
								onChange={(e) => setChecked(3)}
								checked={checked === 3 ? "checked" : ""}
							/>
							<input
								type='radio'
								name='radio-btn'
								id='radio4'
								onClick={(e) => changeBgColor(4)}
								onChange={(e) => setChecked(4)}
								checked={checked === 4 ? "checked" : ""}
							/>
							<input
								type='radio'
								name='radio-btn'
								id='radio5'
								onClick={(e) => changeBgColor(5)}
								onChange={(e) => setChecked(5)}
								checked={checked === 5 ? "checked" : ""}
							/>

							<div className='slide first'>
								<img src={photo2} alt='Zdjęcie' />
							</div>
							<div className='slide'>
								<img src={photo3} alt='Zdjęcie' />
							</div>
							<div className='slide '>
								<img src={photo1} alt='Zdjęcie' />
							</div>
							<div className='slide'>
								<img src={photo4} alt='Zdjęcie' />
							</div>
							<div className='slide'>
								<img src={photo5} alt='Zdjęcie' />
							</div>
							<div className='navigation-auto'>
								<div className='auto-btn1'></div>
								<div className='auto-btn2'></div>
								<div className='auto-btn3'></div>
								<div className='auto-btn4'></div>
								<div className='auto-btn5'></div>
							</div>
						</div>
						<div className='navigation-manual'>
							<label
								for='radio1'
								className='manual-btn'
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
								for='radio2'
								className='manual-btn'
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
								for='radio3'
								className='manual-btn'
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
								for='radio4'
								className='manual-btn'
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
								for='radio5'
								className='manual-btn'
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
					<div className='grey-circle' />
				</div>
				<div>
					<div className='header-conf'>O konferencji</div>
					<div className='text-conf'>
						PMSession jest studencką konferencją zarządzania projektami to
						dwudniowe wydarzenie skierowane zarówno do osób na co dzień
						prowadzących własne projekty, ale także do początkujących, którzy
						dopiero zapoznają się z dziedziną zarządzania projektami. <br />
						<br />
						Wydarzenie co roku umożliwia jego uczestnikom zdobycie wiedzy na
						temat metodyk i praktyk stosowanych przez największe firmy w tej
						dziedzinie. Konferencja PM Session to nie tylko prelekcje, ale
						również gry symulacyjne i warsztaty, które stanowią znaczną część
						jej programu - wszak to one najlepiej odzwierciedlają problemy,
						które mają miejsce przy realizacji projektów. <br />
						<br />
						Project Management Session to wydarzenie przyciągające zarówno
						studentów, jak i przedstawicieli biznesu, dlatego stanowi idealną
						okazję do efektywnego networkingu i wymiany doświadczeń pomiędzy
						uczestnikami wydarzenia.
					</div>
				</div>
			</div>
		</div>
	);
};
export default AboutConference;
