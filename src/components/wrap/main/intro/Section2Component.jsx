import React from 'react';
import './scss/section2.scss';

export default function Section2Component(){
    return (
        <section id="section2">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left">
                            <h2>HOT DEAL</h2>
                            <p>
                                기간한정 특가할인!
                                <br />
                                지금 특별한 가격을 만나보세요!
                            </p>
                            <a href="!#">MORE</a>
                        </div>
                        <div className="right">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide slide1">
                                            <a href="!#">
                                                <figure>
                                                    <img src="./img/intro/41193_1645062445701.jpg" alt="" />
                                                    <span>
                                                        <strong>52</strong><em>%</em>
                                                    </span>
                                                    <div className="time-sale">
                                                        <span className="date">
                                                            <span className="day-value">0</span>
                                                            <span className="day-text">DAY</span>
                                                        </span>
                                                        <span className="time">
                                                            <span className="hours">11</span>
                                                            <span className="minutes">34</span>
                                                            <span className="seconds">18</span>
                                                        </span>
                                                    </div>
                                                </figure>
                                                <div className='information-box'>
                                                    <h3>비에스큐티바이클래시</h3>
                                                    <p>887 뮌헨 독일군 스니커즈</p>
                                                    <div className="price-box">
                                                        <s className='price'>84,500</s>
                                                        <strong className='sale-price'>39,900</strong>
                                                        <span className="sale-percent">[52%]</span>
                                                    </div>
                                                </div>
                                                <div className="sale-period-box">
                                                    <span className="sale-period">
                                                        23.06.19 09:00 ~
                                                        <br />
                                                        23.06.21 08:59
                                                    </span>
                                                    <span className="rest-product-count">
                                                        <span className='rest-product-count-value'>12</span>개 남음
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide2">
                                            <a href="!#">
                                                <figure>
                                                    <img src="./img/intro/06103_1679297266326.jpg" alt="" />
                                                    <span>
                                                        <strong>40</strong><em>%</em>
                                                    </span>
                                                    <div className="time-sale">
                                                        <span className="date">
                                                            <span className="day-value">0</span>
                                                            <span className="day-text">DAY</span>
                                                        </span>
                                                        <span className="time">
                                                            <span className="hours">11</span>
                                                            <span className="minutes">34</span>
                                                            <span className="seconds">18</span>
                                                        </span>
                                                    </div>
                                                </figure>
                                                <div className='information-box'>
                                                    <h3>푸마</h3>
                                                    <p>페라리 바오 카트 프리스쿨</p>
                                                    <div className="price-box">
                                                        <s className='price'>59,000</s>
                                                        <strong className='sale-price'>35,000</strong>
                                                        <span className="sale-percent">[40%]</span>
                                                    </div>
                                                </div>
                                                <div className="sale-period-box">
                                                    <span className="sale-period">
                                                        23.06.19 09:00 ~
                                                        <br />
                                                        23.06.21 08:59
                                                    </span>
                                                    <span className="rest-product-count">
                                                        <span className='rest-product-count-value'>399</span>개 남음
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="slide slide3">
                                            <a href="!#">
                                                <figure>
                                                    <img src="./img/intro/75060_1676012674709.jpg" alt="" />
                                                    <span>
                                                        <strong>40</strong><em>%</em>
                                                    </span>
                                                    <div className="time-sale">
                                                        <span className="date">
                                                            <span className="day-value">0</span>
                                                            <span className="day-text">DAY</span>
                                                        </span>
                                                        <span className="time">
                                                            <span className="hours">11</span>
                                                            <span className="minutes">34</span>
                                                            <span className="seconds">18</span>
                                                        </span>
                                                    </div>
                                                </figure>
                                                <div className='information-box'>
                                                    <h3>푸마</h3>
                                                    <p>페라리 이볼브 PTC V 인펀트</p>
                                                    <div className="price-box">
                                                        <s className='price'>49,000</s>
                                                        <strong className='sale-price'>29,000</strong>
                                                        <span className="sale-percent">[40%]</span>
                                                    </div>
                                                </div>
                                                <div className="sale-period-box">
                                                    <span className="sale-period">
                                                        23.06.19 09:00 ~
                                                        <br />
                                                        23.06.21 08:59
                                                    </span>
                                                    <span className="rest-product-count">
                                                        <span className='rest-product-count-value'>398</span>개 남음
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className='prev-btn'></button>
                            <button className='next-btn'></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};