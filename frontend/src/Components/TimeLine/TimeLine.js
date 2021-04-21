import "./TimeLine.css";
import coffee from "../../Assets/coffee.png";

const TimeLine = () => {
    return (
        <div className="timeline">
            <ul>
                <li>
                    <div className="item">
                        <div className="time">
                            <h4>9:00-10:30</h4>
                        </div>
                    </div>
                </li>
                <li>
                    {/* First section */}
                    <div className="item">
                        <div className="description1 description">
                            <div className="title">
                                <h3>SALA GŁÓWNA</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">Prelegent:</div>
                                    <div className="details-xm">
                                        Jakub Drzazga
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Błędy Zwinności - czyli Cargo Cult Agile</div>
                                </div>
                            </div>
                            {/* <div className="button">
                                <button className="btn-find-out-more">
                                    Dowiedz się więcej!
                                </button>
                            </div> */}
                        </div>

                        <div className="description2 description">
                            <div className="title">
                                <h3>SALA 2</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">Prelegent:</div>
                                    <div className="details-xm">
                                       Karolina Krawczyk
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Scaling Agile @ Spotify, czyli jak to się robi w Skandynawii</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </li>
                {/* Second section */}
                <li>
                    <div className="item">
                    <div className="time">
                            <h4>10:45-12:15</h4>
                        </div>
                    </div>
                </li>
                <li>
                <div className="item">
                        <div className="description1 description">
                            <div className="title">
                                <h3>SALA GŁÓWNA</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">Prelegent:</div>
                                    <div className="details-xm">
                                        Grzegorz Szałajko
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Jak skutecznie zmieniać organizacje, aby efekt został na dłużej?</div>
                                </div>
                            </div>
                            {/* <div className="button">
                                <button className="btn-find-out-more">
                                    Dowiedz się więcej!
                                </button>
                            </div> */}
                        </div>

                        <div className="description2 description">
                            <div className="title">
                                <h3>SALA 2</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">Prelegent:</div>
                                    <div className="details-xm">
                                       Marek Bugiel
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Jak stać się liderem? - Praktyczne narzędzia. <strong>Warsztaty</strong></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </li>
                {/* Third section */}
                <li>
                    <div className="item">
                    <div className="time">
                            <h4>12:30-14:00</h4>
                        </div>
                    </div>
                </li>
                <li>
                    {/* <div className="item-coffee">
                        <div >
                           
                        </div>
                        <div className="coffee-break">
                            <div className="coffee-logo">
                                <img src={coffee} alt=""/>
                            </div>
                            <div className="coffee-break-text">Coffee break</div>
                        </div>

                    </div> */}
                    <div className="item">
                        <div className="description1 description">
                            <div className="title">
                                <h3>SALA GŁÓWNA</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">Prelegent:</div>
                                    <div className="details-xm">
                                       Katarzyna Wójcik
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Design Thinking. Myśl projektowo, działaj nieszablonowo.</div>
                                </div>
                            </div>
                            {/* <div className="button">
                                <button className="btn-find-out-more">
                                    Dowiedz się więcej!
                                </button>
                            </div> */}
                        </div>

                        <div className="description2 description">
                            <div className="title">
                                <h3>SALA 2</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">Prelegent:</div>
                                    <div className="details-xm">
                                       Jakub Petrykowski
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Relaks czy strategia: co ćwiczy sprytny manager grając na komputerze?</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </li>
                {/* */}
                <li>
                    <div className="item">
                    <div className="time">
                            <h4>14:00-15:00</h4>
                        </div>
                    </div>
                </li>
                <li>
                     <div className="item-coffee">
                        <div >
                           
                        </div>
                        <div className="coffee-break">
                            <div className="coffee-logo">
                                <img src={coffee} alt=""/>
                            </div>
                            <div className="coffee-break-text">Coffee break - Dr. Joanna Rzempała – IPMA Polska</div>
                        </div>

                    </div> 
                </li>
                {/**/}
                <li>
                    <div className="item">
                    <div className="time">
                            <h4>15:00-16:30</h4>
                        </div>
                    </div>
                </li>
                <li>
                    {/* <div className="item-coffee">
                        <div >
                           
                        </div>
                        <div className="coffee-break">
                            <div className="coffee-logo">
                                <img src={coffee} alt=""/>
                            </div>
                            <div className="coffee-break-text">Coffee break</div>
                        </div>

                    </div> */}
                    <div className="item">
                        <div className="description1 description">
                            <div className="title">
                                <h3>SALA GŁÓWNA</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">Prelegent:</div>
                                    <div className="details-xm">
                                       Rafał Stańczak
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Definicja wymagań w Scrum.</div>
                                </div>
                            </div>
                            {/* <div className="button">
                                <button className="btn-find-out-more">
                                    Dowiedz się więcej!
                                </button>
                            </div> */}
                        </div>

                        <div className="description2 description">
                            <div className="title">
                                <h3>SALA 2</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">Prelegent:</div>
                                    <div className="details-xm">
                                       Katarzyna Krzeszowska
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Biznesem są produkty a nie projekty.</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </li>
                {/* */}
                <li>
                    <div className="item">
                    <div className="time">
                            <h4>16:45-18:15</h4>
                        </div>
                    </div>
                </li>
                <li>
                    {/* <div className="item-coffee">
                        <div >
                           
                        </div>
                        <div className="coffee-break">
                            <div className="coffee-logo">
                                <img src={coffee} alt=""/>
                            </div>
                            <div className="coffee-break-text">Coffee break</div>
                        </div>

                    </div> */}
                    <div className="item">
                        <div className="description1 description">
                            <div className="title">
                                <h3>SALA GŁÓWNA</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">Prelegent:</div>
                                    <div className="details-xm">
                                       Piotr Hendżak
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Prawdziwy Agile... ale gdzie?</div>
                                </div>
                            </div>
                            {/* <div className="button">
                                <button className="btn-find-out-more">
                                    Dowiedz się więcej!
                                </button>
                            </div> */}
                        </div>

                        <div className="description2 description">
                            <div className="title">
                                <h3>SALA 2</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">Prelegent:</div>
                                    <div className="details-xm">
                                       Katarzyna Sławińska-Oleszek
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Budowanie i rozwój zespołu projektowego. <strong>Warsztaty</strong></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </li>
                {/* */}
                <li>
                    <div className="item">
                    <div className="time">
                            <h4>18:30-20:00</h4>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="item">
                        <div className="description1 description">
                            <div className="title">
                                <h3>SALA GŁÓWNA</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">Prelegent:</div>
                                    <div className="details-xm">
                                       Kamil Dudek
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Cykl projektu informatycznego od sprzedaży do wdrożenia. <strong>Warsztaty</strong></div>
                                </div>
                            </div>
                        </div>
                        <div className="description4 description">
                            
                            
                        </div>
                    </div>
                </li>
    
            </ul>            
    </div>
    );
};

export default TimeLine;

