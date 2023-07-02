import React from 'react';

export default function WithdrawalComponent(props) {
    return (
        <>
        <div className='sub-title'>
            <h2>회원탈퇴</h2>
        </div>
        <div className="password-content">
            <form action="">
                <div className="form-box">
                    <label htmlFor="">비밀번호<input type="password" placeholder='비밀번호 입력해 주세요.'/></label>
                </div>
                <div className="btn-box">
                    <button>확인</button>
                </div>
            </form>  
            <div className="caution">
                <h3><span><img src="./img/mypage/text_icon_notice.png" alt="" /></span>비밀번호 재확인</h3>
                <p>·고객님의 소중한 개인정보를 보호하기 위해 비밀번호를 다시 한번 확인합니다.</p>
                <p>·비밀번호 입력 시 타인에게 노출되지 않도록 주의해 주시기 바랍니다.</p>
            </div>          
        </div>
        </>
    );
}

