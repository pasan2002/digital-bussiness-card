import React from 'react';
import facebookLogo from "../assets/Facebook Icon.png";

import githubLogo from "../assets/GitHub Icon.png";

export default function Footer() {
    return (
        <div className='cardfooter'>
            
            <a href="https://www.facebook.com/profile.php?id=100075745068488">
                <img src={facebookLogo} alt="facebook logo" />
            </a>
            <a href="https://github.com/pasan2002">
                <img src={githubLogo} alt="github logo" />
            </a>

        </div>
    );
}
