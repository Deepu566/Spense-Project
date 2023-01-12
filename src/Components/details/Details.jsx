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
                                <a href="https://goo.gl/maps/GbQ4pxBtBvPa445K7" target="_blank"  >View map</a>
                            </div>
                        </div>
                        <div className="mobile">
                            <span>+91-8858745784</span>,
                            <span>8858745784</span>
                        </div>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.901258548866!2d77.1164787145575!3d28.542687494893592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c1372346d55%3A0x8cbcbe3054243ad7!2sHotel%20Vishal%20Residency%20by%20RPI!5e0!3m2!1sen!2sin!4v1673538370397!5m2!1sen!2sin" width="400" height="300" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
