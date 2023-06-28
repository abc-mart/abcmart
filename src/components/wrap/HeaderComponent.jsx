import React from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';

export default function HeaderComponent({setSelectButton}){
    const [isShow, setIsShow] = React.useState('');
    const onMouseEnterShow=(value)=>{
        setIsShow(value);
    }
    const onMouseLeaveShow=(e)=>{
        setIsShow('');
    }

    const onClickSelect=(value)=>{
        setSelectButton(value);
        setIsShow('');
    }

    
    
    return (
        <>
        <header id="header">
            <div className="wrap">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="box1">
                                <div className="box1_1">
                                    <Link to="/INTRO">
                                        <img src="./img/headereventfooter/1658299296317.png" alt=''/>
                                    </Link>
                                </div>
                                <div className="box1_2">
                                    <div className="search_box">
                                        <input type="text" placeholder="아디다스 키즈 페스티벌 ★ 최대 50% 할인에 10% 추가 할인"/>
                                        <a href="!#" className="a1"><img src="./img/headereventfooter/comm_header_icon_smart.png" alt=''/></a>
                                        <a href="!#" className="a2"><img src="./img/headereventfooter/comm_header_icon_search.png" alt=''/></a>
                                    </div>
                                </div>
                                <div className="box1_3">
                                    <ul>
                                        <a href="!#" className="a1">
                                            <li className="box3_ul_li1">
                                                <img src="./img/headereventfooter/comm_header_util_link_abc_mart.png" alt=''/>
                                                <div className="h6">LOGIN</div>
                                            </li>
                                        </a>
                                        <a href="!#" className="a2">
                                            <li className="box3_ul_li2">
                                                <img src="./img/headereventfooter/comm_header_util_link_abc_mart.png" alt=''/>
                                                <div className="h6">JOIN</div>
                                            </li>
                                        </a>
                                        <a href="!#" className="a3">
                                            <li className="box3_ul_li3">
                                                <img src="./img/headereventfooter/comm_header_util_link_abc_mart.png" alt=''/>
                                                <div className="h6">CART</div>
                                            </li>
                                        </a>
                                        <a href="!#" className="a4">
                                            <li className="box3_ul_li4">
                                                <img src="./img/headereventfooter/comm_header_util_link_abc_mart_store.png" alt=''/>
                                                <div className="h6">STORE</div>
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                            <div className="box2">
                                <div className="box2-container">
                                <div className="box2_1">
                                    <ul>
<<<<<<< HEAD
                                        <li className="BRAND"><a href="!#"  onMouseEnter={()=>onMouseEnterShow('BRAND')}>BRAND</a></li>
                                        <li className="MEN"><a href="!#" onMouseEnter={()=>onMouseEnterShow('MEN')}>MEN</a></li>
                                        <li className="WOMEN"><a href="!#" onMouseEnter={()=>onMouseEnterShow('WOMEN')}>WOMEN</a></li>
                                        <li className="KIDS"><a href="!#" onMouseEnter={()=>onMouseEnterShow('KIDS')}>KIDS</a></li>
                                        <li className="SALE"><a href="!#" onMouseEnter={()=>onMouseEnterShow('SALE')}>SALE</a></li>
=======
                                        <li className="BRAND">
                                            <a href="!#"  onMouseEnter={onMouseEnterTest} onMouseLeave={onMouseLeaveTest}>BRAND
                                                <span className={isTest?' on':''} onMouseEnter={onMouseEnterTest} onMouseLeave={onMouseLeaveTest}></span>
                                            </a>
                                        </li>
                                        <li className="MEN"><a href="!#">MEN</a></li>
                                        <li className="WOMEN"><a href="!#">WOMEN</a></li>
                                        <li className="KIDS"><a href="!#">KIDS</a></li>
                                        <li className="SALE"><a href="!#">SALE</a></li>
>>>>>>> 427ce47d3026703c4b647bd156beaa2bceacbcea
                                    </ul>
                                    <ul  onMouseLeave={onMouseLeaveShow}>
                                        <li className={`hidden1 ${isShow==='BRAND'?' on':''}`} >
                                            <dl>
                                                <dd><Link to='/BRAND' onClick={()=>onClickSelect('adidas')}>아디다스</Link></dd>
                                                <dd><Link to='/BRAND' onClick={()=>onClickSelect('nike')}>나이키</Link></dd>                                                
                                            </dl>
                                        </li>
                                        <li className={`hidden2 ${isShow==='MEN'?' on':''}`}></li>
                                        <li className={`hidden3 ${isShow==='WOMEN'?' on':''}`}></li>
                                        <li className={`hidden4 ${isShow==='KIDS'?' on':''}`}></li>
                                    </ul>
                                </div>
                                <div className="box2_2">
                                    <ul>
                                        <li><a href="!#">기획전</a></li>
                                        <li><a href="!#">KIDS마트</a></li>
                                        <li><a href="!#">ONLY ABC</a></li>
                                        <li><a href="!#">이벤트/쿠폰</a></li>
                                    </ul>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <Outlet/>
        </>
    );
};