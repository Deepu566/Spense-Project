import React from 'react'
import "./Rules.scss"

const Rules = () => {
    return (
        <div className='Rules'>
            <div className="rulesContainer">
                <h2>Property Rules</h2>
                <h3>Check-in: 12PM Check-Out: 12PM</h3>
                <div className="list">
                    <ul>
                        <li>Guest with fever are not allowed.</li>
                        <li>Guest from containment zones are not allowed.</li>
                        <li>GUest below 18 are not allowed at the property.</li>
                        <li>PAN Card and Non-Govt ID are not accespted as proof(s).</li>
                        <li>Aadhar ,Driving License and Govt ID are accepted as ID proof(s).</li>
                        <li>Property staff is trained on hygiene guideline.</li>
                        <li>Pets are not allowed.</li>
                        <li>Outside food is not allowed.</li>
                        <li>Smoking within the premises is not allowed.</li>
                        <li>Does not allow private parties and events.</li>
                        <li>Quarrantine protocols are being followed as per local government authorities.</li>
                    </ul>
                    <ul>
                        <li>Pets are not allowed.</li>
                        <li>Outside food is not allowed.</li>
                        <li>Smoking within the premises is not allowed.</li>
                        <li>Does not allow private parties and events.</li>
                        <li>Quarrantine protocols are being followed as per local government authorities.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Rules
