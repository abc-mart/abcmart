import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './scss/section5.scss';

export default function Section5Component(){

    const [isCrocs, setIsCrocs] = React.useState(true);
    const [isSlide, setIsSlide] = React.useState(false);
    const [isMule, setIsMule] = React.useState(false);
    const [isZaxy, setIsZaxy] = React.useState(false);

    const [state, setState] = React.useState({
        mdsPickCrocs: [],
        mdsPickSlide: [],
        mdsPickMule: [],
        mdsPickZaxy: [],
        nCrocs: 0,
        nSlide: 0,
        nMule: 0,
        nZaxy: 0
    });

    React.useEffect(()=>{

        axios({
            url: './data/intro/section5.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    mdsPickCrocs: res.data.mds_pick_crocs,
                    mdsPickSlide: res.data.mds_pick_slide,
                    mdsPickMule: res.data.mds_pick_mule,
                    mdsPickZaxy: res.data.mds_pick_zaxy,
                    nCrocs: res.data.mds_pick_crocs.length,
                    nSlide: res.data.mds_pick_slide.length,
                    nMule: res.data.mds_pick_mule.length,
                    nZaxy: res.data.mds_pick_zaxy.length,
                });
            }
        })
        .catch((err)=>{
            console.log(`err` + err);
        });

    },[]);

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
                                {
                                    state.mdsPickCrocs.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#">
                                                    <figure>
                                                        <img src={item.src} alt="" />
                                                    </figure>
                                                    <div className='information-box'>
                                                        <h3>{item.title}</h3>
                                                        <p>{item.info}</p>
                                                        <div className="price-box">
                                                            <strong className='product-price'>{item.product_price}<em>원</em></strong>
                                                            <s className='cost-price'>{item.cost_price}<em>원</em></s>
                                                            <strong className='discount-price'>{item.discount_price}<em>원</em></strong>
                                                            <span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>
                                                        </div>
                                                        <div className="delivery">
                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                        {
                            isSlide &&
                            <ul className="slide-section">
                                {
                                    state.mdsPickSlide.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#">
                                                    <figure>
                                                        <img src={item.src} alt="" />
                                                    </figure>
                                                    <div className='information-box'>
                                                        <h3>{item.title}</h3>
                                                        <p>{item.info}</p>
                                                        <div className="price-box">
                                                            <strong className='product-price'>{item.product_price}<em>원</em></strong>
                                                            <s className='cost-price'>{item.cost_price}<em>원</em></s>
                                                            <strong className='discount-price'>{item.discount_price}<em>원</em></strong>
                                                            <span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>
                                                        </div>
                                                        <div className="delivery">
                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                        {
                            isMule &&
                            <ul className="mule-section">
                                {
                                    state.mdsPickMule.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#">
                                                    <figure>
                                                        <img src={item.src} alt="" />
                                                    </figure>
                                                    <div className='information-box'>
                                                        <h3>{item.title}</h3>
                                                        <p>{item.info}</p>
                                                        <div className="price-box">
                                                            <strong className='product-price'>{item.product_price}<em>원</em></strong>
                                                            <s className='cost-price'>{item.cost_price}<em>원</em></s>
                                                            <strong className='discount-price'>{item.discount_price}<em>원</em></strong>
                                                            <span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>
                                                        </div>
                                                        <div className="delivery">
                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                        {
                            isZaxy &&
                            <ul className="zaxy-section">
                                {
                                    state.mdsPickZaxy.map((item, idx)=>{
                                        return(
                                            <li key={idx}>
                                                <a href="!#">
                                                    <figure>
                                                        <img src={item.src} alt="" />
                                                    </figure>
                                                    <div className='information-box'>
                                                        <h3>{item.title}</h3>
                                                        <p>{item.info}</p>
                                                        <div className="price-box">
                                                            <strong className='product-price'>{item.product_price}<em>원</em></strong>
                                                            <s className='cost-price'>{item.cost_price}<em>원</em></s>
                                                            <strong className='discount-price'>{item.discount_price}<em>원</em></strong>
                                                            <span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>
                                                        </div>
                                                        <div className="delivery">
                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};