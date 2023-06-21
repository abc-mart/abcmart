import React from 'react';
import './scss/section5.scss';

export default function Section5Component(){

    const [crocs, setCrocs] = React.useState(true);
    const [slide, setSlide] = React.useState(false);
    const [mule, setMule] = React.useState(false);
    const [zaxy, setZaxy] = React.useState(false);

    const onClickCrocs=(e)=>{
        e.preventDefault();
        setCrocs(true);
        setSlide(false);
        setMule(false);
        setZaxy(false);
    }
    const onClickSlide=(e)=>{
        e.preventDefault();
        setCrocs(false);
        setSlide(true);
        setMule(false);
        setZaxy(false);
    }
    const onClickMule=(e)=>{
        e.preventDefault();
        setCrocs(false);
        setSlide(false);
        setMule(true);
        setZaxy(false);
    }
    const onClickZaxy=(e)=>{
        e.preventDefault();
        setCrocs(false);
        setSlide(false);
        setMule(false);
        setZaxy(true);
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
                            <li><a onClick={onClickCrocs} href="!#">CROCS</a></li>
                            <li><a onClick={onClickSlide} href="!#">SLIDE</a></li>
                            <li><a onClick={onClickMule} href="!#">MULE</a></li>
                            <li><a onClick={onClickZaxy} href="!#">ZAXY</a></li>
                        </ul>
                    </div>
                    <div className="content">
                        {
                            crocs &&
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
                            slide &&
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
                            mule &&
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
                            zaxy &&
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