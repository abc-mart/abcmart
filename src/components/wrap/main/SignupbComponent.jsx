import React from 'react';
import './scss/signupb.scss';

export default function SignupbComponent(){
    return(
        <div id="signupb">
            <div id="wrap">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="title">
                                <h1>온라인 회원가입</h1>
                            </div>
                            <div className="substance">
                                <form action="" method='post'>
                                    <div className="box1">
                                        <div className="box11"><h4>약관동의</h4></div>
                                        <div className="box12">
                                            <ul>
                                                <li><input type="checkbox"/>전체 약관에 동의합니다.</li>
                                                <li><input type="checkbox"/><span>[필수] </span>사이트 이용약관</li>
                                                <li><input type="checkbox"/><span>[필수] </span>전자상거래 이용약관</li>
                                                <li><input type="checkbox"/><span>[필수] </span>개인정보 수집 및 이용 동의</li>
                                                <li><input type="checkbox"/><span>[필수] </span>만 14세 이상입니다.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box2">
                                        <div className="box21"><h4>회원정보</h4></div>
                                        <div className="box22">
                                            <ul>
                                                <li><div className="colTitle">이름<i></i></div><input type="text" name='nm' placeholder='한글, 영문, 숫자만 입력해주세요'/></li>
                                                <li><div className="colTitle">아이디<i></i></div><input type="text" name='id' placeholder='아이디를 입력해주세요 (영문, 숫자 사용 3~20자)'/></li>
                                                <li><div className="colTitle">비밀번호<i></i></div><input type="text" name='pw' placeholder='비밀번호를 입력해 주세요. (영문, 숫자, 특수문자 2개 이상 10~20자)'/></li>
                                                <li><div className="colTitle">비밀번호 확인<i></i></div><input type="text" name='pc' placeholder='비밀번호를 재입력해 주세요.'/></li>
                                                <li><div className="colTitle">이메일<i></i></div><input type="text" name='em' placeholder='이메일 주소를 입력해 주세요.'/></li>
                                                <li><div className="colTitle">휴대폰 번호</div><input type="text" name='ph' placeholder='휴대폰 번호를 ‘-’ 없이 입력해주세요.'/></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box3">

                                    </div>
                                    <div className="box4">
                                        <div className="btn-box">
                                            <button>취소</button>
                                            <button type='submit'>회원가입</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};