import "./TimeLine.css";
import coffee from "../../Assets/coffee.png";

const TimeLine = () => {
    return (
        <div className="timeline">
            <ul>
                <li>
                    <div className="item">
                        <div className="time">
                            <h4>9:30</h4>
                        </div>
                    </div>
                </li>
                <li>
                    {/* First section */}
                    <div className="item">
                        <div className="description1 description">
                            <div className="title">
                                <h3>What is lorem?</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">prelegent</div>
                                    <div className="details-xm">
                                        Juliusz Niedziejewski
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">forma</div>
                                    <div className="details-xm">warsztat</div>
                                </div>
                            </div>
                            <div className="button">
                                <button className="btn-find-out-more">
                                    Dowiedz się więcej!
                                </button>
                            </div>
                        </div>

                        <div className="description2 description">
                            <div className="description-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc vitae blandit nulla. Fusce
                                rutrum nibh eget orci imperdiet, bibendum
                                tincidunt neque porta. Aenean justo turpis,
                                mollis a nulla at, egestas dapibus lacus.
                                Vivamus efficitur magna vitae orci volutpat
                                dapibus.
                            </div>
                            <div className="button">
                                <button className="btn-find-out-more">
                                    Dowiedz się więcej!
                                </button>
                            </div>
                        </div>

                        <div className="description3 description">
                            <div className="title">
                                <h3>What is lorem?</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">prelegent</div>
                                    <div className="details-xm">
                                        Juliusz Niedziejewski
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">forma</div>
                                    <div className="details-xm">warsztat</div>
                                </div>
                            </div>
                            <div className="button">
                                <button className="btn-find-out-more">
                                    Dowiedz się więcej!
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
                {/* Second section */}
                <li>
                    <div className="item">
                    <div className="time">
                            <h4>9:30</h4>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="item">
                        <div className="description1 description">
                            <div className="description-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc vitae blandit nulla. Fusce
                                rutrum nibh eget orci imperdiet, bibendum
                                tincidunt neque porta. Aenean justo turpis,
                                mollis a nulla at, egestas dapibus lacus.
                                Vivamus efficitur magna vitae orci volutpat
                                dapibus.
                            </div>
                            <div className="button">
                                <button className="btn-find-out-more">
                                    Dowiedz się więcej!
                                </button>
                            </div>
                        </div>

                        <div className="description2 description">
                            <div className="title">
                                <h3>What is lorem?</h3>
                            </div>
                            <div className="details">
                                <div className="speaker-name">
                                    <div className="details-sm">prelegent</div>
                                    <div className="details-xm">
                                        Juliusz Niedziejewski
                                    </div>
                                </div>
                                <div className="type">
                                    <div className="details-sm">forma</div>
                                    <div className="details-xm">warsztat</div>
                                </div>
                            </div>
                            <div className="button">
                                <button className="btn-find-out-more">
                                    Dowiedz się więcej!
                                </button>
                            </div>
                        </div>

                        <div className="description3 description">
                            <div className="description-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc vitae blandit nulla. Fusce
                                rutrum nibh eget orci imperdiet, bibendum
                                tincidunt neque porta. Aenean justo turpis,
                                mollis a nulla at, egestas dapibus lacus.
                                Vivamus efficitur magna vitae orci volutpat
                                dapibus.
                            </div>
                            <div className="button">
                                <button className="btn-find-out-more">
                                    Dowiedz się więcej!
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
                {/* Third section */}
                <li>
                    <div className="item">
                    <div className="time">
                            <h4>9:30</h4>
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
                            <div className="coffee-break-text">Coffee break</div>
                        </div>

                    </div>
                </li>
                
            </ul>

            
        </div>
    );
};

export default TimeLine;

