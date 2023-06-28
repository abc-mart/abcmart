import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './scss/section7.scss';

export default function Section7Component(){

    const [state, setState] = React.useState({
        plusPick: [],
        n: 0
    });

    React.useEffect(()=>{

        axios({
            url: './data/intro/section7.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    plusPick: res.data.plus_pick,
                    n: res.data.plus_pick.length-8
                });
            }
        })
        .catch((err)=>{
            console.log(`err` + err);
        });

    },[]);

    React.useEffect(()=>{

        const $slideWrap = $(`#section7 .slide-wrap`);
        
        let cnt = 0;
        let setId = 0;

        // $slideWrap.css({width: `${100 * ((state.n+8)/3.5)}%`});

        function mainSlide(){
            $slideWrap.stop().animate({left: `${-565 * cnt}px`}, 600, function(){
                if(cnt>18) cnt=0;
                if(cnt<0) cnt=18;
                $slideWrap.stop().animate({left: `${-565 * cnt}px`}, 0);
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

        function autoTimer(){
            clearInterval(setId);
            setId = setInterval(nextCount, 3000);
        }
        autoTimer();

    },[]);


    return (
        <section id="section7">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>PICK</h2>
                        <p>다양한 상품을 한 눈에 모아 볼 수 있는 묶음상품을 만나보세요.<a href="!#">MORE</a></p>
                    </div>
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    {
                                        state.plusPick.map((item, idx)=>{
                                            return(
                                                <li className="slide slide1" key={idx}>
                                                    <div>
                                                        <figure>
                                                            <a href="!#">
                                                                <img src={item.src} alt="" />
                                                            </a>
                                                        </figure>
                                                        <div className='information-box'>
                                                            <a href="!#">
                                                                <h3>
                                                                {item.title}
                                                                </h3>
                                                                {item.info===""?'':<p>{item.info}</p>}
                                                                <div className="price-box">
                                                                    {item.start_price===""?'':<strong className='start-price'>{item.start_price}<em>원~</em></strong>}
                                                                    {item.discount_rate===""?'':<strong className='discount-rate'>~ {item.discount_rate}%<em>할인</em></strong>}
                                                                </div>
                                                                <div className="search-result-count">
                                                                    총 
                                                                    <span className="search-result-result-value">
                                                                        48
                                                                    </span>
                                                                    개의 상품
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};