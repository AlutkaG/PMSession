import "./Statistics.css";

const Statistics = () => {
	return (
		<div id='statistics'>
			<div style={{ overflow: "hidden" }}>
				<div className='grey-circle2' />
				<div style={{ marginTop: "-900px" }}>
					<div className='stat-header'>Nasze statystyki</div>
					<div className='stat-full-screen'>
						<div className='stat-row1'>
							<div className='stat-box'>
								<div className='stat-number'>8</div>
								<div className='stat-text'>edycji</div>
							</div>
							<div className='stat-box'>
								<div className='stat-number yellow'>47</div>
								<div className='stat-text yellow'>prelekcji</div>
							</div>
							<div className='stat-box'>
								<div className='stat-number'>134</div>
								<div className='stat-text'>prelegentów</div>
							</div>
						</div>
						<div className='stat-row2'>
							<div className='stat-box'>
								<div className='stat-number'>974</div>
								<div className='stat-text'>uczestników</div>
							</div>
							<div className='stat-box'>
								<div className='stat-number yellow'>69</div>
								<div className='stat-text yellow'>warsztatów</div>
							</div>
							<div className='stat-box'>
								<div className='stat-number'>8</div>
								<div className='stat-text'>symulacji</div>
							</div>
						</div>
					</div>
				</div>
				{/* mobile screen */}
				<div className='stat-mobile-screen'>
					<div className='stat-box'>
						<div className='stat-number' style={{ marginTop: "30px" }}>
							8
						</div>
						<div className='stat-text'>edycji</div>
					</div>
					<div className='stat-box'>
						<div className='stat-number yellow' style={{ marginTop: "38px" }}>
							47
						</div>
						<div className='stat-text yellow'>prelekcji</div>
					</div>
					<div className='stat-box'>
						<div className='stat-number' style={{ marginTop: "38px" }}>
							134
						</div>
						<div className='stat-text'>prelegentów</div>
					</div>

					<div className='stat-box'>
						<div className='stat-number' style={{ marginTop: "47px" }}>
							974
						</div>
						<div className='stat-text'>uczestników</div>
					</div>
					<div className='stat-box'>
						<div className='stat-number yellow' style={{ marginTop: "47px" }}>
							69
						</div>
						<div className='stat-text yellow'>warsztatów</div>
					</div>
					<div className='stat-box'>
						<div className='stat-number' style={{ marginTop: "47px" }}>
							8
						</div>
						<div className='stat-text'>symulacji</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
