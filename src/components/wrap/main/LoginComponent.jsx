import React from 'react';
import './scss/login.scss';
import $ from 'jquery';

export default function LoginComponent(){

    const [state, setState] = React.useState({
        id:"",
        pw:""
    })

    const onChangeId=(e)=>{
        e.preventDefault();
        const { value } = e.target;
        let id = '';
        setState({
            ...state,
            id: value
        })
    }
    const onChangePw=(e)=>{
        e.preventDefault();
        const { value } = e.target;
        let pw = '';
        setState({
            ...state,
            pw: value
        })
    }

     // 로그인 이벤트
     const onSubmitSignin=(e)=>{
        e.preventDefault();
        const formData = {
            "id": state.id,
            "pw": state.pw
        }
        console.log(formData);
        $.ajax({
            url: '/JSP/abc/signin_action.jsp',
            type: 'POST',
            data: formData,
            success(res){
                console.log('AJAX 성공');
                console.log(res);
                window.location.pathname = '/INTRO';
            },
            error(err){
                console.log('AJAX 실패 : ' + err);
            }
        })
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
                                <div className="box2">
                                    <form method='POST'>
                                        <div className='box21'>
                                            <div className='box211'><input type="text" onChange={onChangeId} value={state.id} name='id' placeholder='아이디' /></div>
                                            <div className='box212'><input type="text" onChange={onChangePw} value={state.pw} name='pw' placeholder='비밀번호' /></div>
                                            <div className="box213">
									            <input className="checkboxSaveID" type="checkbox"/>
									            <label for="chkSaveID">아이디 저장</label>
								            </div>
                                        </div>
                                        <div className='box22'>
                                            <button type="submit" onClick={onSubmitSignin}>로그인</button>
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