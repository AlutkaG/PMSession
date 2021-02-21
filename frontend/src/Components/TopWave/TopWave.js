import "./TopWave.css";
import logo from "../../Assets/logo2018BW.png";
const TopWave = () => {
	return (
		<div>
			<section className='wave-container2'>
				<div style={{ display: "flex" }}>
					<div className='wave-text'>
						<div className='wave-text1'>24-25 kwietnia 2021</div>
						<div className='wave-text2'> Project Management</div>
						<div className='wave-session-full-screen'>
							<div className='wave-text3'>Session</div>
							<div className='wave-text4'>2021</div>
						</div>
						<div className='wave-text3 wave-session-mobile-screen'>Session</div>
						<div className='wave-text4 wave-session-mobile-screen'>2021</div>
						<div className='wave-text5'>
							Największe tego typu wydarzenie we Wrocławiu stworzone zarówno dla
							początkujących jak i profesjonalnych project managerów.
						</div>
						<div style={{ paddingTop: "45px" }}>
							<button className='wave-button'>Link do konferencji</button>
						</div>
					</div>
					<img src={logo} alt='Logo' className='wave-img' />
				</div>
				<div className='wave wave1'></div>
				<div className='wave wave2'></div>
				<div className='wave wave3'></div>
			</section>
		</div>
	);
};

export default TopWave;
