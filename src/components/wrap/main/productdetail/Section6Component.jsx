import React from 'react';
import '../scss/productdetail.scss';

export default function Section6Component(){
    return (
        <section id='section6'>
            <div className="container">
                <div className="gap">
                    <div className="sangpum-button-box">
                        <a href="!#">상품정보</a>
                        <a href="!#">상품후기 (2)</a>
                        <a href="!#" className='on'>상품 Q&A (0)</a>
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
                    <div className='delivery'><span>배송안내</span><img src="./img/detail/fold_icon_arrow.png" alt="" />
                    <p>
                        배송 안내
                        배송비
                        2만원 미만 구매 시 2,500원
                        2만원 이상 구매 시 전액 무료(제주도 및 기타 도선료 추가 지역 포함)
                        평균 배송일
                        평일 4시 이전 주문 당일 출고됩니다. (물류창고 발송에 한함)
                        다만, 물류창고 상황에 따라 당일 출고 불가 할 수 있습니다.
                        배송 정보 확인까지 송장 등록 후 평균 2일 소요될 수 있습니다. (주말 및 공휴일 제외)
                        택배사의 사정에 따라 배송은 다소 지연될 수 있습니다. (배송일정 문의 : 한진택배 1588-0011)
                        오프라인 매장 발송은 출고까지 2~5 영업일 더 소요될 수 있습니다.
                        동일 주문번호 1족 이상 구매 시 재고 수량에 따라 출고처 및 배송 일정이 상품별 상이할 수 있습니다.
                        교환/반품/AS
                        ABC-MART는 온라인/오프라인 매장 구분 없이 교환/반품/AS접수가 가능합니다.
                        ※ 단, 의류 상품은 그랜드스테이지 매장에서만 교환/반품/AS접수 가능합니다.
                        교환은 사이즈 교환만 가능합니다.
                        매장에 방문하여 접수하시면 택배비 무료입니다. (단, 구매 시 선결제하신 배송비는 환불되지 않습니다.)
                        매장에 방문하여 접수하실 경우 구매내역서를 지참하여 주시기 바랍니다.
                        매장에서 반품 접수를 하신 경우 환불은 온라인 담당자 확인 후 처리됩니다. (확인 기간 2-3일 소요/결제하신 결제수단으로 환불)
                        매장에 방문하여 반품/교환 접수 시 단품 기준 10개 미만 상품만 접수 가능합니다.
                        (대량 반품/교환은 온라인 사이트를 통해서 접수해주시기 바랍니다. 단순 변심일 경우 택배비 고객 부담)
                        대량 교환/반품 택배 접수의 경우 6개 미만 합포장 가능하며 합포장의 경우 동일 주문번호 내 상품만 가능합니다. (입점 제품은 별도 접수 필요)
                        브랜드 박스 훼손, 타상품 입고, 주문번호 확인 불가 등 처리 불가 시 안내 없이 반송 처리 될 수 있습니다.     
                    </p>
                    </div>
                    <div className='change'><span>교환/반품 안내</span><img src="./img/detail/fold_icon_arrow.png" alt="" />
                    <p>
                        상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품 택배비 고객부담으로 왕복택배비가 발생합니다.
                        (전자상거래 등에서의 소비자보호에 관한 법률 제17조(청약 철회등)9항에 의거 소비자의 사정에 의한 청약 철회 시 택배비는 소비자 부담입니다.)
                        제품을 받으신 날부터 7일 이내(상품불량인 경우 30일)에 접수해주시기 바랍니다.
                        접수 시 왕복 택배비가 부과됩니다. (단, 상품 불량, 오배송의 경우 택배비를 환불해드립니다.)
                        접수 후 14일 이내에 상품이 반품지로 도착하지 않을 경우 접수가 취소됩니다.(배송 지연 제외)
                        브랜드 박스 훼손, 타상품 입고, 주문번호 확인 불가 등 처리 불가 시 안내 없이 반송 처리 될 수 있습니다.       
                        교환/반품(환불)이 불가능한 경우

                        신발/의류를 외부에서 착용한 경우
                        제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG, 보증서, 상품 부자재가 제거 혹은 분실된 경우
                        밀봉포장을 개봉했거나 내부 포장재를 훼손 또는 분실한 경우(단, 제품확인을 위한 개봉 제외)
                        브랜드 박스 분실/훼손된 경우
                        고객 부주의로 상품이 훼손, 변경된 경우
                        매장 방문 교환 시 추가 교환/반품 불가 (온라인/오프라인 동일)
                        교환/반품(환불) 시 박스 포장 예

                        브랜드 박스(신발 박스)의 훼손이 없도록 택배 박스 및 타 박스로 포장하여 발송해주시기 바랍니다.
                    </p>
                    </div>
                    <div className='AS'><span>A/S 안내</span><img src="./img/detail/fold_icon_arrow.png" alt="" />
                    <p>
                        오프라인 매장에서도 A/S 접수 가능합니다. (매장 방문 접수 시 택배비 무료, 입점 업체 상품 제외 ABC마트 온라인 물류센터, 매장 상품에 한함)
                        외부 착화 후 발견된 상품 이상에 대한 심의/수선 요청은 ‘마이페이지 &gt; 쇼핑내역 &gt; AS 신청’ 또는 고객센터를 통해 접수해주시기 바랍니다. (비회원 구매 건 택배 접수 불가)
                        접수 없이 상품을 ABC-MART로 보내실 경우 확인이 어려워 반송되거나 처리가 늦어질 수 있습니다.
                        접수 완료 후 15일 이내 상품 도착하지 않을 경우 접수가 취소됩니다.
                        매장에서 구매하신 상품의 처리절차를 ‘마이페이지 &gt; 쇼핑내역 &gt; AS 신청’ 에서 확인 할 수 있습니다. (멤버십 회원에 한함)
                        AS/심의 불가 항목으로 접수 , 주문번호 확인 불가, 기타 불가 사항 등으로 확인 시 별도 안내 없이 반송 될 수 있습니다.
                        AS 불가 항목
                            
                        개인의 착화 습관으로 발생된 힐컵 변형은 A/S, 심의 불가합니다.
                        신발 세탁으로 생긴 손상은 A/S, 심의 불가합니다.
                        양말 소재로 생긴 힐컵 주변 보풀 현상은 A/S 심의 불가합니다.
                        에어 손상의 경우 A/S 불가합니다.
                        착화 후 생긴 가죽 소재의 스크래치 경우 가죽의 특성상 발생하는 자연현상으로 A/S, 심의 불가합니다.
                        코르크 샌들 아웃솔(밑창) 교체 및 풋베드 크리닝 가능합니다.
                        샌들 부품(밴드, 벨크로, 장식) 일부 수선 가능합니다. 스트랩이 외력에 의해 끊어질 경우 A/S, 심의 불가 합니다.
                        상품에 따라 아웃솔 전체 / 보조굽 교체 가능합니다.
                        수선 AS
                            
                        수선을 원하는 내용을 자세하게(사진 첨부 가능) 기재해주시면 처리 시 도움이 될 수 있습니다.
                        수선 접수 시 왕복 택배비(5000원)가 부과됩니다.
                        지정택배(한진택배) 외 타택배 이용 시 추가로 발생되는 금액은 고객님께서 부담해주셔야 합니다.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
