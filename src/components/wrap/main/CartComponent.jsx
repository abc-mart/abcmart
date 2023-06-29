import React from 'react';

export default function CartComponent(){
    return (
        <div id='cart'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>장바구니</h1>
                        <ul>
                            <li>01. 장바구니</li>
                            <li>02. 주문서작성/결제</li>
                            <li>03. 주문완료</li>
                        </ul>
                    </div>
                    <div className="delivery-category">
                        <ul>
                            <li><a href="!#">일반배송 <span>(4)</span></a></li>
                            <li><a href="!#">아트배송 <span>(0)</span></a></li>
                        </ul>
                    </div>
                    <div className="content">
                        <ul>
                            <li><a href="!#">전체 <span>4</span>개</a></li>
                            <li><a href="!#">ABC-MART 매장 픽업 가능상품</a></li>
                        </ul>
                        <div className="cart-box">
                            <div className="cart-top-box">
                                <span><input type="checkbox" /><label>전체선택</label></span>
                                <div className="right-box">
                                    <span>매장픽업 가능상품</span>
                                    <span>아트배송 가능상품</span>
                                    <button></button>
                                </div>
                            </div>
                            <div className="cart-middle-box">
                                <div className="cart-header">
                                    <div className="left-box">
                                        <span>일반 배송 상품 </span>
                                        <span><em>4</em>개</span>
                                    </div>
                                    <span>무료배송</span>
                                </div>
                                <div className="cart-container">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span>
                                                        <input type="checkbox" />
                                                        <label></label>
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="product-box">
                                                        <figure>
                                                            <a href="!#">
                                                                <img src="./img/intro/06103_1679297266326.jpg" alt="" />
                                                            </a>
                                                        </figure>
                                                        <div className="information">
                                                            <h3>컨버스</h3>
                                                            <a href="!#">
                                                                CT AS Core 
                                                                <br />
                                                                Black
                                                            </a>
                                                            <p>
                                                                <span>230</span>
                                                                <button>옵션변경</button>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>
                                                        <a href="!#"></a>
                                                        <input type="number" />
                                                        <a href="!#"></a>
                                                    </span>
                                                    <button>변경</button>
                                                </td>
                                                <td>
                                                    <span>540P</span>
                                                    <p>
                                                        통합멤버십 회원 가입 시
                                                        <br />
                                                        예상적립 포인트
                                                    </p>
                                                </td>
                                                <td>
                                                    <p>
                                                        <s className='cost-price'><em>원</em></s>
                                                        <strong className='discount-price'><em>원</em></strong>
                                                        <span></span>
                                                    </p>
                                                    <button>쿠폰적용</button>
                                                </td>
                                                <td>
                                                    <button>바로구매</button>
                                                    <button><span>삭제</span></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart-footer">
                                    <div className="cart-btn-box">
                                        <button>선택 삭제</button>
                                        <button>배송변경</button>
                                        <button>품절/판매종료 삭제</button>
                                    </div>
                                    <p>비로그인 상태에서 장바구니에 담긴 상품은 저장되지 않습니다.</p>
                                </div>
                            </div>
                            <div className="cart-bottom-box">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>
                                                    <span>주문금액</span>
                                                    <span>36,500<em>원</em></span>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <span>총 할인금액</span>
                                                    <span>15,000<em>원</em></span>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <span>결제예정금액</span>
                                                    <span>21,500<em>원</em></span>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td>
                                                <p>
                                                    <span>상품금액</span>
                                                    <span>34,000<em>원</em></span>
                                                </p>
                                                <p>
                                                    <span>추가 배송비</span>
                                                    <span>2,500<em>원</em></span>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <span>상품할인</span>
                                                    <span>15,000<em>원</em></span>
                                                </p>
                                            </td>
                                            <td>
                                                <p>
                                                    <span>상품할인</span>
                                                    <span>15,000<em>원</em></span>
                                                </p>
                                                <p>- 통합멤버십 회원 가입시 적립예정 포인트</p>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="main-button-box">
                                <button>계속 쇼핑하기</button>
                                <button>일반배송 선택상품 주문하기</button>
                                <button>일반배송 전체상품 주문하기</button>
                            </div>
                        </div>
                        <div className="notice-box">
                            <h2>상품 주문 전 꼭 확인해주세요!</h2>
                            <ul>
                                <li>A-RT 배송 상품은 ABC-MART 온라인 물류센터 또는 ABC-MART 매장에서 발송되는 상품입니다</li>
                                <li>On the spot배송 상품은 ABC-MART 온라인 물류센터 또는 On the spot 매장에서 발송되는 상품입니다.</li>
                                <li>매장에서 발송되는 경우 온라인 물류센터 상품보다 평균 배송기간이 2~3일 정도 더 소요될 수 있습니다.</li>
                                <li>발송 매장 정보는 주문 완료 후 ‘마이페이지 &gt; 쇼핑내역 &gt; 주문/배송 현황조회’에서 확인 가능합니다.</li>
                                <li>업체 배송 상품의 경우 업체별 배송비 정책에 따라 배송비가 부과됩니다.</li>
                                <li>업체 배송 상품은 매장 픽업, 편의점 픽업이 불가능합니다.</li>
                                <li>2개 이상의 상품 주문 시 재고 여부에 따라 분리 발송될 수 있습니다.</li>
                                <li>매장 픽업이 불가능한 상품을 포함하여 주문할 경우 주문서 작성/결제 페이지에서 매장픽업 선택이 불가능합니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};