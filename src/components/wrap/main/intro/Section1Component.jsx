import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './scss/section1.scss';

export default function Section1Component(){

    const [state, setState] = React.useState({
        slide: [],
        n: 0
    });

    React.useEffect(()=>{

        axios({
            url: './data/intro/section1.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                // console.log(res.data.main_slide.length);
                setState({
                    ...state,
                    slide: res.data.main_slide,
                    n: res.data.main_slide.length
                });
            }
        })
        .catch((err)=>{
            console.log(`err` + err);
        });

    },[]);

    React.useEffect(()=>{

        const $slide = $(`#section1 .slide`);
        const $prevBtn = $(`#section1 .prev-btn`);
        const $nextBtn = $(`#section1 .next-btn`);
        const $stopBtn = $(`#section1 .stop-btn`);
        const $playBtn = $(`#section1 .play-btn`);
        const $currentPage = $(`#section1 .current-page`);
        const $totalPage = $(`#section1 .total-page`);
        
        let cnt = 0;
        let setId = 0;
        let imsi = null;

        // $slideWrap.css({width: `${100 * (state.n+2)}%` });
        
        function mainNextSlide(){
            $slide.css({zIndex: 1, opacity:1});
            $slide.eq(imsi!==null?imsi:(cnt===0? state.n:cnt-1)).css({zIndex: state.n});  // 현재슬라이드
            $slide.eq(cnt).css({zIndex: state.n+1}).stop().animate({opacity:0}, 0).animate({opacity:1}, 600);  // 다음슬라이드
            pageNumber();
        }

        function mainPrevSlide(){
            $slide.css({zIndex: 1, opacity:1});
            $slide.eq(cnt).css({zIndex: state.n});  // 이전슬라이드
            $slide.eq(imsi!==null?imsi:(cnt===state.n? 0:cnt+1)).css({zIndex: state.n+1}).stop().animate({opacity:1}, 0).animate({opacity:0}, 600);  // 현재슬라이드
            pageNumber();
        }

        function prevCount(){
            cnt--;
            if(cnt<0){
                cnt=state.n-1;
            }
            mainPrevSlide();
        }

        function nextCount(){
            cnt++;
            if(cnt>state.n-1){
                cnt=0;
            }
            mainNextSlide();
        }

        function autoTimer(){
            clearInterval(setId);
            setId = setInterval(nextCount, 3000);
        }
        autoTimer();

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

        $stopBtn.on({
            click(e){
                e.preventDefault();
                clearInterval(setId);
                $(this).addClass('on');
                $playBtn.addClass('on');
            }
        });

        $playBtn.on({
            click(e){
                e.preventDefault();
                autoTimer();
                $(this).removeClass('on');
                $stopBtn.removeClass('on');
            }
        });

        function pageNumber(){
            $currentPage.html( `0${cnt+1===(state.n+1) ? 1 : (cnt+1===0 ? state.n : cnt+1)}` );
            $totalPage.html(`0${state.n}`);
        }

    },[state.n]);


    // section1(){
    //     const $slide = $(`#section1 .slide`);
    //     const $arrowNextBtn = $(`#section1 .arrow-next-btn`);
    //     const $arrowPrevBtn = $(`#section1 .arrow-prev-btn`);
    //     const $pageBtn = $(`#section1 .page-btn`);
    //     let setId = 0;
    //     let cnt = 0;
    //     let imsi = null;

    //     // 1-1. 메인 다음슬라이드 함수 : 페이드인 => 현재 슬라이드를 덮고 부드럽게 보이는 다음슬라이드
    //     function mainNextSlide(){
    //         $slide                    .css({zIndex: 1, opacity:1});
    //         $slide.eq(imsi!==null?imsi:(cnt===0?2:cnt-1)).css({zIndex: 2});  // 현재슬라이드
    //         $slide.eq(cnt)            .css({zIndex: 3}).stop().animate({opacity:0}, 0).animate({opacity:1}, 600);  // 다음슬라이드
    //         pageBtn();
    //     }
    //     // 1-2. 메인 이전슬라이드 함수 : 페이드아웃 => 현재슬라이드를 부드럽게 사라지게하여 바로아래 슬라이드가 부드럽게 보이는 이전슬라이드
    //     function mainPrevSlide(){
    //         $slide                    .css({zIndex: 1, opacity:1});
    //         $slide.eq(cnt)            .css({zIndex: 2});  // 이전슬라이드
    //         $slide.eq(imsi!==null?imsi:(cnt===2?0:cnt+1)).css({zIndex: 3}).stop().animate({opacity:1}, 0).animate({opacity:0}, 600);  // 현재슬라이드
    //         pageBtn();
    //     }

    //     // 2-1. 다음(next)카운트함수
    //     function nextCount(){
    //         cnt++;
    //         if(cnt>2){  // 마지막 슬라이드 이면 처음이로 리턴 초기화 0으로
    //             cnt=0;
    //         }
    //         mainNextSlide();
    //     }
    //     // 2-2. 이전(prev)카운트함수
    //     function prevCount(){
    //         cnt--;
    //         if(cnt<0){  // 0 미만이면 마지막으로 리턴 초기화 2으로
    //             cnt=2;
    //         }
    //         mainPrevSlide();
    //     }

    //     // 3. 자동타이머함수
    //     function autoTimer(){
    //         setId = setInterval(nextCount, 3000);  // 4초 후 다음카운트함수 호출
    //         //setId = setInterval(prevCount, 3000);  // 4초 후 이전카운트함수 호출
    //     }
    //     autoTimer();


    //     // 4-1. 다음화살버튼클릭 이벤트
    //     $arrowNextBtn.on({
    //         click(e){
    //             e.preventDefault();
    //             nextCount();
    //             clearInterval(setId);
    //         }
    //     })

    //     // 4-2. 이전화살버튼클릭 이벤트
    //     $arrowPrevBtn.on({
    //         click(e){
    //             e.preventDefault();
    //             prevCount();
    //             clearInterval(setId);
    //         }
    //     })

    //     // 5. 페이지버튼 이벤트 함수
    //     function pageBtn(){
    //         $pageBtn.removeClass(`on`);
    //         $pageBtn.eq(cnt>2?0:cnt).addClass(`on`);
    //     }

    //     //6. 페이지버튼 클릭이벤트
    //     $pageBtn.each(function(idx){
    //         $(this).on({
    //             click(e){
    //                 e.preventDefault();
    //                 clearInterval(setId);
    //                 if(cnt<idx){  // 현재 슬라이드번호 cnt 보다 클릭한 버튼 1 인덱스번호가 크면
    //                     if( Math.abs(idx-cnt)>=2 ){  // 0 1 2
    //                         imsi=cnt;
    //                     }
    //                     else{
    //                         imsi=null;
    //                     }
    //                     cnt=idx;
    //                     mainNextSlide();

    //                 }
    //                 if(cnt>idx){  // 현재 슬라이드번호 cnt 보다 클릭한 버튼 1 인덱스번호가 작으면
    //                     if( Math.abs(idx-cnt)>=2 ){
    //                         imsi=cnt;
    //                     }
    //                     else{
    //                         imsi=null;
    //                     }
    //                     cnt=idx;
    //                     mainPrevSlide();

    //                 }

    //             }
    //         });
    //     });
    // },


    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">

                                    {
                                        state.slide.map((item, idx)=>{
                                            return(
                                                <li className="slide" key={idx}>
                                                    <a href="!#">
                                                        <img src={item.src} alt="" />
                                                        <div className="title-box">
                                                            <strong>{item.title}</strong>
                                                            <span>{item.info}</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="page-box">
                            <div className="pagenation">
                                <span className='current-page'>01</span>
                                <i>/</i>
                                <span className='total-page'>{`0${state.n}`}</span>
                            </div>
                            <button className='prev-btn'></button>
                            <button className='next-btn'></button>
                            <button className='stop-btn'></button>
                            <button className='play-btn'></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};