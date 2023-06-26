import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './scss/section2.scss';

export default function Section2Component(){

    const [state, setState] = React.useState({
        hotDeal: [],
        n: 0
    });

    React.useEffect(()=>{

        axios({
            url: './data/intro/section2.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    hotDeal: res.data.hot_deal,
                    n: res.data.hot_deal.length-4
                });
            }
        })
        .catch((err)=>{
            console.log(`err` + err);
        });

    },[]);

    React.useEffect(()=>{

        const $slideWrap = $(`#section2 .slide-wrap`);
        const $prevBtn = $(`#section2 .prev-btn`);
        const $nextBtn = $(`#section2 .next-btn`);
        
        let cnt = 0;
        let setId = 0;

        $slideWrap.css({width: `${305 * (state.n+4)}px` });

        function mainSlide(){
            $slideWrap.stop().animate({left: `${-305 * cnt}px`}, 600, function(){
                if(cnt>=state.n) cnt=0;
                if(cnt<0) cnt=state.n-1;
                $slideWrap.stop().animate({left: `${-305 * cnt}px`}, 0);
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

    },[state.n]);


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
                                        {
                                            state.hotDeal.map((item, idx)=>{
                                                return(
                                                    <li className="slide slide1" key={idx}>
                                                        <a href="!#">
                                                            <figure>
                                                                <img src={item.src} alt="" />
                                                                <span>
                                                                    <strong>{item.discount_rate}</strong><em>%</em>
                                                                </span>
                                                                <div className="time-sale">
                                                                    <span className="date">
                                                                        <span className="day-value">1</span>
                                                                        <span className="day-text">DAY</span>
                                                                    </span>
                                                                    <span className="time">
                                                                        <span className="hours">18</span>
                                                                        <span className="minutes">15</span>
                                                                        <span className="seconds">38</span>
                                                                    </span>
                                                                </div>
                                                            </figure>
                                                            <div className='information-box'>
                                                                <h3>{item.title}</h3>
                                                                <p>{item.info}</p>
                                                                <div className="price-box">
                                                                    {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                                    {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                                    {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                                </div>
                                                            </div>
                                                            <div className="sale-period-box">
                                                                <span className="sale-period">
                                                                    23.06.21 09:00 ~
                                                                    <br />
                                                                    23.06.23 08:59
                                                                </span>
                                                                <span className="rest-product-count">
                                                                    <span className='rest-product-count-value'>30</span>개 남음
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }
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