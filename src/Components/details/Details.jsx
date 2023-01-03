import React from 'react'
import "./Details.scss"

const Details = () => {
    return (
        <div className='Detail'>
            <div className="detailsWrapper">
                <div className='details'>
                    <div className="hoteldetails">
                        <h1>Hotel Vishal @Airpot</h1>
                        <div className='addressContainer'>
                            <div className="address">104/2/2,National Highway 8,Mahipalpur,New Delhi,11037 New Delhi India
                            </div>
                            <div className="viewMap">
                                <a href="https://www.google.com/maps">View map</a>
                            </div>
                        </div>
                        <div className="mobile">
                            <span>+91-8858745784</span>,
                            <span>8858745784</span>
                        </div>
                    </div>
                    <div className="map">
                        <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" alt="" />
                    </div>
                </div>
                <div className="feature">
                    <ul>
                        <li>Free Parking </li>
                        <li>Conference room </li>
                        <li>Atm </li>
                        <li>Conference Room </li>
                        <li>Conference Room </li>
                    </ul>
                </div>
                <div className="location">
                    Located in New Delhi,5.5 km from Rashtrapati Bhavan, Hotel Vishal@ Airport
                    provides accomodation with a restaurent free private Parking and a fitness
                    center. This 3-start hotel offers an ATM, a conceierge service and
                    free WiFi. The accomodation feature a 24- hour
                    front data, room service and currency exchange for guests.
                </div>
            </div>
        </div>
    )
}

export default Details;
