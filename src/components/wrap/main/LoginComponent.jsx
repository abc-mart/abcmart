import React from 'react';
import './scss/login.scss';

export default function LoginComponent(){
    return (
        <div id='login'>
            <div id="wrap">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="title">
                                <h1>로그인</h1>
                            </div>
                            <div className="substance">
                                <div className="box1">
                                    <div className="box11">
                                        <p>회원 로그인</p>
                                    </div>
                                    <div className="box12">
                                        <p>비회원 주문조회</p>
                                    </div>
                                </div>
                                <div className="box2">
                                    <form action="#" method='POST'>
                                        <div className='box21'>
                                            <div className='box211'><input type="text" name='id' placeholder='아이디를 입력해 주세요' /></div>
                                            <div className='box212'><input type="text" name='pw' placeholder='비밀번호를 입력해 주세요' /></div>
                                            <div className="box213">
									            <input className="checkboxSaveID" type="checkbox"/>
									            <label for="chkSaveID">아이디 저장</label>
								            </div>
                                        </div>
                                        <div className='box22'>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};