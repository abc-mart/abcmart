import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './scss/section4.scss';

export default function Section4Component(){

    const [state, setState] = React.useState({
        eventSlide: [],
        n4: 0
    });
    React.useEffect(()=>{

        axios({
            url: './data/intro/section4.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    eventSlide: res.data.event_slide,
                    n4: res.data.event_slide.length-10
                });
            }
        })
        .catch((err)=>{
            console.log(`err` + err);
        });

    },[]);

    React.useEffect(()=>{

        const $slideWrap = $(`#section4 .slide-wrap`);
        
        let cnt = 0;
        let setId = 0;

        $slideWrap.css({width: `${407 * (state.n4+10)}px` });

        function mainSlide(){
            $slideWrap.stop().animate({left: `${-407 * cnt}px`}, 600, function(){
                if(cnt>=state.n4) {cnt=0;}
                if(cnt<0) {cnt=state.n4-1;}
                $slideWrap.stop().animate({left: `${-407 * cnt}px`}, 0);
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

    },[state.n4]);


    return (
        <section id="section4">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                {
                                    state.eventSlide.map((item, idx)=>{
                                        return(
                                            <li className="slide slide1" key={idx}>
                                                <a href="!#">
                                                    <img src={item.src} alt="" />
                                                    <span>
                                                        <h3>{item.title}</h3>
                                                        <p>{item.info}</p>
                                                    </span>
                                                </a>
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