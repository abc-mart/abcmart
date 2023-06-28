import React from 'react';

export default function HeaderComponent(){
    const [isTest, setIsTest] = React.useState(false);
    const onMouseEnterTest=(e)=>{
        setIsTest(true);
    }
    const onMouseLeaveTest=(e)=>{
        setIsTest(false);
    }
    return (
        <div id="header">
            <div className="wrap">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="box1">
                                <div className="box1_1">
                                    <a href="!#">
                                        <img src="./img/headereventfooter/1658299296317.png"/>
                                    </a>
                                </div>
                                <div className="box1_2">
                                    <div className="search_box">
                                        <input type="text" placeholder="아디다스 키즈 페스티벌 ★ 최대 50% 할인에 10% 추가 할인"/>
                                        <a href="!#" className="a1"><img src="./img/headereventfooter/comm_header_icon_smart.png"/></a>
                                        <a href="!#" className="a2"><img src="./img/headereventfooter/comm_header_icon_search.png"/></a>
                                    </div>
                                </div>
                                <div className="box1_3">
                                    <ul>
                                        <a href="!#" className="a1">
                                            <li className="box3_ul_li1">
                                                <img src="./img/headereventfooter/comm_header_util_link_abc_mart.png"/>
                                                <div className="h6">LOGIN</div>
                                            </li>
                                        </a>
                                        <a href="!#" className="a2">
                                            <li className="box3_ul_li2">
                                                <img src="./img/headereventfooter/comm_header_util_link_abc_mart.png"/>
                                                <div className="h6">JOIN</div>
                                            </li>
                                        </a>
                                        <a href="!#" className="a3">
                                            <li className="box3_ul_li3">
                                                <img src="./img/headereventfooter/comm_header_util_link_abc_mart.png"/>
                                                <div className="h6">CART</div>
                                            </li>
                                        </a>
                                        <a href="!#" className="a4">
                                            <li className="box3_ul_li4">
                                                <img src="./img/headereventfooter/comm_header_util_link_abc_mart_store.png"/>
                                                <div className="h6">STORE</div>
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                            <div className="box2">
                                <div className="box2_1">
                                    <ul>
                                        <li className="BRAND"><a href="!#"  onMouseEnter={onMouseEnterTest} onMouseLeave={onMouseLeaveTest}>BRAND</a></li>
                                        <li className="MEN"><a href="!#">MEN</a></li>
                                        <li className="WOMEN"><a href="!#">WOMEN</a></li>
                                        <li className="KIDS"><a href="!#">KIDS</a></li>
                                        <li className="SALE"><a href="!#">SALE</a></li>
                                    </ul>
                                    <ul>
                                        <li className={`hidden1 ${isTest?' on':''}`} onMouseEnter={onMouseEnterTest} onMouseLeave={onMouseLeaveTest}></li>
                                        <li className="hidden2"></li>
                                        <li className="hidden3"></li>
                                        <li className="hidden4"></li>
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
    );
};