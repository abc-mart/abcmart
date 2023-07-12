import React from 'react';
import './scss/login.scss';

export default function LoginComponent(){

    const [member, setMember] = React.useState(false);

    const onClickMember=(e)=>{
        e.preventDefault();
        setMember(true);
    }

    const onClickNotMember=(e)=>{
        e.preventDefault();
        setMember(false);
    }

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
                                        <a href="!#" onClick={onClickMember} className={member?'on':''}>회원 로그인</a>
                                        <a href="!#" onClick={onClickNotMember} className={member?'':'on'}>비회원 주문조회</a>
                                    </div>

                                </div>
                                <div className="box2">
                                    <form action="#" method='POST'>
                                        <div className='box21'>
                                            <div className='box211'><input type="text" name='id' placeholder='아이디를 입력해 주세요' /></div>
                                            <div className='box212'><input type="text" name='pw' placeholder='비밀번호를 입력해 주세요' /></div>
                                            <div className="box213">	
                                                <input id='saveId' type="checkbox" />	
                                                <label htmlFor="saveId">아이디 저장</label>							                                                                
								            </div>
                                        </div>
                                        <div className='box22'>
                                            <button type='submit'>로그인</button>
                                        </div>
                                        <div className="box23">
                                            <a href="!#"> 아이디 찾기</a>
                                            <i>·</i>
                                            <a href="!#">비밀번호 찾기</a>
                                            <i>·</i>
                                            <a href="!#">회원가입</a>
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