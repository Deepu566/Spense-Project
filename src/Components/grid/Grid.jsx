import React from 'react'
import "./Grid.scss";
import Img1 from "../../Assests/Img1.jpg";
import Img2 from "../../Assests/Img2.jpg";
import Img3 from "../../Assests/Img3.jpg";
import Img4 from "../../Assests/Img4.jpg";
import Img5 from "../../Assests/Img5.jpg";

const Grid = () => {
    return (
        <div className='grid' >
            <div className="frame">
                <div className="left">
                    <img src={Img1} alt="" />
                </div>
                <div className="right">
                    <div className="top">
                        <div className="top1">
                            <img src={Img2} alt="" />
                        </div>
                        <div className="top2"><img src={Img3} alt="" /></div>
                    </div>
                    <div className="bottom">
                        <div className="bottom1"><img src={Img4} alt="" /></div>
                        <div className="bottom2"><img src={Img5} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="big circle">
                <div className="mini1 circle">V</div>
                <div className="mini2 circle">R</div>
                <div className="mini3 circle"></div>
            </div>
        </div>
    )
}

export default Grid
