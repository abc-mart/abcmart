import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './scss/section3.scss';

export default function Section3Component(){

    const [state, setState] = React.useState({
        newArrivals: [],
        n: 0
    });

    React.useEffect(()=>{

        axios({
            url: './data/intro/section3.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    newArrivals: res.data.new_arrivals,
                    n: res.data.new_arrivals.length
                });
            }
        })
        .catch((err)=>{
            console.log(`err` + err);
        });

    },[]);

    React.useEffect(()=>{

        const $slideWrap = $(`#section3 .slide-wrap`);
        const $prevBtn = $(`#section3 .prev-btn`);
        const $nextBtn = $(`#section3 .next-btn`);
        
        let cnt = 0;
        let setId = 0;

        $slideWrap.css({width: `${100 * (state.n/5)}%` });

        function mainSlide(){
            $slideWrap.stop().animate({left: `${-100 * cnt}%`}, 600, function(){

                $slideWrap.stop().animate({left: `${-100 * cnt}%`}, 0);
            });
        }

        function prevCount(){
            if(cnt>0){
                cnt--;
            }
            mainSlide();
        }

        function nextCount(){
            if(cnt<((state.n/5)-1)){
                cnt++;
            }
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
        <section id="section3">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>NEW ARRIVALS</h2>
                        <a href="!#">MORE</a>
                    </div>
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    {
                                        state.newArrivals.map((item, idx)=>{
                                            return(
                                                <li className="slide slide1" key={idx}>
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
                                                            <div className="icon_box best">
                                                                <img src="./img/intro/icon_best.png" alt="" />
                                                            </div>
                                                            {/* <div className="icon_box coupon">
                                                                <img src="./img/intro/icon_coupon.gif" alt="" />
                                                            </div> */}
                                                            <div className="icon_box only">
                                                                <img src="./img/intro/icon_only.jpg" alt="" />
                                                            </div>
                                                            <div className="icon_box delivery">
                                                                <img src="./img/intro/icon_delivery.png" alt="" />
                                                            </div>
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
        </section>
    );
};