import "./Statistics.css";

const Statistics = () => {
	return (
		<div id='statistics' style={{ overflowX: "hidden" }}>
			<div className='grey-circle2' />
			<div style={{ marginTop: "-900px" }}>
				<div className='stat-header'>Nasze statystyki</div>
				<div className='stat-row1'>
					<div className='stat-box'>
						<div className='stat-number' style={{ marginTop: "53px" }}>
							8
						</div>
						<div className='stat-text'>edycji</div>
					</div>
					<div className='stat-box'>
						<div className='stat-number yellow' style={{ marginTop: "38px" }}>
							47
						</div>
						<div className='stat-text yellow' style={{ marginTop: "15px" }}>
							prelekcji
						</div>
					</div>
					<div className='stat-box'>
						<div className='stat-number' style={{ marginTop: "38px" }}>
							134
						</div>
						<div className='stat-text' style={{ marginTop: "15px" }}>
							prelegentów
						</div>
					</div>
				</div>
				<div className='stat-row2'>
					<div className='stat-box'>
						<div className='stat-number' style={{ marginTop: "47px" }}>
							974
						</div>
						<div className='stat-text' style={{ marginTop: "18px" }}>
							uczestników
						</div>
					</div>
					<div className='stat-box'>
						<div className='stat-number yellow' style={{ marginTop: "47px" }}>
							69
						</div>
						<div className='stat-text yellow' style={{ marginTop: "18px" }}>
							warsztatów
						</div>
					</div>
					<div className='stat-box'>
						<div className='stat-number' style={{ marginTop: "47px" }}>
							8
						</div>
						<div className='stat-text' style={{ marginTop: "18px" }}>
							symulacji
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
