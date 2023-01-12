import React from 'react';
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="logo">Sample Logo</div>
                <div className="needHelp">Need help? Call<span>8107344682</span></div>
            </div>
        </div>
    )
}

export default Navbar
