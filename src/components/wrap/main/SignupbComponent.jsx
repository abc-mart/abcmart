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
                                        <div className="box11">약관동의</div>
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
                                        <div className="box21">회원정보</div>
                                        <div className="box22">
                                            <ul>
                                                <li><div className="colTitle"></div><input type="text" name='nm'/></li>
                                                <li><div className="colTitle"></div><input type="text" name='id'/></li>
                                                <li><div className="colTitle"></div><input type="text" name='pw'/></li>
                                                <li><div className="colTitle"></div><input type="text" name='pc'/></li>
                                                <li><div className="colTitle"></div><input type="text" name='em'/></li>
                                                <li><div className="colTitle"></div><input type="text" name='ph'/></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box3">

                                    </div>
                                    <div className="box4">
                                        <button type='submit'>회원가입</button>
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