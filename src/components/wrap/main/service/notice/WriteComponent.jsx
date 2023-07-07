import React from 'react';

export default function WriteComponent(props) {

    const [image1, setImage1] = React.useState('');
    const [image2, setImage2] = React.useState('');
    const [image3, setImage3] = React.useState('');

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
            <form action="">
                <ul>
                    <li>
                        <label htmlFor="">
                            <span>제목</span>
                            <input type="text" placeholder='제목을 입력해주세요.'/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="">
                            <span>내용</span>
                            <textarea name="" id="" placeholder='내용을 입력해주세요.'></textarea>
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
                            {image1 && 
                            <div className='img-add'>
                                <label htmlFor="fileAdd2">
                                    <input type="file" id='fileAdd2' accept="image/*" onChange={(e)=>onChangeImg(e,setImage2)}/>
                                    <figure>
                                        {image2 &&                                          
                                                <img src={image2} alt="" />                                             
                                        }
                                    </figure>
                                </label>
                                {image2 && <span onClick={()=>onClickDel(setImage2)}></span>}
                            </div>
                            }
                            {image2 && 
                            <div className='img-add'>
                                <label htmlFor="fileAdd3">
                                    <input type="file" id='fileAdd3' accept="image/*" onChange={(e)=>onChangeImg(e,setImage3)}/>
                                    <figure>
                                        {image3 &&
                                                <img src={image3} alt="" /> 
                                            
                                        }
                                    </figure>
                                </label>
                                {image3 && <span onClick={()=>onClickDel(setImage3)}></span>}
                            </div>
                            }
                        </div>
                        
                    </li>
                </ul>
                <div className="btn-box">
                    <button>취소</button>
                    <button>등록</button>
                </div>
            </form>
        </div>
        </>
    );
}

