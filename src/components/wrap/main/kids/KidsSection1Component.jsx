import React from 'react';
import './scss/kidsSection1.scss';

export default function KidsSection1Component(props) {

    const [market, setMarket] = React.useState('ABC');
    const onClickMarket=(e, value)=>{
        e.preventDefault();
        setMarket(value)
    }

    return (
        <section id='kidsSection1'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <img src="./img/kids/logo_kidsmart.png" alt="ABC KID'S MART"/>
                    </div>
                    <div className="content">
                        <div className="market-change">
                            <ul>
                                <li>
                                    <a className={market==='ABC'?'on':''} onClick={(e)=>onClickMarket(e, 'ABC')} href="!#">ABC마트 키즈</a>
                                </li>
                                <li>
                                    <a className={market==='GRAND'?'on':''} onClick={(e)=>onClickMarket(e, 'GRAND')} href="!#">그랜드 스테이지 키즈</a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-box">
                            <ul>
                                <li><a href="!#">신발</a></li>
                                <li><a href="!#">의류</a></li>
                                <li><a href="!#">잡화</a></li>
                                <li><a href="!#">용품</a></li>
                            </ul>
                        </div>
                        <div className="slide-box">

                        </div>
                        <div className="list-category">
                            <ul>
                                <li><a href="!#"><img src="./img/kids/img_ranking.png" alt="" /></a></li>                               
                                <li><a href="!#"><img src="./img/kids/img_newarrivals.png" alt="" /></a></li>                               
                                <li><a href="!#"><img src="./img/kids/img_catalog.png" alt="" /></a></li>                               
                            </ul>
                        </div>
                        <div className="special-brand">
                            <div className="special-brand-title">
                                <figure></figure>
                                <span>지금 핫한 브랜드만 모았어요</span>
                            </div>
                            <ul>
                                <li>
                                    <div className="img-box">
                                        <figure><img src="./img/kids/1672105847501.png" alt="" /></figure>
                                        <span><img src="./img/kids/1672105873864.png" alt="" /></span>
                                    </div>
                                    <div className="txt-box">
                                        <h4>봉봉</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <figure><img src="./img/kids/brand_img02.png" alt="" /></figure>
                                        <span><img src="./img/kids/brand_txt02.png" alt="" /></span>
                                    </div>
                                    <div className="txt-box">
                                        <h4>꼬무신</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <figure><img src="./img/kids/brand_img03.png" alt="" /></figure>
                                        <span><img src="./img/kids/brand_txt03.png" alt="" /></span>
                                    </div>
                                    <div className="txt-box">
                                        <h4>라라고</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <figure><img src="./img/kids/brand_img04.png" alt="" /></figure>
                                        <span><img src="./img/kids/brand_txt04.png" alt="" /></span>
                                    </div>
                                    <div className="txt-box">
                                        <h4>리틀 다이애나</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <figure><img src="./img/kids/brand_img05.png" alt="" /></figure>
                                        <span><img src="./img/kids/brand_txt05.png" alt="" /></span>
                                    </div>
                                    <div className="txt-box">
                                        <h4>코뮤엘로</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

