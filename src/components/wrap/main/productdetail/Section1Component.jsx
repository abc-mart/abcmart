import React from 'react';
import '../scss/productdetail.scss';

export default function Section1Component({d_key}){

    const [state, setState] = React.useState({
        shoes:{}
    });

    const {shoes} = state;

    React.useEffect(()=>{
        console.log(d_key);        
        if(localStorage.getItem(d_key) !== null){
            let result = JSON.parse(localStorage.getItem(d_key));
            setState({
                ...state,
                shoes: result[0]
            })
        }
    },[])

    return (
        
        <section id='section1'>
            <div className="container">
                <div className="gap">
                    <div className="menu">
                        <div className="menu-depth">
                            <span><img src="./img/detail/home.png" alt="" /></span>
                            <a href="!#">HOME</a>
                            <i><img src="./img/detail/menu-depth-arrow.png" alt="" /></i>
                            <a href="!#">신발</a>
                            <a className='selectbox' href="!#"><img src="./img/detail/arrow-bottom.png" alt="" /></a>
                            <i><img src="./img/detail/menu-depth-arrow.png" alt="" /></i>
                            <a href="!#">운동화</a>
                            <a className='selectbox' href="!#"><img src="./img/detail/arrow-bottom.png" alt="" /></a>
                            <i><img src="./img/detail/menu-depth-arrow.png" alt="" /></i>
                            <a href="!#">스니커즈</a>
                            <a className='selectbox' href="!#"><img src="./img/detail/arrow-bottom.png" alt="" /></a>
                        </div>
                        <div className="product-box">
                            <div className="left">
                                <div className="big-img"><a href="!#"><img src={shoes.이미지} alt="" /></a></div>
                                <div className="small-img-box">
                                    <span><img src="./img/detail/btn_icon_prev.png" alt="" /></span>
                                    <a href="!#"><img src="./img/detail/small_1.jpg" alt="" /></a>
                                    <a href="!#"><img src="./img/detail/small_2.jpg" alt="" /></a>
                                    <a href="!#"><img src="./img/detail/small_3.jpg" alt="" /></a>
                                    <a href="!#"><img src="./img/detail/small_4.jpg" alt="" /></a>
                                    <a href="!#"><img src="./img/detail/small_5.jpg" alt="" /></a>
                                    <span><img src="./img/detail/btn_icon_next.png" alt="" /></span>
                                </div>
                                <div className="score-box">
                                    <div className="score">
                                        <p>상품만족도</p>
                                        <h4>100<span>%</span></h4>
                                        <div className="star">
                                            <img src="./img/detail/blackstar.png" alt="" />
                                            <img src="./img/detail/blackstar.png" alt="" />
                                            <img src="./img/detail/blackstar.png" alt="" />
                                            <img src="./img/detail/blackstar.png" alt="" />
                                            <img src="./img/detail/blackstar.png" alt="" />
                                            <span>5</span>
                                        </div>
                                    </div>
                                    <div className="size-color">
                                        <ul>
                                            <li><span>사이즈</span>정 사이즈</li>
                                            <li><span>색상</span>화면과 같음</li>
                                            <li><span>발볼</span>적당함</li>
                                            <li><span>발등</span>적당함</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="top">
                                    <div className="explain">
                                        <div className="brand-name">
                                            <div className="abcm">
                                                <span>ABC-MART</span>
                                                <a href="!#">{shoes.제조사}&ensp;&nbsp;</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="heart-url">
                                        <img src="./img/detail/prod_icon_store_16.png" alt="" />
                                        <p>매장픽업 가능</p>
                                        <a href="!#"><img src="./img/detail/whiteheart.png" alt="" /></a>
                                        <a href="!#"><img src="./img/detail/btn_icon_share.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="txt">
                                    <h2>{shoes.제품명}</h2>
                                    <h5>ELITE COURT v2</h5>
                                    <ul>
                                        <li>스타일코드 : 1XM01970F</li>
                                        <li>상품코드 : 1010098951</li>
                                    </ul>
                                    <div className="price">
                                        <span className='real-price'>{shoes.가격}</span>
                                        <span className='sale-price'>{shoes.할인율==0? shoes.가격 : shoes.가격-(shoes.가격 * shoes.할인율)}</span>
                                        <span className='won'>원</span>
                                        <span className='discount-per'>{`[${shoes.할인율*100}%]`}</span>
                                        <img src="./img/detail/mypage_icon_tooltip_discount.png" alt="" />
                                    </div>
                                </div>
                                <div className="style-color">
                                    <span>스타일컬러</span>
                                    <a href="!#"><img src="./img/detail/stylecolor.jpg" alt="" /></a>
                                </div>
                                <div className="delivery-size">
                                    <ul>
                                        <li>
                                            <span>통합멤버십 혜택</span>
                                            <div className="benefit">
                                                <p>회원가입 시 <strong>5,000P</strong> 즉시 적립<img src="./img/detail/" alt="" /></p>
                                                <p>APP 설치 시 <strong>1만원 할인쿠폰</strong> 지급<img src="./img/detail/" alt="" /></p>
                                            </div>
                                        </li>
                                        <li>
                                            <span>카드혜택</span>
                                            <p>무이자 할부 <a href="!#">혜택보기<img src="./img/detail/" alt="" /></a></p>
                                        </li>
                                        <li>
                                            <span>색상코드</span>
                                            <p>100</p>
                                        </li>
                                        <li>
                                            <span>배송방법</span>
                                            <div className="how-del">
                                                <label><input type="radio" name='delivery' id='delivery'/><span>일반배송 (무료배송)</span></label>
                                                <label><input type="radio" name='delivery' id='delivery'/><a href="!#"><img src="./img/detail/comm_art_delivery.png" alt="" /><img src="./img/detail/mypage_icon_tooltip_claim_black.png" alt="" /></a></label>                                                
                                                                                                
                                                <select name="" id="">
                                                    <option disabled selected value="">배송지주소를 선택해주세요</option>
                                                    <option value="예비">예비</option>
                                                    <option value="예비">예비</option>
                                                </select>
                                                
                                            </div>
                                        </li>
                                        <li>
                                            <div className="size-txt">
                                                <span>사이즈</span>
                                                <a href="!#">매장별 재고확인<img src="./img/detail/" alt="" /></a>
                                            </div>
                                            <div className="size">
                                                <a href="!#">220</a>
                                                <a href="!#">230</a>
                                                <a href="!#">240</a>
                                                <a href="!#">250</a>
                                                <a href="!#">260</a>
                                                <a href="!#">270</a>
                                                <a href="!#">280</a>
                                            </div>
                                        </li>
                                        <li>
                                            <span>관련용품 추가구매</span>
                                            <select name="chuga" id="">
                                                <option value="" disabled selected>선택</option>
                                                <option value="">인솔(키높이,남성)</option>
                                                <option value="">컵 인솔(일반)</option>
                                                <option value="">샴푸 (신발 클리너)</option>
                                                <option value="">키위 프레쉬 포스 (신발 냄새 제거제)</option>
                                                <option value="">인솔(키높이,남성)</option>
                                                <option value="">컵 인솔(일반)</option>
                                            </select>
                                        </li>                                    
                                    </ul>

                                </div>
                                <div className="choice">
                                    <div className="choice-product">
                                        <span>230</span>
                                        <div className='ea-price'>
                                            <div className="number">
                                                <a href="!#">-</a>
                                                <div className="count">1</div>
                                                <a href="!#">+</a>
                                            </div>
                                            <span>63,000 <i>원</i></span>
                                            <a href="!#"><img src="./img/detail/btn_icon_delete.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="total-price">
                                    <span className='total-txt'>총 결제금액</span>
                                    <span className='money'>63,000 <i>원</i></span>
                                </div>
                                <div className="button-box">
                                    <button>장바구니</button>
                                    <button>바로구매</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

