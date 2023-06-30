import React from 'react';

export default function Section6Component(){
    return (
        <section id='section6'>
            <div className="container">
                <div className="gap">
                    <div className="sangpum-button-box">
                        <a href="!#" className='on'>상품정보</a>
                        <a href="!#">상품후기 (2)</a>
                        <a href="!#">상품 Q&A (0)</a>
                    </div>
                    <div className="explain">
                        <p><i>·</i>단순 상품비방, 상업적인 내용, 미풍양속 위반, 게시판의 성격에 맞지 않는 글은 통보 없이 삭제될 수 있습니다.</p>                        
                        <p><i>·</i>오프라인 매장 재고현황 문의는 ‘<span>전국오프라인매장</span>’ 정보를 참고하시어 해당 매장으로 문의하시면 좀 더 정확한 확인이 가능합니다.</p>                        
                        <p><i>·</i>주문/배송/반품 및 AS 등 기타 문의는 <span>1:1 상담문의(마이페이지&gt;쇼핑수첩&gt;나의상담)</span>에 남겨주시기 바랍니다.</p>                        
                        <p><i></i>(상품 자체에 대한 문의가 아닌 주문/배송/반품 및 AS 등의 기타문의를 작성하실 경우 나의상담 메뉴로 글이 이동될 수 있습니다.)</p>                        
                    </div>
                    <div className="qna">
                        <ul>
                            <li className='qna-title'>재입고문의</li>
                            <li className='qna-nick'>k***8</li>
                            <li className='qna-date'>2023.05.25</li>
                            <li className='qna-state'>답변완료</li>
                        </ul>
                        <div className='qna-button'>
                            <div className="pagenation">
                                <a href="!#">1</a>
                            </div>
                            <div className="button-box">
                                <button>자주하는 질문 보기</button>
                                <button>Q&A 작성</button>
                            </div>
                        </div>
                    </div>
                    <div className='delivery'><span>배송안내</span><img src="./img/detail/fold_icon_arrow.png" alt="" /></div>
                    <div className='change'><span>교환/반품 안내</span><img src="./img/detail/fold_icon_arrow.png" alt="" /></div>
                    <div className='AS'><span>A/S 안내</span><img src="./img/detail/fold_icon_arrow.png" alt="" /></div>
                </div>
            </div>
        </section>
    );
};

