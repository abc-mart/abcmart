import React from 'react';
import './scss/productdetail.scss';

export default function ProductDetailComponent(){
    return (
        <div id='ProductDetail'>
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
                                    <div className="big-img"><a href="!#"><img src="./img/detail/bigimg.jpg" alt="" /></a></div>
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
                                                    <a href="!#">휠라&ensp;&nbsp;</a>
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
                                        <h2>엘리트 코드 v2</h2>
                                        <h5>ELITE COURT v2</h5>
                                        <ul>
                                            <li>스타일코드 : 1XM01970F</li>
                                            <li>상품코드 : 1010098951</li>
                                        </ul>
                                        <div className="price">
                                            <span className='real-price'>79000원</span>
                                            <span className='sale-price'>63000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[20%]</span>
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
                                                        <option value="">예비</option>
                                                        <option value="">예비</option>
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
                                                <span>63,000 <i>원</i></span>
                                                <a href="!#"><img src="./img/detail/btn_icon_delete.png" alt="" /></a>
                                            </div>
                                        </div>
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
            <section id='section2'>
                <div className="container">
                    <div className="gap">
                        <div className="title-box">
                            <div className="title">
                                <h4>기획전/이벤트</h4>
                            </div>
                        </div>
                        <div className="content">
                            <span><img src="./img/detail/1686894468370.jpg" alt="" /></span>
                            <p>이달의 월간슈즈 #스포츠 슈즈</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='section3'>
                <div className="container">
                    <div className="gap">
                        <div className="sangpum-button-box">
                            <a href="!#">상품정보</a>
                            <a href="!#">상품후기 (2)</a>
                            <a href="!#">상품 Q&A (0)</a>
                        </div>
                        <div className="event-banner">
                            <img src="./img/detail/16859462545061.jpg" alt="" />
                        </div>
                        <div className="product-infoimg">
                            <img src="./img/detail/1679901240366.jpg" alt="" />
                            <p>본 상품의 상품 이미지 저작권은 ㈜에이비씨마트코리아에 있으며 내용의 무단복제를 금합니다.</p>
                        </div>
                        <div className="show-product-info">                            
                            <h5>상품정보제공 고시</h5>     
                            <ul>
                                <li>
                                    <div className="left">
                                        <span>소재</span>
                                        <p>합성가죽+폴리에스터</p>
                                    </div>
                                    <div className="right">
                                        <span>색상</span>
                                        <p>100</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="left">
                                        <span>치수</span>
                                        <p>220 / 230 / 240 / 250 / 260 / 270 / 280</p>
                                    </div>
                                    <div className="right">
                                        <span>굽높이</span>
                                        <p>뒷굽 : 2.5cm</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="left">
                                        <span>제조자</span>
                                        <p>휠라코리아</p>
                                    </div>
                                    <div className="right">
                                        <span>제조국</span>
                                        <p>베트남</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="left">
                                        <span>A/S 책임자와 전화번호</span>
                                        <p>ABC마트 A/S 담당자 : 080-701-7770</p>
                                    </div>
                                    <div className="right">
                                        <span>제조년월</span>
                                        <p>상품별 입고시기에 따라 상이하여, 배송 받으신 제품의 라벨 참고 바랍니다.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="left">
                                        <span>품질보증기준</span>
                                        <p>관련 법 및 소비자 분쟁 해결 기준에 따름 (품질보증기간 : 구입일로부터 6개월 이내)</p>
                                    </div>
                                    <div className="right">
                                        <span>소재별 관리방법</span>
                                        <p>
                                            상품 착용 및 세탁 시에는 제품에 부착된 라벨 및 취급 주의사항을 꼭 먼저 확인해 주시길 바랍니다. 
                                            가벼운 오염물이 묻었을 때에는 부드러운 솔로 털어내주시기 바랍니다. 물에 젖었을 때에는 바람이 잘 통하는 응달에 건조해 주시기 바랍니다.
                                        </p>
                                    </div>
                                </li>

                            </ul>    
                            <h6><img src="./img/detail/text_icon_notice_gray.png" alt="" />전자상거래 등에서의 상품정보제공 고시에 따라 작성되었습니다.</h6>                       
                            
                        </div>
                        <div className="product-slide">
                            <div className="button-box">
                                <a href="!#">관련 용품 추천</a>
                                <a href="!#">휠라 BEST</a>
                                <a href="!#">휠라 신상품</a>
                            </div>
                            <div className="slide">
                                <ul>
                                    <il className="slide 1"><img src="./img/detail/1685493643014.jpg" alt="" />
                                        <img src="./img/detail/" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <span className='real-price'>99,000원</span>
                                        <span className='sale-price'>49000</span>
                                        <span className='won'>원</span>
                                        <span className='discount-per'>[50%]</span>
                                    </il>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='section4'>
                <div className="sangpum-button-box">
                    <a href="!#">상품정보</a>
                    <a href="!#">상품후기 (2)</a>
                    <a href="!#">상품 Q&A (0)</a>
                </div>
                <div className="event-banner">
                    <img src="./img/detail/" alt="" />
                </div>
                <ul>
                    <li>일반(텍스트) 후기는 500포인트, 포토 후기는 1,000포인트, 동영상 후기는 1,500포인트를 적립해드립니다.</li>
                    <li>(동영상 후기는 mp4 형식의 파일만 해당됩니다.)</li>
                    <li>후기 등록일 이후 최대 3일 이내에 후기 포인트 적립해드립니다. (주말 및 공휴일 제외)</li>
                    <li>상품 결제 가격이 2만 원 미만인 경우 후기 포인트가 지급되지 않습니다.</li>
                    <li>구매 확정일로부터 30일 이후에 후기를 등록한 경우 후기 포인트가 지급되지 않습니다.</li>
                    <li>직접 촬영한 사진 및 동영상이 아닐 경우 포토/동영상 후기에 대한 포인트 지급이 제외됩니다.</li>
                    <li>동일한 이미지를 사용하여 여러 번 상품 후기를 등록하시는 경우 포토 후기에 대한 포인트는 한 번만 지급됩니다.</li>
                    <li>허위, 과대광고, 문의 등 후기 내용과 관련 없는 글은 통보 없이 삭제될 수 있습니다.</li>
                    <li>포인트는 통합멤버십 회원에게만 지급됩니다.</li>
                    <li>상품후기는 A-RT.COM 주문 상품만 작성 가능합니다.</li>
                    <li>작성하신 상품후기는 A-RT.COM에 귀속되며, 마케팅 용도로 사용될 수 있습니다.</li>
                </ul>

                <div className="how-like-box">
                    <div className="stars">
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
                    <div className="percentage">
                        <div className="per">
                            <span>사이즈</span>
                            <h5>정 사이즈</h5>
                            <p>100<span>%</span> </p>
                        </div>
                        <div className="per">
                            <span>색상</span>
                            <h5>화면과 같음</h5>
                            <p>100<span>%</span> </p>
                        </div>
                        <div className="per">
                            <span>발볼</span>
                            <h5>적당함</h5>
                            <p>100<span>%</span> </p>
                        </div>
                        <div className="per">
                            <span>발등</span>
                            <h5>적당함</h5>
                            <p>100<span>%</span> </p>
                        </div>
                    </div>
                    <div className="distribution">
                        <div className="button-box">
                            <a href="!#">사이즈</a>
                            <a href="!#">색상</a>
                            <a href="!#">발볼</a>
                            <a href="!#">발등</a>
                        </div>
                        <div className="size-tap">
                            <div className='bar'>
                                <span>
                                    <i>0%</i>
                                </span>
                                <p>10mm정도 작음</p>
                            </div>
                            <div className='bar'>
                                <span>
                                    <i>0%</i>
                                </span>
                                <p>5mm정도 작음</p>
                            </div>
                            <div className='bar'>
                                <span>
                                    <i>0%</i>
                                </span>
                                <p>정 사이즈</p>
                            </div>
                            <div className='bar'>
                                <span>
                                    <i>0%</i>
                                </span>
                                <p>5mm정도 큼</p>
                            </div>
                            <div className='bar'>
                                <span>
                                    <i>0%</i>
                                </span>
                                <p>10mm정도 큼</p>
                            </div>
                        </div>
                    </div>

                    <div className="review-filter">
                        <div className="mysize">
                            <div className="up">
                                <img src="./img/detail/product_review_fiter_icon.png" alt="" />
                                <div className="text">
                                    <h5>나의 사이즈 선택하기<img src="./img/detail/btn_icon_circle_arr.png" alt="" /></h5>
                                    <h6>나의 사이즈와 비슷한 상품 후기를 바로 확인해보세요.</h6>
                                </div>
                            </div>
                            <div className="down">
                                <button>
                                    <img src="./img/detail/btn_icon_all_del.png" alt="" />전체삭제
                                </button>
                            </div>
                        </div>
                        <div className="option">
                            <div className="up">
                                <img src="./img/detail/product_review_fiter_icon.png" alt="" />
                                <div className="text">
                                    <h5>상품 옵션 선택하기<img src="./img/detail/btn_icon_circle_arr.png" alt="" /></h5>
                                    <h6>상품의 옵션 별 후기를 바로 확인해보세요.</h6>
                                </div>
                            </div>
                            <div className="down">
                                <button>
                                    <img src="./img/detail/btn_icon_all_del.png" alt="" />전체삭제
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </div>
    );
};

 