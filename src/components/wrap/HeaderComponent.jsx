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
                                        <li className="BRAND"><a href="!#"  onMouseEnter={()=>onMouseEnterShow('BRAND')}>BRAND</a></li>
                                        <li className="MEN"><a href="!#" onMouseEnter={()=>onMouseEnterShow('MEN')}>MEN</a></li>
                                        <li className="WOMEN"><a href="!#" onMouseEnter={()=>onMouseEnterShow('WOMEN')}>WOMEN</a></li>
                                        <li className="KIDS"><a href="!#" onMouseEnter={()=>onMouseEnterShow('KIDS')}>KIDS</a></li>
                                        <li className="SALE"><a href="!#" onMouseEnter={()=>onMouseEnterShow('SALE')}>SALE</a></li>
                                    </ul>
                                    <ul  onMouseLeave={onMouseLeaveShow}>
                                        <li className={`hidden1 ${isShow==='BRAND'?' on':''}`} >
                                            <div className="hidden1-container">
                                                <div className="left">
                                                    <div className="left-head">                                                        
                                                        <div className="search-box">
                                                            <input type="text" placeholder='브랜드를 검색하세요'/>
                                                            <span><img src="./img/brand/comm_gnb_search_icon.png" alt="" /></span>
                                                        </div>
                                                        <div className="btn-box">
                                                            <button className='on'>ABC, 123</button>
                                                            <button>ㄱㄴㄷ</button>
                                                        </div>
                                                    </div>
                                                    <div className="left-content">                                                        
                                                        <div className="category a">
                                                            <h2>A</h2>
                                                            <dl>
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('adidas')}>
                                                                        <span>ADIDAS</span>
                                                                        <span>아디다스</span>
                                                                    </Link>
                                                                </dd>
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('nike')}>
                                                                        <span>NIKE</span>
                                                                        <span>나이키</span>
                                                                    </Link>
                                                                </dd>                                                
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('nike')}>
                                                                        <span>NIKE</span>
                                                                        <span>나이키</span>
                                                                    </Link>
                                                                </dd>                                                
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('nike')}>
                                                                        <span>NIKE</span>
                                                                        <span>나이키</span>
                                                                    </Link>
                                                                </dd>                                                
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('nike')}>
                                                                        <span>NIKE</span>
                                                                        <span>나이키</span>
                                                                    </Link>
                                                                </dd>                                                
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('nike')}>
                                                                        <span>NIKE</span>
                                                                        <span>나이키</span>
                                                                    </Link>
                                                                </dd>                                                
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('nike')}>
                                                                        <span>NIKE</span>
                                                                        <span>나이키</span>
                                                                    </Link>
                                                                </dd>                                                
                                                            </dl>        
                                                        </div>
                                                        <div className="category b">
                                                            <h2>B</h2>
                                                            <dl>
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('adidas')}>
                                                                        <span>ADIDAS</span>
                                                                        <span>아디다스</span>
                                                                    </Link>
                                                                </dd>
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('nike')}>
                                                                        <span>NIKE</span>
                                                                        <span>나이키</span>
                                                                    </Link>
                                                                </dd>                                                
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('nike')}>
                                                                        <span>NIKE</span>
                                                                        <span>나이키</span>
                                                                    </Link>
                                                                </dd>                                                
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('nike')}>
                                                                        <span>NIKE</span>
                                                                        <span>나이키</span>
                                                                    </Link>
                                                                </dd>                                                
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('nike')}>
                                                                        <span>NIKE</span>
                                                                        <span>나이키</span>
                                                                    </Link>
                                                                </dd>                                                
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('nike')}>
                                                                        <span>NIKE</span>
                                                                        <span>나이키</span>
                                                                    </Link>
                                                                </dd>                                                
                                                                <dd>
                                                                    <Link to='/BRAND' onClick={()=>onClickSelect('nike')}>
                                                                        <span>NIKE</span>
                                                                        <span>나이키</span>
                                                                    </Link>
                                                                </dd>                                                
                                                            </dl>        
                                                        </div>
                                                    </div>                                                   
                                                    
                                                </div>
                                                <div className="right">
                                                    <div className="row 1">
                                                        <h2>Family site</h2>
                                                        <button></button>
                                                        <button></button>
                                                    </div>
                                                    <div className="row 2">
                                                        <h2>My Brands</h2>
                                                        <a href="!#">로그인 하여 나의 관심브랜드를 확인해보세요.</a>
                                                    </div>
                                                    <div className="row 3">
                                                        <h2>Hot Brands</h2>
                                                        <div className="content-box">
                                                            <div className="img-box">
                                                                <img src="./img/brand/1629843492243.jpg" alt="" />
                                                            </div>
                                                            <a href="!#">
                                                                <span>NIKE <i><img src="./img/brand/btn_icon_prod_favorite.png" alt="" /></i></span>
                                                                <span>nike</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
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