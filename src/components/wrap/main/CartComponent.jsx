/* eslint-disable no-restricted-globals */
import React from 'react';
import './scss/cart.scss';

export default function CartComponent({cartKey}){

    const [cart, setCart] = React.useState([]);

    // 장바구니 집계
    const [state, setState] = React.useState({
        주문금액: 0,
        상품금액: 0,
        추가배송비: 0,
        총할인금액: 0,
        상품할인: 0,
        프로모션: 0,
        결제예정금액: 0,
        예상적립포인트: 0
    });

    const {주문금액, 상품금액, 추가배송비, 총할인금액, 상품할인, 프로모션, 결제예정금액, 예상적립포인트} = state;

    // 수량감소 카운트
    const onClickSub=(e, record)=>{
        e.preventDefault();
        // console.log(record);
        const result = cart.map((item)=>{
            return(
                item.product_code === record.product_code ? ({...item, 수량: (item.수량>=2 ? item.수량-1 : 1), 총결제금액 : Math.round((item.수량>=2 ? item.수량-1 : 1)*(item.가격*(1-item.할인율))) }) : ({...item})
            )
        });
        setCart(result);
        localStorage.setItem('ABCMARTCART', JSON.stringify(result));
    }

    // 수량증가 카운트
    const onClickAdd=(e, record)=>{
        e.preventDefault();
        // console.log(record);
        const result = cart.map((item)=>{
            return(
                item.product_code === record.product_code ? ({...item, 수량: (item.수량+1), 총결제금액 : Math.round((item.수량+1)*(item.가격*(1-item.할인율))) }) : ({...item})
            )
        });
        setCart(result);
        localStorage.setItem('ABCMARTCART', JSON.stringify(result));
    }

    // 삭제
    const onClickDel=(e, record)=>{
        e.preventDefault();
        if(confirm('삭제하시겠습니까?')){
            const result = cart.filter((item)=>item.product_code!==record.product_code);
            setCart(result);
            localStorage.setItem('ABCMARTCART', JSON.stringify(result));
            initMethod();
        }
        else{
            return false;
        }
    }


    // 카트가 들어오면 계산
    React.useEffect(()=>{

        let 주문금액 = 0;
        let 상품금액 = 0;
        let 추가배송비 = 0;
        let 총할인금액 = 0;
        let 상품할인 = 0;
        let 프로모션 = 0;
        let 결제예정금액 = 0;
        let 예상적립포인트 = 0;

        cart.map((item, idx)=>{
            if(item.수량!==undefined && item.총결제금액!==undefined){
                주문금액 = state.상품금액+state.추가배송비;
                상품금액 += (item.가격*item.수량);
                추가배송비 = ((상품금액-상품할인) < 20000 ? 2500 : 0);
                총할인금액 = state.상품할인+프로모션;
                상품할인 += Math.round(item.가격*item.할인율);
                프로모션 = 0;
                결제예정금액 = 주문금액-총할인금액;
                예상적립포인트 += Math.round((item.총결제금액)*0.01);
            }
        });

        setState({
            ...state,
            주문금액: 주문금액,
            상품금액: 상품금액,
            추가배송비: 추가배송비,
            총할인금액: 총할인금액,
            상품할인: 상품할인,
            프로모션: 프로모션,
            결제예정금액: 결제예정금액,
            예상적립포인트: 예상적립포인트
        });
        
    },[cart]);


    const initMethod=()=>{
        if(localStorage.getItem('ABCMARTCART')!==null){
            let result = JSON.parse(localStorage.getItem('ABCMARTCART'));
            // console.log(result);

            setCart(result);

            result.map((item, idx)=>{
                // console.log(idx, item)
            });
        }
    }


    // 장바구니(CART) 가져오기
    React.useEffect(()=>{
        initMethod();
    },[]);










    // 모두선택 배열 => 장바구니에 들어온 모든 리스트 목록 저장
    // const [checkAll, setCheckAll] = React.useState([]);
    // const [check, setCheck] = React.useState([]);
    // const [isCheckAll, setIsCheckAll] = React.useState(false);
    // const [isSelectDel, setIsSelectDel] = React.useState(false);

    // React.useEffect(()=>{

    //     setIsCheckAll(true);
    //     setCheck(checkAll);  // 제품코드 모두 저장

    // },[checkAll]);

    // const onClickCheckAll=(e)=>{
    //     e.preventDefault();
    //     if(isCheckAll===false){  // 모두 체크 선택
    //         setIsCheckAll(true);
    //         setCheck(checkAll);  // 제품코드 모두 저장
    //     }
    //     else{  // 모두 체크 선택 해제
    //         setIsCheckAll(false);
    //         setCheck([]);  // 제품코드 모두 삭제
    //     }
    // }

    // // 개별 체크 체크박스
    // const onChangeCheck=(e)=>{

    //     let imsi = [];

    //     if(e.target.checked===true){
    //         setCheck([...check, e.target.value]);  // 추가
    //     }
    //     else if(e.target.checked===false){  // 선택취소 삭제
    //         imsi = check.filter((item)=>item!==e.target.value);  // 제품코드 값만 들어있다.
    //         setCheck(imsi);
    //     }

    // }

    
    // React.useEffect(()=>{

    //     // 전체 선택 체크
    //     if(check.length===cart.length){
    //         setIsCheckAll(true);
    //     }
    //     else{
    //         setIsCheckAll(false);
    //     }

    //     // 선택 삭제 버튼 true, false
    //     if(check.length>0){
    //         setIsSelectDel(true);
    //     }
    //     else{
    //         setIsSelectDel(false);
    //     }

    // },[cart.length, check]);


    // const initMethod=()=>{
    //     if(localStorage.getItem('ABCMARTCART')!==null){
    //         let result = JSON.parse(localStorage.getItem('ABCMARTCART'));

    //         setCart(result);

    //         // console.log(result);
    //         // 임시 배열변수에 제품코드 저장
    //         let imsi = [];
    //         result.map((item, idx)=>{
    //             imsi = [...imsi, item.제품코드];  // imsi[] 에 제품코드 저장
    //         });

    //         // 장바구니에 있는 모든 리스트 목록 저장
    //         // 임시배열변수에 저장된 배열값을 모두 checkAll[] 에 저장한다.
    //         setCheckAll(imsi);
    //     }
    // }

    // React.useEffect(()=>{
    //     initMethod();
    // },[]);


    return (
        <div id='cart'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>장바구니</h1>
                        <ul>
                            <li className='on'>01. 장바구니</li>
                            <li>02. 주문서작성/결제</li>
                            <li>03. 주문완료</li>
                        </ul>
                    </div>
                    <div className="delivery-category">
                        <ul>
                            <li className='on'><a href="!#">일반배송 <span>({cart.length})</span></a></li>
                            <li><a href="!#">아트배송 <span>(0)</span></a></li>
                        </ul>
                    </div>
                    {
                        cart.length===0 ?
                            (
                                <p className='empty-box'>장바구니에 담긴 상품이 없습니다.</p>
                            )
                            :
                            (
                                <div className="content">
                                    <ul>
                                        <li className='on'><a href="!#">전체 <span>{cart.length}</span>개</a></li>
                                        <li><a href="!#">ABC-MART 매장 픽업 가능상품</a></li>
                                    </ul>
                                    <div className="cart-box">
                                        <div className="cart-top-box">
                                            <span className='all-select-btn'>
                                                <input type="checkbox" id='allSelect' className='all-select'/>
                                                <label htmlFor="allSelect">전체선택</label>
                                            </span>
                                            <div className="right-box">
                                                <span>매장픽업 가능상품</span>
                                                <span><em>가능상품</em></span>
                                                <button></button>
                                            </div>
                                        </div>
                                        <div className="cart-middle-box">
                                            <div className="cart-header">
                                                <div className="left-box">
                                                    <span><strong>일반 </strong>배송 상품 </span>
                                                    <span><em>{cart.length}</em>개</span>
                                                </div>
                                                <span>무료배송</span>
                                            </div>
                                            <div className="cart-container">
                                                <table>
                                                    <tbody>
                                                        {
                                                            cart.map((item, idx)=>{
                                                                return(
                                                                    <tr key={idx}>
                                                                        <td className='col1'>
                                                                            <span className='select-btn'>
                                                                                <input type="checkbox" name='select' id='select' value={item.product_code} />
                                                                                <label htmlFor='select'></label>
                                                                            </span>
                                                                        </td>
                                                                        <td className='col2'>
                                                                            <div className="product-box">
                                                                                <figure>
                                                                                    <a href="!#">
                                                                                        <img src={item.이미지} alt="" />
                                                                                    </a>
                                                                                </figure>
                                                                                <div className="information">
                                                                                    <h3>
                                                                                        {item.제조사}
                                                                                        <span className='icon-box'>
                                                                                            <i className='pickup'></i>
                                                                                            <i className='art-delivery'></i>
                                                                                        </span>
                                                                                    </h3>
                                                                                    <a href="!#" >
                                                                                        {item.제품명}
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
                                                                        <td className='col3'>
                                                                            <span>
                                                                                <a onClick={(e)=>onClickSub(e,item)} className='sub-btn' href="!#"><em></em></a>
                                                                                <input type="number" value={item.수량} readOnly/>
                                                                                <a onClick={(e)=>onClickAdd(e,item)} className='add-btn' href="!#"><em></em></a>
                                                                            </span>
                                                                            <button>변경</button>
                                                                        </td>
                                                                        <td className='col4'>
                                                                            <span className='point'>{((item.총결제금액)*0.01).toLocaleString('ko-KR')}P</span>
                                                                            <p>
                                                                                통합멤버십 회원 가입 시
                                                                                <br />
                                                                                예상적립 포인트
                                                                            </p>
                                                                        </td>
                                                                        <td className='col5'>
                                                                            <p>
                                                                                <s className='cost-price'>{(item.가격*item.수량).toLocaleString('ko-KR')}<em>원</em></s>
                                                                                <strong className='discount-price'>{(item.총결제금액).toLocaleString('ko-KR')}<em>원</em></strong>
                                                                                <span></span>
                                                                            </p>
                                                                            <button>쿠폰적용</button>
                                                                        </td>
                                                                        <td className='col6'>
                                                                            <button className='buy-btn'>바로구매</button>
                                                                            <button onClick={(e)=>onClickDel(e, item)} className='delete-btn'><span>삭제</span></button>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="cart-footer">
                                                <div className="cart-btn-box">
                                                    <button className='select-delete-btn'>선택 삭제</button>
                                                    <button className='change-delivery-btn'>배송변경</button>
                                                    <button className='end-delete-btn'>품절/판매종료 삭제</button>
                                                </div>
                                                <p>비로그인 상태에서 장바구니에 담긴 상품은 저장되지 않습니다.</p>
                                            </div>
                                        </div>
                                        <div className="cart-bottom-box">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className='col1'>
                                                            <p>
                                                                <span className='order-price'>주문금액</span>
                                                                <span className='order-price-value'>{(주문금액).toLocaleString('ko-KR')}<em>원</em></span>
                                                            </p>
                                                        </td>
                                                        <td className='col2'>
                                                            <p>
                                                                <span className='total-discount-price'>총 할인금액</span>
                                                                <span className='total-discount-price-value'>{(총할인금액).toLocaleString('ko-KR')}<em>원</em></span>
                                                            </p>
                                                        </td>
                                                        <td className='col3'>
                                                            <p>
                                                                <span className='expected-payment-amount'>결제예정금액</span>
                                                                <span className='expected-payment-amount-value'>{(결제예정금액).toLocaleString('ko-KR')}<em>원</em></span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td className='col1'>
                                                            <p>
                                                                <span className='product-price'>상품금액</span>
                                                                <span className='product-price-value'>{(상품금액).toLocaleString('ko-KR')}<em>원</em></span>
                                                            </p>
                                                            <p>
                                                                <span className='delivery-charge'>추가 배송비</span>
                                                                <span className='delivery-charge-value'>{(추가배송비).toLocaleString('ko-KR')}<em>원</em></span>
                                                            </p>
                                                        </td>
                                                        <td className='col2'>
                                                            <p>
                                                                <span className='product-discount'>상품할인</span>
                                                                <span className='product-discount-value'>{(상품할인).toLocaleString('ko-KR')}<em>원</em></span>
                                                            </p>
                                                            <p>
                                                                <span className='promotion'>프로모션</span>
                                                                <span className='promotion-value'>{(프로모션).toLocaleString('ko-KR')}<em>원</em></span>
                                                            </p>
                                                        </td>
                                                        <td className='col3'>
                                                            <p>
                                                                <span className='expected-point'>예상적립 포인트</span>
                                                                <span className='expected-point-value'>{(예상적립포인트).toLocaleString('ko-KR')}<em>P</em></span>
                                                            </p>
                                                            <p className='point-text'>- 통합멤버십 회원 가입시 적립예정 포인트</p>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div className="main-button-box">
                                            <button className='keep-shopping'>계속 쇼핑하기</button>
                                            <button className='select-product-order'>일반배송 선택상품 주문하기</button>
                                            <button className='all-product-order'>일반배송 전체상품 주문하기</button>
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
                            )
                    }
                </div>
            </div>
        </div>
    );
};