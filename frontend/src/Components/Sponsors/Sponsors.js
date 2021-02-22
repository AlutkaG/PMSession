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
				<div className='grey-circle4' />

				<div className='spon-header'>Sponsorzy</div>
				<div style={{ display: "flex", marginTop: "182px" }}>
					<div>
						<div className='spon-name'>Organizator</div>
						<img
							src={photo1}
							alt=''
							style={{
								width: "644px",
								height: "397px",
								marginTop: "63px",
								marginLeft: "248px",
							}}
						/>
					</div>
					<div>
						<div className='spon-name' style={{ marginLeft: "322px" }}>
							Sponsor strategiczny
						</div>
						<img
							src={photo2}
							alt=''
							style={{
								width: "372px",
								height: "541px",
								marginTop: "63px",
								marginLeft: "322px",
							}}
						/>
					</div>
				</div>
				<div className='spon-name' style={{ marginTop: "210px" }}>
					Partnerzy
				</div>
				<img
					src={photo3}
					alt=''
					style={{ marginTop: "80px", width: "648px", height: "157px" }}
				/>
				<div className='spon-name' style={{ marginTop: "239px" }}>
					Media
				</div>
				<div className='spon-media-div'>
					<div>
						<img
							src={photo4}
							alt=''
							style={{ width: "444px", height: "273px", marginTop: "110px" }}
						/>
					</div>
					<div>
						<img
							src={photo5}
							alt=''
							style={{
								width: "659px",
								height: "152px",
								marginTop: "183.5px",
								marginLeft: "67.5px",
							}}
						/>
					</div>
					<div>
						<img
							src={photo6}
							alt=''
							style={{
								width: "423.5px",
								height: "48px",
								marginTop: "235px",
								marginLeft: "45.5px",
							}}
						/>
					</div>
				</div>
				<div className='spon-media-div2'>
					<div>
						<img
							src={photo7}
							alt=''
							style={{ width: "588px", height: "166.5px" }}
						/>
					</div>
					<div>
						<img
							src={photo8}
							alt=''
							style={{
								width: "372px",
								height: "180px",
								marginLeft: "86px",
							}}
						/>
					</div>
					<div>
						<img
							src={photo9}
							alt=''
							style={{
								width: "552px",
								height: "133px",
								marginLeft: "58px",
							}}
						/>
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
