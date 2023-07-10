import React from 'react';
import axios from 'axios';

export default function UpdateComponent({islogin, item, setMenu, setItem}) {
    

    // 수정시 입력
    const onChangeSubject=(e)=>{
        setItem((prevItem) => ({
            ...prevItem,
            제목: e.target.value
        }));
    };

    
    // 수정시 입력
    const onChangeContents=(e)=>{
        setItem((prevItem) => ({
            ...prevItem,
            내용: e.target.value
        }));
        
    };

    const onSubmitWrite=(e)=>{
        e.preventDefault();
        // axios() 
        axios({
            url:`/bbs/updateAction.jsp?bbsId=${item.번호}`,
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

            // window.location.pathname='/SERVICE';
            setMenu('글보기');

        })
        .catch((err)=>{
            console.log(`AXIOS 실패! ${err} `)
        });

    }

    //이미지
    const [image1, setImage1] = React.useState('');

    const onChangeImg = (e, setImage) => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        setImage(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };

    const onClickDel=(setImage)=>{
        setImage('');
    }

    
    React.useEffect(()=>{
        window.scrollTo(0, 200);
    },[])
   
    return (        
        <>
        <div className='sub-title'>
            <h2>공지사항</h2>
        </div>
        <div className="write-content">
            <form onSubmit={onSubmitWrite}>
                <ul>
                    <li>
                        <label htmlFor="subject">
                            <span>제목</span>
                            <input 
                                onChange={onChangeSubject}
                                type="text" 
                                name='subject' 
                                id='subject' 
                                value={item.제목}
                                placeholder='제목을 입력해 주세요' 
                                />
                        </label>
                    </li>
                    <li>
                        <label htmlFor="content">
                            <span>내용</span>
                            <textarea 
                                    onChange={onChangeContents}
                                    name="content" 
                                    id="content"  
                                    placeholder='내용을 입력해 주세요' 
                                    value={item.내용}
                                    ></textarea>
                        </label>
                    </li>
                    <li>
                        <div className='file-add'>
                            <span>파일첨부</span>
                            <div className='img-add'>
                                <label htmlFor="fileAdd1">
                                    <input type="file" id='fileAdd1' accept="image/*" onChange={(e)=>onChangeImg(e,setImage1)}/>
                                    <figure>
                                        {image1 &&
                                           
                                                <img src={image1} alt="" /> 
                                          
                                        }
                                    </figure>
                                
                                </label>
                                {image1 && <span onClick={()=>onClickDel(setImage1)}></span>}
                            </div>
                        </div>
                        
                    </li>
                </ul>
                <div className="btn-box">
                    <button onClick={()=>setMenu('공지사항')}>취소</button>
                    <button type='submit'>수정</button>
                </div>
            </form>
        </div>
        </>
    );
}

