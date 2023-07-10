import React from 'react';
import axios from 'axios';

export default function DetailComponent({notice, islogin, item, setMenu, index}) {

    const [currentIndex, setCurrentIndex] = React.useState(index);
    const [currentItem, setCurrentItem] = React.useState(item);
    const [prevPage, setPrevPage] = React.useState(null);
    const [nextPage, setNextPage] = React.useState(null);

    
    
    //이전페이지, 다음페이지
    React.useEffect(() => {
        const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : null;
        const nextIndex =
          currentIndex + 1 < notice.length ? currentIndex + 1 : null;
        setPrevPage(prevIndex !== null ? notice[prevIndex] : null);
        setNextPage(nextIndex !== null ? notice[nextIndex] : null);
    }, [currentIndex, notice]);

    
    const onClickPrev = (e) => {
        e.preventDefault();
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
          setCurrentIndex(prevIndex);
          setCurrentItem(notice[prevIndex]);
        }
      };

      const onClickNext = (e) => {
        e.preventDefault();
        const nextIndex = currentIndex + 1;
        if (nextIndex < notice.length) {
          setCurrentIndex(nextIndex);
          setCurrentItem(notice[nextIndex]);
        }
      };


   

    //페이지 로딩시 스크롤값 변경
    React.useEffect(()=>{
        window.scrollTo(0, 200);
    },[])

    const onClickDel =(e)=>{
        e.preventDefault();
        // axios() 
        axios({
            url:`/bbs/deleteAction.jsp?bbsId=${item.번호}`,
            method: 'POST',
            data:{},
            params: {
                "subject": item.제목,
                "content": item.내용
            }
            
        })
        .then((res)=>{
    
            
            
            console.log( res );
            console.log( res.data );

            window.location.pathname='/SERVICE';
            // setMenu('글보기');

        })
        .catch((err)=>{
            console.log(`AXIOS 실패! ${err} `)
        });
    }
    
    return (
        <>
        
        <div className='sub-title'>
            <h2>공지사항</h2>
        </div>
                <div className="detail-content">
                    <div className="content-head">
                        <ul>
                            <li>{currentItem.제목}</li>
                            <li>{currentItem.작성자}<i>|</i>{currentItem.작성일.substring(0, 10).replace(/-/g, '.')}</li>
                        </ul>
                    </div>
                    <div className="content-main">
                        <p id='itema'>{currentItem.내용}</p>
                    </div>
                    <div className="content-footer">
                        <div className="row row1">
                            <ul>
                                <li>
                                {prevPage ? (
                                    <a onClick={onClickPrev} href="!#">{prevPage.제목}</a>
                                ) : (
                                    "이전페이지 없음"
                                )}
                                </li>
                                <li>{prevPage ? prevPage.작성일.substring(0, 10).replace(/-/g, '.') : ""}</li>
                            </ul>
                        </div>
                        <div className="row row2">
                            <ul>
                                <li>
                                {nextPage ? (
                                    <a onClick={onClickNext} href="!#">{nextPage.제목}</a>
                                ) : (
                                    "다음페이지 없음"
                                )}
                                </li>
                                <li>{nextPage ? nextPage.작성일.substring(0, 10).replace(/-/g, '.') : ""}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="btn-box">
                    {islogin && 
                        <div className="left-btn">
                            <button onClick={()=>setMenu('수정')}>수정</button>
                            <button onClick={onClickDel}>삭제</button>  
                        </div>
                    }
                        <div className="right-btn">
                            <button onClick={()=>setMenu('공지사항')}>목록</button> 
                        </div>
                        

                                                                     
                    </div>
                </div>
        
            
        
        
        </>
    );
}

