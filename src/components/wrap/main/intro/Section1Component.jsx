import React from 'react';
import './scss/section1.scss';

export default function Section1Component(){
    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide10"><a href="!#"><img src="./img/intro/20230616162144328.jpg" alt="" /></a></li>
                                    <li className="slide slide1"><a href="!#"><img src="./img/intro/20230602100214370.jpg" alt="" /></a></li>
                                    <li className="slide slide2"><a href="!#"><img src="./img/intro/20230614184554575.png" alt="" /></a></li>
                                    <li className="slide slide3"><a href="!#"><img src="./img/intro/20230619181553966.jpg" alt="" /></a></li>
                                    <li className="slide slide4"><a href="!#"><img src="./img/intro/20230616141208997.jpg" alt="" /></a></li>
                                    <li className="slide slide5"><a href="!#"><img src="./img/intro/20230616165455717.jpg" alt="" /></a></li>
                                    <li className="slide slide6"><a href="!#"><img src="./img/intro/20230615162259178.jpg" alt="" /></a></li>
                                    <li className="slide slide7"><a href="!#"><img src="./img/intro/20230619101241400.png" alt="" /></a></li>
                                    <li className="slide slide8"><a href="!#"><img src="./img/intro/20230620115903592.jpg" alt="" /></a></li>
                                    <li className="slide slide9"><a href="!#"><img src="./img/intro/20230620110516745.jpg" alt="" /></a></li>
                                    <li className="slide slide10"><a href="!#"><img src="./img/intro/20230616162144328.jpg" alt="" /></a></li>
                                    <li className="slide slide1"><a href="!#"><img src="./img/intro/20230602100214370.jpg" alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="page-box">
                            <div className="pagenation">
                                <span className='current-page'>01</span>
                                <i>/</i>
                                <span className='all-page'>10</span>
                            </div>
                            <button className='prev-btn'></button>
                            <button className='next-btn'></button>
                            <button className='play-btn'></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};