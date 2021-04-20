import "./TimeLine.css";

const TimeLine2 = () => {
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
                                        Ewelina Gruszyńska
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Od ogółu do szczegółu, czyli słów kilka o projektowaniu aplikacji.</div>
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
                                       Sylwia Dąbrowska
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Kto zarządza emocjami: lider/zespół? Czy one zarządzają nami? <strong>Warsztaty</strong></div>
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
                                       Szymon Górnik
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Road Map skutecznego PMa, czyli na co zwrócić uwagę rozwijając karierę zawodową.</div>
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
                                      Tomasz Andreasik
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Planowanie wielkich projektów - czyli ruletka w Monte Carlo. <strong>Warsztaty</strong></div>
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
                                      Edyta Samborska i Remigiusz Samborski
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Marka Eskpercka, czyli od Zera do PMa.</div>
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
                                    Dariusz Gajewicz i Andrzej Gajewski
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Przepis na idealny projekt. <strong>Warsztaty</strong></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </li>
               
                {/**/}
                <li>
                    <div className="item">
                    <div className="time">
                            <h4>14:15-15:45</h4>
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
                                       Wojciech Czujowski
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Elementy Scrum'a w zarządzaniu projektami non-IT - przykład udanej transformacji Agile.</div>
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
                                       Dariusz Gajewicz i Andrzej Gajewski
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">Temat:</div>
                                    <div className="details-xm">Przepis na idealny projekt. <strong>Warsztaty</strong></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </li>
               
            </ul>            
    </div>
    );
};

export default TimeLine2;

