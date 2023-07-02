import React from 'react';
import './scss/cart.scss';

export default function CartComponent(){

    // const [isDelete, setIsDelete] = React.useState(false);
    // const [delCode, setDelCode] = React.useState('');
    // const [isConfirm, setIsConfirm] = React.useState(false);
    // const [isButtonSUB, setIsButtonSUB] = React.useState(false);
    // const [isLogin, setLogin] = React.useState(true);
    // const [cart, setCart] = React.useState([]);
    // const [arr1, setArr1] = React.useState([]);
    // const [arr2, setArr2] = React.useState([]);
    // const [arr3, setArr3] = React.useState([]);
    // const [isCheckAll, setIsCheckAll] = React.useState(false);
    // const [isSelectDel, setIsSelectDel] = React.useState(false);
    // const [checkAll, setCheckAll] = React.useState([]);
    // const [check, setCheck] = React.useState([]);
    
   
    // React.useEffect(()=>{
    //     setIsCheckAll(true);
    //     setCheck(checkAll);
    // },[checkAll]);

    // const onClickSelectDelete=(e)=>{
    //     e.preventDefault();
    //     setIsConfirm(true);
    // }



    // // 체크 올 버튼
    // const onClickCheckAll=(e)=>{
    //     e.preventDefault();
    //     if(isCheckAll===false){
    //         setIsCheckAll(true);
    //         setCheck(checkAll);
    //     }
    //     else{
    //         setIsCheckAll(false);
    //         setCheck([]);
    //     }
    // }

    // const  onChangeCheck=(e)=>{
    //     let imsi = [];    
    //     if( e.target.checked===true ){                
    //         setCheck([...check, e.target.value]);       
    //     }
    //     else if( e.target.checked===false ){         
    //         imsi = check.filter((item)=>item !== e.target.value);
    //         setCheck(imsi);
    //     } 
        

    // }

    // React.useEffect(()=>{

    //     if( check.length===cart.length ){
    //         setIsCheckAll(true);
    //     }
    //     else{
    //         setIsCheckAll(false);
    //     }

    //     if( check.length > 0 ){
    //         setIsSelectDel(true);
    //     }
    //     else{
    //         setIsSelectDel(false);
    //     }


    // },[cart.length, check]);

    // const [state, setState] = React.useState({
    //     총상품금액: 0,    //  누계금액
    //     상품할인금액: 0, // 누계금액
    //     배송비: 0,      // 결정금액 
    //     결재예정금액: 0  // 결정금액
    // });

    // const {총상품금액,상품할인금액,배송비,결재예정금액} = state;

    // const onClickSUB=(e, record)=>{
    //     e.preventDefault();
    //     console.log( record );
    //     const result = cart.map((item)=>{
    //         return( 
    //             item.product_code===record.product_code ? ({...item, 수량: (item.수량 >= 2 ? item.수량-1 : 1), 총상품금액: Math.round((item.수량 >= 2 ? item.수량-1 : 1)*(item.정가*(1-item.할인율))) }) : ({...item})
    //         )
    //     });

    //     setCart(result);
    //     localStorage.setItem('ABCMARTCART', JSON.stringify(result));
    // }
    
    // const onClickADD=(e, record)=>{
    //     e.preventDefault();
    //     console.log( record );
    //     const result = cart.map((item)=>{
    //         return( 
    //             item.product_code===record.product_code ? ({...item, 수량: (item.수량+1), 총상품금액: Math.round((item.수량+1)*(item.정가*(1-item.할인율))) }) : ({...item})
    //         )
    //     });

    //     setCart(result);

    //     localStorage.setItem('ABCMARTCART', JSON.stringify(result));
    // }

    // const onClickDel=(e, record)=>{

    //     e.preventDefault();
    //     setIsDelete(true);
    //     setDelCode(record.제품코드);
    // }

    // React.useEffect(()=>{
    //     isDelete && setIsConfirm(true);
    // },[delCode, isDelete]);

    // const onClickConfirmModalClose=(e, value)=>{
    //     e.preventDefault();
    //     let result='';

    //     if(value==='확인'){          

    //         if(isSelectDel===true){
    //             result = cart.filter((item)=> !check.includes(item.제품코드) )
    //         }
    //         else{
    //             result = cart.filter((item)=>item.제품코드!==delCode)
    //         }

    //         setCheck([]);
    //         setCart( result );
    //         localStorage.setItem('ABCMARTCART',  JSON.stringify(result));
    //         initMethod();           
    //     }
    //     setDelCode('');
    //     setIsConfirm(false);
    //     setIsDelete(false);


    // }

    // const initMethod=()=>{
        
    //     if( localStorage.getItem('ABCMARTCART')!==null ){
    //         let result = JSON.parse(localStorage.getItem('ABCMARTCART'));
            
    //         result.sort((a,b)=>{                
    //             if(a.보관방법  >  b.보관방법) return  1;
    //             if(a.보관방법  <  b.보관방법) return -1;
    //             if(a.보관방법 === b.보관방법) return  0;
    //         });

            
    //         setCart(result);
    //         setIsSelectDel(false);
    //         let arr1 =[];
    //         let arr2 =[];
    //         let arr3 =[];
            
    //         let imsi = [];
    //         result.map((item, idx)=>{
                
    //             imsi = [...imsi, item.제품코드];

    //             if( item.보관방법 === '냉장' ){
    //                 arr1 = [...arr1, item];
    //             }                
    //             else if( item.보관방법 === '냉동' ){
    //                 arr2 = [...arr2, item];
    //             }                
    //             else if( item.보관방법 === '상온' ){
    //                 arr3 = [...arr3, item];
    //             }                
    //         });

    //         setCheckAll(imsi);
    //         setArr1(arr1)
    //         setArr2(arr2)
    //         setArr3(arr3)
    //     }
    // }

    // React.useEffect(()=>{
    //     initMethod();
    // },[]);

    // React.useEffect(()=>{
      
    //     let 총상품금액 = 0;
    //     let 상품할인금액 = 0;
    //     let 배송비 = 0;
    //     let 결재예정금액 = 0;

    //     cart.map((item, idx)=>{
    //         if(item.수량!==undefined && item.총상품금액!==undefined){
    //             총상품금액 += Number(item.총상품금액);
    //             상품할인금액 += Math.round(Number(item.정가)*Number(item.할인율));
    //             배송비 = ((총상품금액-상품할인금액) < 40000 ? 3000 : 0);
    //             결재예정금액 = (총상품금액-상품할인금액)+배송비
    //         }
    //     });

    //     setState({
    //         총상품금액: 총상품금액,
    //         상품할인금액: 상품할인금액,
    //         배송비: 배송비,
    //         결재예정금액: 결재예정금액
    //     })

    // },[cart]);


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
                            <li className='on'><a href="!#">일반배송 <span>(4)</span></a></li>
                            <li><a href="!#">아트배송 <span>(0)</span></a></li>
                        </ul>
                    </div>
                    <div className="content">
                        <ul>
                            <li className='on'><a href="!#">전체 <span>4</span>개</a></li>
                            <li><a href="!#">ABC-MART 매장 픽업 가능상품</a></li>
                        </ul>
                        <div className="cart-box">
                            <div className="cart-top-box">
                                <span className='all-select-btn'>
                                    <input type="checkbox" id='allSelect'/>
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
                                        <span><em>4</em>개</span>
                                    </div>
                                    <span>무료배송</span>
                                </div>
                                <div className="cart-container">
                                    <table>
                                        <tbody>
                                            {/* {
                                                cart.map((item, idx)=>{
                                                    return(
                                                        <tr key={idx}>
                                                            <td className='col1'>
                                                                <span className='select-btn'>
                                                                    <input type="checkbox"  id='select'/>
                                                                    <label htmlFor='select'></label>
                                                                </span>
                                                            </td>
                                                            <td className='col2'>
                                                                <div className="product-box">
                                                                    <figure>
                                                                        <a href="!#">
                                                                            <img src="./img/intro/06103_1679297266326.jpg" alt="" />
                                                                        </a>
                                                                    </figure>
                                                                    <div className="information">
                                                                        <h3>
                                                                            컨버스
                                                                            <span className='icon-box'>
                                                                                <i className='pickup'></i>
                                                                                <i className='art-delivery'></i>
                                                                            </span>
                                                                        </h3>
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
                                                            <td className='col3'>
                                                                <span>
                                                                    <a className='sub-btn' href="!#"><em></em></a>
                                                                    <input type="number" />
                                                                    <a className='add-btn' href="!#"><em></em></a>
                                                                </span>
                                                                <button>변경</button>
                                                            </td>
                                                            <td className='col4'>
                                                                <span className='point'>540P</span>
                                                                <p>
                                                                    통합멤버십 회원 가입 시
                                                                    <br />
                                                                    예상적립 포인트
                                                                </p>
                                                            </td>
                                                            <td className='col5'>
                                                                <p>
                                                                    <s className='cost-price'>59,000<em>원</em></s>
                                                                    <strong className='discount-price'>53,100<em>원</em></strong>
                                                                    <span></span>
                                                                </p>
                                                                <button>쿠폰적용</button>
                                                            </td>
                                                            <td className='col6'>
                                                                <button className='buy-btn'>바로구매</button>
                                                                <button className='delete-btn'><span>삭제</span></button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            } */}
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
                                                    <span className='order-price-value'>136,000<em>원</em></span>
                                                </p>
                                            </td>
                                            <td className='col2'>
                                                <p>
                                                    <span className='total-discount-price'>총 할인금액</span>
                                                    <span className='total-discount-price-value'>37,900<em>원</em></span>
                                                </p>
                                            </td>
                                            <td className='col3'>
                                                <p>
                                                    <span className='expected-payment-amount'>결제예정금액</span>
                                                    <span className='expected-payment-amount-value'>98,100<em>원</em></span>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td className='col1'>
                                                <p>
                                                    <span className='product-price'>상품금액</span>
                                                    <span className='product-price-value'>34,000<em>원</em></span>
                                                </p>
                                                <p>
                                                    <span className='delivery-charge'>추가 배송비</span>
                                                    <span className='delivery-charge-value'>2,500<em>원</em></span>
                                                </p>
                                            </td>
                                            <td className='col2'>
                                                <p>
                                                    <span className='product-discount'>상품할인</span>
                                                    <span className='product-discount-value'>15,000<em>원</em></span>
                                                </p>
                                                <p>
                                                    <span className='promotion'>프로모션</span>
                                                    <span className='promotion-value'>15,000<em>원</em></span>
                                                </p>
                                            </td>
                                            <td className='col3'>
                                                <p>
                                                    <span className='expected-point'>예상적립 포인트</span>
                                                    <span className='expected-point-value'>990<em>P</em></span>
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
                </div>
            </div>
        </div>
    );
};