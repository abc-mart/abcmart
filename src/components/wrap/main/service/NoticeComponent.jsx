import React from 'react';

export default function NoticeComponent({setMenu}) {
    const [islogin, setIslogin] =React.useState(true);


    const onClickWrite =(value)=>{
        setMenu(value);
    }
    return (
        <>
        <div className='sub-title'>
            <h2>공지사항</h2>
        </div>
        <div className="notice-content">
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td>59</td>
                        <td>개인정보처리방침 개정 안내</td>
                        <td>2023.06.22</td>
                    </tr>                    
                    <tr>
                        <td>59</td>
                        <td>크록스 제품 발송 안내</td>
                        <td>2023.06.12</td>
                    </tr>                    
                    <tr>
                        <td>59</td>
                        <td>크록스 제품 발송 안내</td>
                        <td>2023.06.12</td>
                    </tr>                    
                    <tr>
                        <td>59</td>
                        <td>크록스 제품 발송 안내</td>
                        <td>2023.06.12</td>
                    </tr>                    
                    <tr>
                        <td>59</td>
                        <td>크록스 제품 발송 안내</td>
                        <td>2023.06.12</td>
                    </tr>                    
                    <tr>
                        <td>59</td>
                        <td>크록스 제품 발송 안내</td>
                        <td>2023.06.12</td>
                    </tr>                    
                    <tr>
                        <td>59</td>
                        <td>크록스 제품 발송 안내</td>
                        <td>2023.06.12</td>
                    </tr>                    
                    <tr>
                        <td>59</td>
                        <td>크록스 제품 발송 안내</td>
                        <td>2023.06.12</td>
                    </tr> 
                </tbody>    
            </table>
            {islogin && <button onClick={()=>onClickWrite('글쓰기')}>글쓰기</button>}
        </div>
        </>
    );
}

