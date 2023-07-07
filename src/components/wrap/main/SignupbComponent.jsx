import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./scss/signupb.scss";

export default function SignupbComponent(){
    const [state, setState] = useState({
        nm: "",
        isNmError: false,
        isNmMsg: "",
        id: "",
        isIdError: false,
        isIdMsg: "",
        pw: "",
        isPw1Error: false,
        isPw1Msg: "",
        isPw2Error: false,
        isPw2Msg: "",
        em: "",
        isEmError: false,
        isEmMsg: "",
        ph: "",
        isPhError: false,
        isPhMsg: "",
        ia: "",
        isIaError: false,
        isIaMsg: ""
    });
    //1. 이름 입력상자 온체인지 이벤트
    const onChangeNm =(e)=>{
        const { value } = e.target;
        let nm = '';
        let isNmError = false;
        let isNmMsg = '';

        const regExp = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?\s]/g; //특수문자 + 공백
        nm = value.replace(regExp, '');

        if(value === ""){
            isNmError = true;
            isNmMsg = "이름 입력할까요?";
        }else{
            isNmError = false;
            isNmMsg = "";
        }
        setState({
            ...state,
            isNmError: isNmError,
            isNmMsg: isNmMsg,
            nm: nm
        });
    };

    const onChangeId =(e)=>{
        const { value } = e.target;
        let id = '';
        let isIdError = false;
        let isIdMsg = '';

        const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?\s]/g;
        const regExp2 = /^(.){3,20}$/g;
        const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const regExp4 = /[A-Za-z]+[0-9]*/g;
        const regExp5 = /\s/g;
        id = value.replace(regExp1, '');
        id = value.replace(regExp3, '');

        if(regExp1.test(value)===true || regExp2.test(value)===false  || regExp3.test(value)===true || regExp4.test(value)===false  ||  regExp5.test(value)===true ){
            isIdError = true;
            isIdMsg = '영문으로 시작하는 6~20자 영문(소문자), 숫자만 사용 가능합니다.';
        }
        else{
            isIdError = false;
            isIdMsg = '';
        }
        setState({
            ...state,
            isIdError : isIdError,
            isIdMsg: isIdMsg,
            id: id
        })
    }
    const onChangePw =(e)=>{

    }
    const onChangePc =(e)=>{

    }
    const onChangeEm =(e)=>{

    }
    const onChangePh =(e)=>{

    }
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
                                                <li><div className="colTitle">이름<i></i></div><input type="text" id="Nm" name='nm' onChange={onChangeNm} value={state.nm} placeholder='한글, 영문, 숫자만 입력해주세요'/></li>
                                                <p className={state.isNmError?'on':''}>에러메세지</p>
                                                <li><div className="colTitle">아이디<i></i></div><input type="text" id="Id" name='id' onChange={onChangeId} value={state.id} placeholder='아이디를 입력해주세요 (영문, 숫자 사용 3~20자)'/></li>
                                                <li><div className="colTitle">비밀번호<i></i></div><input type="text" id="Pw" name='pw' onChange={onChangePw} value={state.pw} placeholder='비밀번호를 입력해 주세요. (영문, 숫자, 특수문자 2개 이상 10~20자)'/></li>
                                                <li><div className="colTitle">비밀번호 확인<i></i></div><input type="text" id="Pc" name='pc' onChange={onChangePc} value={state.pc} placeholder='비밀번호를 재입력해 주세요.'/></li>
                                                <li><div className="colTitle">이메일<i></i></div><input type="text" id="Em" name='em' onChange={onChangeEm} value={state.em} placeholder='이메일 주소를 입력해 주세요.'/></li>
                                                <li><div className="colTitle">휴대폰 번호</div><input type="text" id="Ph" name='ph' onChange={onChangePh} value={state.ph} placeholder='휴대폰 번호를 ‘-’ 없이 입력해주세요.'/></li>
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