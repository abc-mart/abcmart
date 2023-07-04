import React from 'react';
import './main/scss/topcookie.scss';

export default function TopCookieComponent({topCookieClose}){

    const onClickTopCookieClose=(e)=>{
        e.preventDefault();
        topCookieClose('yes', 3);
    }

    return (
        <div id='topCookie'>
            <div className="container">
                <img src="./img/cookie/1681192539922.jpg" alt="" />
                <a onClick={onClickTopCookieClose} href="!#">
                    
                </a>
            </div>
        </div>
    );
};

