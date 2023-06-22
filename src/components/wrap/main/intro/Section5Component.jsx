import React from 'react';
import './scss/section5.scss';

export default function Section5Component(){

    const [isCrocs, setIsCrocs] = React.useState(true);
    const [isSlide, setIsSlide] = React.useState(false);
    const [isMule, setIsMule] = React.useState(false);
    const [isZaxy, setIsZaxy] = React.useState(false);

    const onClickCrocs=(e)=>{
        e.preventDefault();
        setIsCrocs(true);
        setIsSlide(false);
        setIsMule(false);
        setIsZaxy(false);
    }
    const onClickSlide=(e)=>{
        e.preventDefault();
        setIsCrocs(false);
        setIsSlide(true);
        setIsMule(false);
        setIsZaxy(false);
    }
    const onClickMule=(e)=>{
        e.preventDefault();
        setIsCrocs(false);
        setIsSlide(false);
        setIsMule(true);
        setIsZaxy(false);
    }
    const onClickZaxy=(e)=>{
        e.preventDefault();
        setIsCrocs(false);
        setIsSlide(false);
        setIsMule(false);
        setIsZaxy(true);
    }


    return (
        <section id="section5">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>MD’S PICK</h2>
                    </div>
                    <div className="catecory">
                        <ul>
                            <li className={isCrocs?'on':''}><a onClick={onClickCrocs} href="!#">CROCS</a></li>
                            <li className={isSlide?'on':''}><a onClick={onClickSlide} href="!#">SLIDE</a></li>
                            <li className={isMule?'on':''}><a onClick={onClickMule} href="!#">MULE</a></li>
                            <li className={isZaxy?'on':''}><a onClick={onClickZaxy} href="!#">ZAXY</a></li>
                        </ul>
                    </div>
                    <div className="content">
                        {
                            isCrocs &&
                            <ul className="crocs-section">
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide1.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 로우 웨지 우먼스</p>
                                            <div className="price-box">
                                                <strong className='product-price'>27,600</strong>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide5.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 버클 로우 웨지</p>
                                            <div className="price-box">
                                                <s className='price'>69,000</s>
                                                <strong className='sale-price'>27,600</strong>
                                                <span className="sale-percent">[60%]</span>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide5.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 버클 로우 웨지</p>
                                            <div className="price-box">
                                                <s className='price'>69,000</s>
                                                <strong className='sale-price'>27,600</strong>
                                                <span className="sale-percent">[60%]</span>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide2.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 스트래피 로우 웨지</p>
                                            <div className="price-box">
                                                <strong className='product-price'>27,600</strong>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide3.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 스트래피 로우 웨지</p>
                                            <div className="price-box">
                                                <strong className='product-price'>27,600</strong>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        }
                        {
                            isSlide &&
                            <ul className="slide-section">
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide1.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 로우 웨지 우먼스</p>
                                            <div className="price-box">
                                                <strong className='product-price'>27,600</strong>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide5.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 버클 로우 웨지</p>
                                            <div className="price-box">
                                                <s className='price'>69,000</s>
                                                <strong className='sale-price'>27,600</strong>
                                                <span className="sale-percent">[60%]</span>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide5.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 버클 로우 웨지</p>
                                            <div className="price-box">
                                                <s className='price'>69,000</s>
                                                <strong className='sale-price'>27,600</strong>
                                                <span className="sale-percent">[60%]</span>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide2.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 스트래피 로우 웨지</p>
                                            <div className="price-box">
                                                <strong className='product-price'>27,600</strong>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide3.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 스트래피 로우 웨지</p>
                                            <div className="price-box">
                                                <strong className='product-price'>27,600</strong>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        }
                        {
                            isMule &&
                            <ul className="mule-section">
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide1.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 로우 웨지 우먼스</p>
                                            <div className="price-box">
                                                <strong className='product-price'>27,600</strong>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide5.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 버클 로우 웨지</p>
                                            <div className="price-box">
                                                <s className='price'>69,000</s>
                                                <strong className='sale-price'>27,600</strong>
                                                <span className="sale-percent">[60%]</span>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide5.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 버클 로우 웨지</p>
                                            <div className="price-box">
                                                <s className='price'>69,000</s>
                                                <strong className='sale-price'>27,600</strong>
                                                <span className="sale-percent">[60%]</span>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide2.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 스트래피 로우 웨지</p>
                                            <div className="price-box">
                                                <strong className='product-price'>27,600</strong>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide3.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 스트래피 로우 웨지</p>
                                            <div className="price-box">
                                                <strong className='product-price'>27,600</strong>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        }
                        {
                            isZaxy &&
                            <ul className="zaxy-section">
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide1.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 로우 웨지 우먼스</p>
                                            <div className="price-box">
                                                <strong className='product-price'>27,600</strong>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide5.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 버클 로우 웨지</p>
                                            <div className="price-box">
                                                <s className='price'>69,000</s>
                                                <strong className='sale-price'>27,600</strong>
                                                <span className="sale-percent">[60%]</span>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide5.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 버클 로우 웨지</p>
                                            <div className="price-box">
                                                <s className='price'>69,000</s>
                                                <strong className='sale-price'>27,600</strong>
                                                <span className="sale-percent">[60%]</span>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide2.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 스트래피 로우 웨지</p>
                                            <div className="price-box">
                                                <strong className='product-price'>27,600</strong>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <figure>
                                            <img src="./img/intro/intro_sec3_slide3.jpg" alt="" />
                                        </figure>
                                        <div className='information-box'>
                                            <h3>크록스</h3>
                                            <p>브루클린 스트래피 로우 웨지</p>
                                            <div className="price-box">
                                                <strong className='product-price'>27,600</strong>
                                            </div>
                                            <div className="delivery">
                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};