import "./Sponsors.css";
import photo1 from "../../Assets/logo_pmg.png";
import photo2 from "../../Assets/pwr_logo.png";
import photo3 from "../../Assets/control_tec_logo.png";
import photo4 from "../../Assets/biuroKarier.png";
import photo5 from "../../Assets/dlastudentapl-logo.jpg";
import photo6 from "../../Assets/studentnews.png";
import photo7 from "../../Assets/podPrad.jpg";
import photo8 from "../../Assets/pmi-logo.png";
import photo9 from "../../Assets/StrefaPMI.png";

const Sponsors = () => {
	return (
		<div id='sponsors'>
			<div className='spon-full-screen'>
				<div className='spon-header'>Sponsorzy</div>
				<div className='spon-first-row'>
					<div>
						<div className='spon-name org'>Organizator</div>
						<img
							src={photo1}
							alt=''
							style={{ width: "40vw", marginTop: "10vh" }}
						/>
					</div>
					<div>
						<div className='spon-name strat'>Sponsor strategiczny</div>
						<img
							src={photo2}
							alt=''
							style={{ width: "30vw", marginTop: "10vh" }}
						/>
					</div>
				</div>
				<div className='spon-name' style={{ marginTop: "15vh" }}>
					Partnerzy
				</div>
				<img src={photo3} alt='' style={{ width: "45vw", marginTop: "10vh" }} />
				<div className='spon-name' style={{ marginTop: "15vh" }}>
					Media
				</div>
				<div className='spon-media-div'>
					<div className='image'>
						<img src={photo4} alt='' />
					</div>
					<div className='image'>
						<img src={photo5} alt='' />
					</div>
					<div className='image'>
						<img src={photo6} alt='' />
					</div>
				</div>
				<div className='spon-media-div2'>
					<div className='image'>
						<img src={photo7} alt='' />
					</div>
					<div className='image'>
						<img src={photo8} alt='' />
					</div>
					<div className='image'>
						<img src={photo9} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
