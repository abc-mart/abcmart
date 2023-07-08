import React from 'react';

export default function DetailComponent({sortNotice, item, setMenu, index}) {

    const [currentIndex, setCurrentIndex] = React.useState(index);
    const [currentItem, setCurrentItem] = React.useState(item);
    const [prevPage, setPrevPage] = React.useState(null);
    const [nextPage, setNextPage] = React.useState(null);

    
    

    React.useEffect(() => {
        const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : null;
        const nextIndex =
          currentIndex + 1 < sortNotice.length ? currentIndex + 1 : null;
        setPrevPage(prevIndex !== null ? sortNotice[prevIndex] : null);
        setNextPage(nextIndex !== null ? sortNotice[nextIndex] : null);
    }, [currentIndex, sortNotice]);

    const onClickPrev = (e) => {
        e.preventDefault();
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
          setCurrentIndex(prevIndex);
          setCurrentItem(sortNotice[prevIndex]);
        }
      };

      const onClickNext = (e) => {
        e.preventDefault();
        const nextIndex = currentIndex + 1;
        if (nextIndex < sortNotice.length) {
          setCurrentIndex(nextIndex);
          setCurrentItem(sortNotice[nextIndex]);
        }
      };


   

    //페이지 로딩시 스크롤값 변경
    React.useEffect(()=>{
        window.scrollTo(0, 200);
    },[])
    
    return (
        <>
        
        <div className='sub-title'>
            <h2>공지사항</h2>
        </div>
                <div className="detail-content">
                    <div className="content-head">
                        <ul>
                            <li>{currentItem.제목}</li>
                            <li>{currentItem.작성일}</li>
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
                                <li>{prevPage ? prevPage.작성일 : ""}</li>
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
                                <li>{nextPage ? nextPage.작성일 : ""}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="btn-box">
                        <button onClick={()=>setMenu('공지사항')}>목록</button>
                        <button>수정</button>
                    </div>
                </div>
        
            
        
        
        </>
    );
}

