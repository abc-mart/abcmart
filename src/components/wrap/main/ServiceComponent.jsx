import React from 'react';
import './scss/service.scss';
import NoticeComponent from './service/NoticeComponent';
import FaqComponent from './service/FaqComponent';

export default function ServiceComponent(props) {
    const [menu, setMenu]=React.useState('FAQ');

    const onClickMenu=(value)=>{
        setMenu(value);
    }

    return (
        <main id='service'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="row1">
                            <ul>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">고객센터</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">{menu}</a></li>
                            </ul>
                        </div>
                        <div className="row2">
                            <h1>고객센터</h1>
                        </div>                        
                    </div>
                    <div className="content">
                        <div className="left">
                            <div className="row1">
                                <ul>
                                    <li><button onClick={()=>onClickMenu('FAQ')} className={`${menu==='FAQ'?'on':''}`} >FAQ</button></li>
                                    <li><button onClick={()=>onClickMenu('공지사항')} className={`${menu==='공지사항'?'on':''}`} >공지사항</button></li>
                                    <li><button onClick={()=>onClickMenu('매장 찾기')} className={`${menu==='매장 찾기'?'on':''}`} >매장 찾기</button></li>
                                    <li><button onClick={()=>onClickMenu('1:1상담')} className={`${menu==='1:1상담'?'on':''}`}>1:1상담</button></li>
                                    <li><button onClick={()=>onClickMenu('고객의 소리')} className={`${menu==='고객의 소리'?'on':''}`} >고객의 소리</button></li>
                                    <li><button onClick={()=>onClickMenu('회원 혜택 안내')} className={`${menu==='회원 혜택 안내'?'on':''}`}>회원 혜택 안내</button></li>
                                </ul>
                            </div>
                            <div className="row2">
                                <div className="info-box">
                                    <h3><span><img src="./img/service/customer_icon_cs_info.png" alt="" /></span>CS CENTER</h3>
                                    <h4>1588-9667</h4>
                                    <ul>
                                        <li>월~금</li>
                                        <li>
                                            09:00~12:00 <br />13:00~18:00
                                        </li>
                                    </ul>
                                    <p>(주말,공휴일 휴무)</p>
                                </div>                                
                            </div>
                        </div>
                        <div className="right">
                            {menu==='FAQ' && <FaqComponent/>}
                            {menu==='공지사항' && <NoticeComponent/>}
                        </div>
                    </div>                    
                </div>
            </div>
        </main>
    );
}


