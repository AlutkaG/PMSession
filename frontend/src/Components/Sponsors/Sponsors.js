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
				<div style={{ display: "flex", marginTop: "182px", width: "100vw" }}>
					<div>
						<div className='spon-name' style={{ width: "50vw" }}>
							Organizator
						</div>
						<img
							src={photo1}
							alt=''
							style={{ width: "40vw", marginTop: "10vh" }}
						/>
					</div>
					<div>
						<div className='spon-name' style={{ width: "50vw" }}>
							Sponsor strategiczny
						</div>
						<img
							src={photo2}
							alt=''
							style={{ width: "30vw", marginTop: "10vh" }}
						/>
					</div>
				</div>
				<div className='spon-name' style={{ marginTop: "210px" }}>
					Partnerzy
				</div>
				<img src={photo3} alt='' style={{ width: "45vw", marginTop: "10vh" }} />
				<div className='spon-name' style={{ marginTop: "239px" }}>
					Media
				</div>
				<div className='spon-media-div'>
					<div>
						<img src={photo4} alt='' style={{ width: "50vw" }} />
					</div>
					<div>
						<img src={photo5} alt='' style={{ width: "50vw" }} />
					</div>
					<div>
						<img src={photo6} alt='' />
					</div>
				</div>
				<div className='spon-media-div2'>
					<div>
						<img src={photo7} alt='' />
					</div>
					<div>
						<img src={photo8} alt='' />
					</div>
					<div>
						<img src={photo9} alt='' />
					</div>
				</div>
			</div>
			{/* mobile screen */}
			<div className='spon-mobile-screen'>
				<div className='spon-header'>Sponsorzy</div>

				<div className='spon-name'>Organizator</div>
				<img
					src={photo1}
					alt=''
					style={{
						width: "322px",
						height: "198.5px",
						marginTop: "63px",
						marginLeft: "20px",
						marginBottom: "20px",
					}}
				/>

				<div className='spon-name'>Sponsor strategiczny</div>
				<img
					src={photo2}
					alt=''
					style={{
						width: "300px",
						height: "433px",
						marginTop: "63px",
						marginLeft: "20px",
					}}
				/>

				<div className='spon-name' style={{ marginTop: "80px" }}>
					Partnerzy
				</div>
				<img
					src={photo3}
					alt=''
					style={{ marginTop: "80px", width: "322px", height: "78.5px" }}
				/>
				<div className='spon-name' style={{ marginTop: "80px" }}>
					Media
				</div>
				<div>
					<img
						src={photo4}
						alt=''
						style={{ width: "322px", height: "200px", marginTop: "30px" }}
					/>
				</div>
				<div>
					<img
						src={photo5}
						alt=''
						style={{
							width: "322px",
							height: "73px",
							marginTop: "30px",
						}}
					/>
				</div>
				<div>
					<img
						src={photo6}
						alt=''
						style={{
							width: "322px",
							height: "36.5px",
							marginTop: "50px",
						}}
					/>
				</div>
				<div>
					<img
						src={photo7}
						alt=''
						style={{ width: "322px", height: "91.5px", marginTop: "30px" }}
					/>
				</div>
				<div>
					<img
						src={photo8}
						alt=''
						style={{
							width: "322px",
							height: "156.6px",
							marginTop: "40px",
						}}
					/>
				</div>
				<div>
					<img
						src={photo9}
						alt=''
						style={{
							width: "322px",
							height: "77px",
							marginTop: "40px",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Sponsors;
