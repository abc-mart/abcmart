import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './scss/section8.scss';

export default function Section8Component(){

    const [state, setState] = React.useState({
        bestBrandNike: [],
        bestBrandAdidas: [],
        bestBrandVans: [],
        bestBrandConverse: [],
        bestBrandCrocs: [],
        bestBrandNuovo: [],
        bestBrandAbcselect: [],
        bestBrandPuma: [],
        nNike: 0,
        nAdidas: 0,
        nVans: 0,
        nConverse: 0,
        nCrocs: 0,
        nNuovo: 0,
        nAbcselect: 0,
        nPuma: 0
    });

    React.useEffect(()=>{

        axios({
            url: './data/intro/section8.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    bestBrandNike: res.data.best_brand_nike,
                    bestBrandAdidas: res.data.best_brand_adidas,
                    bestBrandVans: res.data.best_brand_vans,
                    bestBrandConverse: res.data.best_brand_converse,
                    bestBrandCrocs: res.data.best_brand_crocs,
                    bestBrandNuovo: res.data.best_brand_nuovo,
                    bestBrandAbcselect: res.data.best_brand_abcselect,
                    bestBrandPuma: res.data.best_brand_puma,
                    nNike: res.data.best_brand_nike.length,
                    nAdidas: res.data.best_brand_adidas.length,
                    nVans: res.data.best_brand_vans.length,
                    nConverse: res.data.best_brand_converse.length,
                    nCrocs: res.data.best_brand_crocs.length,
                    nNuovo: res.data.best_brand_nuovo.length,
                    nAbcselect: res.data.best_brand_abcselect.length,
                    nPuma: res.data.best_brand_puma.length
                });
            }
        })
        .catch((err)=>{
            console.log(`err` + err);
        });

    },[]);

    React.useEffect(()=>{

        const $slideWrap = $(`#section8 .slide-wrap`);
        const $prevBtn = $(`#section8 .prev-btn`);
        const $nextBtn = $(`#section8 .next-btn`);
        
        let cnt = 0;
        let setId = 0;

        // $slideWrap.css({width: `${100 * (state.n/5)}%` });

        function mainSlide(){
            $slideWrap.stop().animate({left: `${-100 * cnt}%`}, 600, function(){
                if(cnt>7) cnt=0;
                if(cnt<0) cnt=7;
                $slideWrap.stop().animate({left: `${-100 * cnt}%`}, 0);
            });
        }

        function prevCount(){
            cnt--;
            mainSlide();
        }

        function nextCount(){
            cnt++;
            mainSlide();
        }

        $prevBtn.on({
            click(e){
                e.preventDefault();
                prevCount();
                clearInterval(setId);
            }
        });

        $nextBtn.on({
            click(e){
                e.preventDefault();
                nextCount();
                clearInterval(setId);
            }
        });

    },[]);


    return (
        <section id="section8">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>BEST BRAND</h2>
                    </div>
                    <div className="content">
                        <div className="category-btn-box">
                            <span className='category-btn on'><a href="!#">NIKE</a></span>
                            <span className='category-btn'><a href="!#">ADIDAS</a></span>
                            <span className='category-btn'><a href="!#">VANS</a></span>
                            <span className='category-btn'><a href="!#">CONVERSE</a></span>
                            <span className='category-btn'><a href="!#">CROCS</a></span>
                            <span className='category-btn'><a href="!#">NUOVO</a></span>
                            <span className='category-btn'><a href="!#">ABC SELECT</a></span>
                            <span className='category-btn'><a href="!#">PUMA</a></span>
                        </div>
                        <div className="page-btn-box">
                            <button className='prev-btn'></button>
                            <button className='next-btn'></button>
                        </div>
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                <li className="slide slide8">
                                        <ul className='product-list-box'>
                                            {
                                                state.bestBrandPuma.map((item, idx)=>{
                                                    return(
                                                        <li className="product-list" key={idx}>
                                                            <a href="!#">
                                                                <figure>
                                                                    <img src={item.src} alt="" />
                                                                </figure>
                                                                <div className='information-box'>
                                                                    <h3>{item.title}</h3>
                                                                    <p>{item.info}</p>
                                                                    <div className="price-box">
                                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                                    </div>
                                                                    {item.best===""?'':
                                                                        <div className="icon_box best">
                                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.coupon===""?'':
                                                                        <div className="icon_box coupon">
                                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.only===""?'':
                                                                        <div className="icon_box only">
                                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.delivery===""?'':
                                                                        <div className="icon_box delivery">
                                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li className="slide slide1">
                                        <ul className='product-list-box'>
                                            {
                                                state.bestBrandNike.map((item, idx)=>{
                                                    return(
                                                        <li className="product-list" key={idx}>
                                                            <a href="!#">
                                                                <figure>
                                                                    <img src={item.src} alt="" />
                                                                </figure>
                                                                <div className='information-box'>
                                                                    <h3>{item.title}</h3>
                                                                    <p>{item.info}</p>
                                                                    <div className="price-box">
                                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                                    </div>
                                                                    {item.best===""?'':
                                                                        <div className="icon_box best">
                                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.coupon===""?'':
                                                                        <div className="icon_box coupon">
                                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.only===""?'':
                                                                        <div className="icon_box only">
                                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.delivery===""?'':
                                                                        <div className="icon_box delivery">
                                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li className="slide slide2">
                                        <ul className='product-list-box'>
                                            {
                                                state.bestBrandAdidas.map((item, idx)=>{
                                                    return(
                                                        <li className="product-list" key={idx}>
                                                            <a href="!#">
                                                                <figure>
                                                                    <img src={item.src} alt="" />
                                                                </figure>
                                                                <div className='information-box'>
                                                                    <h3>{item.title}</h3>
                                                                    <p>{item.info}</p>
                                                                    <div className="price-box">
                                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                                    </div>
                                                                    {item.best===""?'':
                                                                        <div className="icon_box best">
                                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.coupon===""?'':
                                                                        <div className="icon_box coupon">
                                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.only===""?'':
                                                                        <div className="icon_box only">
                                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.delivery===""?'':
                                                                        <div className="icon_box delivery">
                                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li className="slide slide3">
                                        <ul className='product-list-box'>
                                            {
                                                state.bestBrandVans.map((item, idx)=>{
                                                    return(
                                                        <li className="product-list" key={idx}>
                                                            <a href="!#">
                                                                <figure>
                                                                    <img src={item.src} alt="" />
                                                                </figure>
                                                                <div className='information-box'>
                                                                    <h3>{item.title}</h3>
                                                                    <p>{item.info}</p>
                                                                    <div className="price-box">
                                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                                    </div>
                                                                    {item.best===""?'':
                                                                        <div className="icon_box best">
                                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.coupon===""?'':
                                                                        <div className="icon_box coupon">
                                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.only===""?'':
                                                                        <div className="icon_box only">
                                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.delivery===""?'':
                                                                        <div className="icon_box delivery">
                                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li className="slide slide4">
                                        <ul className='product-list-box'>
                                            {
                                                state.bestBrandConverse.map((item, idx)=>{
                                                    return(
                                                        <li className="product-list" key={idx}>
                                                            <a href="!#">
                                                                <figure>
                                                                    <img src={item.src} alt="" />
                                                                </figure>
                                                                <div className='information-box'>
                                                                    <h3>{item.title}</h3>
                                                                    <p>{item.info}</p>
                                                                    <div className="price-box">
                                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                                    </div>
                                                                    {item.best===""?'':
                                                                        <div className="icon_box best">
                                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.coupon===""?'':
                                                                        <div className="icon_box coupon">
                                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.only===""?'':
                                                                        <div className="icon_box only">
                                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.delivery===""?'':
                                                                        <div className="icon_box delivery">
                                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li className="slide slide5">
                                        <ul className='product-list-box'>
                                            {
                                                state.bestBrandCrocs.map((item, idx)=>{
                                                    return(
                                                        <li className="product-list" key={idx}>
                                                            <a href="!#">
                                                                <figure>
                                                                    <img src={item.src} alt="" />
                                                                </figure>
                                                                <div className='information-box'>
                                                                    <h3>{item.title}</h3>
                                                                    <p>{item.info}</p>
                                                                    <div className="price-box">
                                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                                    </div>
                                                                    {item.best===""?'':
                                                                        <div className="icon_box best">
                                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.coupon===""?'':
                                                                        <div className="icon_box coupon">
                                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.only===""?'':
                                                                        <div className="icon_box only">
                                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.delivery===""?'':
                                                                        <div className="icon_box delivery">
                                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li className="slide slide6">
                                        <ul className='product-list-box'>
                                            {
                                                state.bestBrandNuovo.map((item, idx)=>{
                                                    return(
                                                        <li className="product-list" key={idx}>
                                                            <a href="!#">
                                                                <figure>
                                                                    <img src={item.src} alt="" />
                                                                </figure>
                                                                <div className='information-box'>
                                                                    <h3>{item.title}</h3>
                                                                    <p>{item.info}</p>
                                                                    <div className="price-box">
                                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                                    </div>
                                                                    {item.best===""?'':
                                                                        <div className="icon_box best">
                                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.coupon===""?'':
                                                                        <div className="icon_box coupon">
                                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.only===""?'':
                                                                        <div className="icon_box only">
                                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.delivery===""?'':
                                                                        <div className="icon_box delivery">
                                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li className="slide slide7">
                                        <ul className='product-list-box'>
                                            {
                                                state.bestBrandAbcselect.map((item, idx)=>{
                                                    return(
                                                        <li className="product-list" key={idx}>
                                                            <a href="!#">
                                                                <figure>
                                                                    <img src={item.src} alt="" />
                                                                </figure>
                                                                <div className='information-box'>
                                                                    <h3>{item.title}</h3>
                                                                    <p>{item.info}</p>
                                                                    <div className="price-box">
                                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                                    </div>
                                                                    {item.best===""?'':
                                                                        <div className="icon_box best">
                                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.coupon===""?'':
                                                                        <div className="icon_box coupon">
                                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.only===""?'':
                                                                        <div className="icon_box only">
                                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.delivery===""?'':
                                                                        <div className="icon_box delivery">
                                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li className="slide slide8">
                                        <ul className='product-list-box'>
                                            {
                                                state.bestBrandPuma.map((item, idx)=>{
                                                    return(
                                                        <li className="product-list" key={idx}>
                                                            <a href="!#">
                                                                <figure>
                                                                    <img src={item.src} alt="" />
                                                                </figure>
                                                                <div className='information-box'>
                                                                    <h3>{item.title}</h3>
                                                                    <p>{item.info}</p>
                                                                    <div className="price-box">
                                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                                    </div>
                                                                    {item.best===""?'':
                                                                        <div className="icon_box best">
                                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.coupon===""?'':
                                                                        <div className="icon_box coupon">
                                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.only===""?'':
                                                                        <div className="icon_box only">
                                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.delivery===""?'':
                                                                        <div className="icon_box delivery">
                                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li className="slide slide1">
                                        <ul className='product-list-box'>
                                            {
                                                state.bestBrandNike.map((item, idx)=>{
                                                    return(
                                                        <li className="product-list" key={idx}>
                                                            <a href="!#">
                                                                <figure>
                                                                    <img src={item.src} alt="" />
                                                                </figure>
                                                                <div className='information-box'>
                                                                    <h3>{item.title}</h3>
                                                                    <p>{item.info}</p>
                                                                    <div className="price-box">
                                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                                    </div>
                                                                    {item.best===""?'':
                                                                        <div className="icon_box best">
                                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.coupon===""?'':
                                                                        <div className="icon_box coupon">
                                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.only===""?'':
                                                                        <div className="icon_box only">
                                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                                        </div>
                                                                    }
                                                                    {item.delivery===""?'':
                                                                        <div className="icon_box delivery">
                                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};