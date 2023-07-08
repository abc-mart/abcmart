import React from 'react';
import axios from 'axios';

export default function NoticeComponent({setMenu}) {
    const [islogin, setIslogin] =React.useState(true);

    


    const onClickWrite =(value)=>{
        setMenu(value);
    }

    const [state, setState] = React.useState({
        notice: []
    });
    React.useEffect(()=>{
        axios({
            url:'./data/service/notice.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    notice:res.data.notice
                })
            }
        })
        .catch()
    },[])
    
    const [sortNotice, setSrotNotice]=React.useState(state.notice);

    React.useEffect(()=>{
        let arrNotice = [...state.notice];
        if(state.notice){
            arrNotice.sort((a, b) => b.번호 - a.번호);
        }

        setSrotNotice(arrNotice);
    },[])

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
                    {
                        sortNotice.map((item,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{item.번호}</td>
                                    <td>{item.제목}</td>
                                    <td>{item.작성일}</td>
                                </tr>  
                            )
                        })
                    }
                                   
                </tbody>    
            </table>
            {islogin && <button onClick={()=>onClickWrite('글쓰기')}>글쓰기</button>}
        </div>
        </>
    );
}

