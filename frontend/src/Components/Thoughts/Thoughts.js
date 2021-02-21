import "./Thoughts.css";
import photo1 from "../../Assets/KateTerlecka_BrassWillow_recommend.jpg";
import photo2 from "../../Assets/LukaszSiekiewicz_DynamikaRozowju.png";
import photo3 from "../../Assets/PawelBochnowski_Eurobank.png";
import photo4 from "../../Assets/SzymonGornik_PMI.jpg";

const opinionRow = [
	{
		image: photo1,
		name: "Kate Terlecka",
		description: "Brass Willow",
		info:
			"Konferencja Project Management Session to zdecydowanie najlepiej przygotowana konferencja studencka w jakiej miałam okazję uczestniczyć. Pełen profesjonalizm organizatorów, działania dopięte na ostatni guzik i świetny system komunikacji podczas wydarzenia sprawiają, że bycie uczestnikiem, prelegentem czy pomocnikiem jest przyjemnością.",
	},
	{
		image: photo2,
		name: "Łukasz Sienkiewicz",
		description: "Dynamika Rozwoju",
		info:
			"Od chwili, w której przekroczyłem drzwi budynku, aż do ostatniej minuty czułem się dopieszczony, zarówno jako prelegent jak i uczestnik wydarzenia. Ciekawe prelekcje i dobrze wyselekcjonowani prelegenci sprawili, że z wydarzenia wyszedłem bogatszy o wiedzę i pełen energii do dalszego działania.",
	},
	{
		image: photo3,
		name: "Paweł Bochnowski",
		description: "Eurobank",
		info:
			"W PMSession uczestniczę w różnej roli nieprzerwanie od 2012 roku, gdy moja kariera PMa nabierała tempa. Dziś jako program manager w banku i trener mogę polecić tą konferencję pełną konkretnej wiedzy dla studentów i początkujących kierowników projektów.",
	},
	{
		image: photo4,
		name: "Szymon Górnik",
		description: "PMI Poland Chapter",
		info:
			"PMSession to jedno z niewielu wydarzeń na eventowej mapie project managera, które co roku stoi na najwyższym poziomie merytorycznym i organizacyjnym. Duża dawka wiedzy oraz możliwości przeplatania warsztatów z prelekcjami - każda osoba powiązana z zarządzaniem projektami znajdzie temat dla siebie.",
	},
];

const Thoughts = () => {
	return (
		<div id='thoughts' style={{ overflow: "hidden" }}>
			<div className='th-full-screen'>
				<div className='grey-circle3' />
				<div style={{ marginTop: "-650px" }}>
					<div className='th-header'>Opinie o konferencji</div>
					<div style={{ marginTop: "151px" }}>
						{opinionRow.map((row, index) => {
							return (
								<div key={index} style={{ display: "flex" }}>
									<div>
										<img src={row.image} alt='' className='th-img' />
										<div className='th-box-name-descp'>
											<div className='th-text name'>{row.name}</div>
											<div className='th-text descp'>{row.description}</div>
										</div>
									</div>
									<div
										style={{
											height: "200px",
											position: "relative",
										}}
									>
										<div className='th-text info'>{row.info}</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className='grey-circle4' />
				</div>
			</div>
			{/* mobile screen */}
			<div className='th-mobile-screen'>
				<div className='grey-circle3' />
				<div>
					<div className='th-header'>Opinie o konferencji</div>
					<div style={{ marginTop: "151px" }}>
						{opinionRow.map((row, index) => {
							return (
								<div
									key={index}
									style={{ display: "flex", flexDirection: "column" }}
								>
									<div>
										<img src={row.image} alt='' className='th-img' />
										<div className='th-box-name-descp'>
											<div className='th-text name'>{row.name}</div>
											<div className='th-text descp'>{row.description}</div>
										</div>
									</div>
									<div style={{ marginBottom: "70px" }}>
										<div className='th-text info'>{row.info}</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className='grey-circle4' />
				</div>
			</div>
		</div>
	);
};

export default Thoughts;
