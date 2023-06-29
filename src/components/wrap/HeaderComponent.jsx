import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

export default function HeaderComponent({setSelectButton}){
    const [isShow, setIsShow] = React.useState('');
    const onMouseEnterShow=(value)=>{
        setIsShow(value);
    }
    const onMouseLeaveShow=(e)=>{
        setIsShow('');
    }

    const onClickSelect=(value)=>{
        setSelectButton(value);
        setIsShow('');
    }


    const [state, setState] = React.useState({
        카테고리A: [],
        카테고리B: [],
        카테고리C: [],
        카테고리D: [],
        카테고리E: [],
        카테고리F: [],
        카테고리G: [],
        카테고리H: [],
        카테고리I: [],
        카테고리J: [],
        카테고리K: [],
        카테고리L: [],
        카테고리M: [],
        카테고리N: [],
        카테고리O: [],
        카테고리P: [],
        카테고리Q: [],
        카테고리R: [],
        카테고리S: [],
        카테고리T: [],
        카테고리U: [],
        카테고리V: [],
        카테고리W: [],
        카테고리X: [],
        카테고리Y: [],
        카테고리Z: [],
        카테고리123: [],
    });
    React.useEffect(()=>{
        axios({
            url:'./data/brand/category.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    카테고리A:res.data.category_a,
                    카테고리B:res.data.category_b,
                    카테고리C:res.data.category_c,
                    카테고리D:res.data.category_d,
                    카테고리E:res.data.category_e,
                    카테고리F:res.data.category_f,
                    카테고리G:res.data.category_g,
                    카테고리H:res.data.category_h,
                    카테고리I:res.data.category_i,
                    카테고리J:res.data.category_j,
                    카테고리K:res.data.category_k,
                    카테고리L:res.data.category_l,
                    카테고리M:res.data.category_m,
                    카테고리N:res.data.category_n,
                    카테고리O:res.data.category_o,
                    카테고리P:res.data.category_p,
                    카테고리Q:res.data.category_q,
                    카테고리R:res.data.category_r,
                    카테고리S:res.data.category_s,
                    카테고리T:res.data.category_t,
                    카테고리U:res.data.category_u,
                    카테고리V:res.data.category_v,
                    카테고리W:res.data.category_w,
                    카테고리X:res.data.category_x,
                    카테고리Y:res.data.category_y,
                    카테고리Z:res.data.category_z,
                    카테고리123:res.data.category_123,
                })
            }
        })
        .catch()
    },[])
    
    
    
    return (
        <>
        <header id="header">
            <div className="wrap">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="box1">
                                <div className="box1_1">
                                    <Link to="/INTRO">
                                        <img src="./img/headereventfooter/1658299296317.png" alt=''/>
                                    </Link>
                                </div>
                                <div className="box1_2">
                                    <div className="search_box">
                                        <input type="text" placeholder="아디다스 키즈 페스티벌 ★ 최대 50% 할인에 10% 추가 할인"/>
                                        <a href="!#" className="a1"><img src="./img/headereventfooter/comm_header_icon_smart.png" alt=''/></a>
                                        <a href="!#" className="a2"><img src="./img/headereventfooter/comm_header_icon_search.png" alt=''/></a>
                                    </div>
                                </div>
                                <div className="box1_3">
                                    <ul>
                                        <a href="!#" className="a1">
                                            <li className="box3_ul_li1">
                                                <figure><img src="./img/headereventfooter/comm_header_util_link_abc_mart.png" alt=''/></figure>
                                                <div className="h6">LOGIN</div>
                                            </li>
                                        </a>
                                        <a href="!#" className="a2">
                                            <li className="box3_ul_li2">
                                                <figure><img src="./img/headereventfooter/comm_header_util_link_abc_mart.png" alt=''/></figure>
                                                <div className="h6">JOIN</div>
                                            </li>
                                        </a>
                                        <a href="!#" className="a3">
                                            <li className="box3_ul_li3">
                                                <figure><img src="./img/headereventfooter/comm_header_util_link_abc_mart.png" alt=''/></figure>
                                                <div className="h6">CART</div>
                                            </li>
                                        </a>
                                        <a href="!#" className="a4">
                                            <li className="box3_ul_li4">
                                                <figure><img src="./img/headereventfooter/comm_header_util_link_abc_mart_store.png" alt=''/></figure>
                                                <div className="h6">STORE</div>
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                            <div className="box2">
                                <div className="box2-container">
                                <div className="box2_1">
                                    <ul>
                                        <li className="BRAND"><a href="!#"  onMouseEnter={()=>onMouseEnterShow('BRAND')}>BRAND</a></li>
                                        <li className="MEN"><a href="!#" onMouseEnter={()=>onMouseEnterShow('MEN')}>MEN</a></li>
                                        <li className="WOMEN"><a href="!#" onMouseEnter={()=>onMouseEnterShow('WOMEN')}>WOMEN</a></li>
                                        <li className="KIDS"><a href="!#" onMouseEnter={()=>onMouseEnterShow('KIDS')}>KIDS</a></li>
                                        <li className="SALE"><a href="!#" onMouseEnter={()=>onMouseEnterShow('SALE')}>SALE</a></li>
                                    </ul>
                                    <ul  onMouseLeave={onMouseLeaveShow}>
                                        <li className={`hidden1 ${isShow==='BRAND'?' on':''}`} >
                                            <div className="hidden1-container">
                                                <div className="left">
                                                    <div className="left-head">                                                        
                                                        <div className="search-box">
                                                            <input type="text" placeholder='브랜드를 검색하세요'/>
                                                            <span><img src="./img/brand/comm_gnb_search_icon.png" alt="" /></span>
                                                        </div>
                                                        <div className="btn-box">
                                                            <button className='on'>ABC, 123</button>
                                                            <button>ㄱㄴㄷ</button>
                                                        </div>
                                                    </div>
                                                    <div className="left-content">                                                        
                                                        <div className="category A">
                                                            <h2>A</h2>                                                            
                                                            <dl> 
                                                                {
                                                                    state.카테고리A.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                                  
                                                            </dl>      
                                                        </div>
                                                        <div className="category B">
                                                            <h2>B</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리B.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category C">
                                                            <h2>C</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리C.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category D">
                                                            <h2>D</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리D.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category E">
                                                            <h2>E</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리E.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category F">
                                                            <h2>F</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리F.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category G">
                                                            <h2>G</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리G.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category H">
                                                            <h2>H</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리H.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category I">
                                                            <h2>I</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리I.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category J">
                                                            <h2>J</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리J.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category K">
                                                            <h2>K</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리K.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category L">
                                                            <h2>L</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리L.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category M">
                                                            <h2>M</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리M.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category N">
                                                            <h2>N</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리N.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category O">
                                                            <h2>O</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리O.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category P">
                                                            <h2>P</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리P.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category Q">
                                                            <h2>Q</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리Q.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category R">
                                                            <h2>R</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리R.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category S">
                                                            <h2>S</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리S.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category T">
                                                            <h2>T</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리T.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category U">
                                                            <h2>U</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리U.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category V">
                                                            <h2>V</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리V.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category W">
                                                            <h2>W</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리W.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category X">
                                                            <h2>X</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리X.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category Y">
                                                            <h2>Y</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리Y.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category Z">
                                                            <h2>Z</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리Z.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category 123">
                                                            <h2>123</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리123.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor=""><input type="checkbox"/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                    </div>   
                                                </div>
                                                <div className="right">
                                                    <div className="row row1">
                                                        <h2>Family site</h2>
                                                        <button></button>
                                                        <button></button>
                                                    </div>
                                                    <div className="row row2">
                                                        <h2>My Brands</h2>
                                                        <a href="!#">로그인 하여 나의 관심브랜드를 <br /> 확인해보세요.</a>
                                                    </div>
                                                    <div className="row row3">
                                                        <h2>Hot Brands</h2>
                                                        <div className="content-box content-box1">
                                                            <Link to='/BRAND?NIKE' onClick={()=>onClickSelect('NIKE')}>
                                                                <div className="img-box">
                                                                    <img src="./img/brand/1629843492243.jpg" alt="" />
                                                                </div>
                                                                <div className="info-box">
                                                                    <span>NIKE <label htmlFor=""><input type="checkbox"/></label></span>
                                                                    <span>나이키</span>
                                                                </div>                                                                
                                                            </Link>
                                                            <Link to='/BRAND?ADIDAS' onClick={()=>onClickSelect('ADIDAS')}>
                                                                <div className="img-box">
                                                                    <img src="./img/brand/1629844261525.jpg" alt="" />
                                                                </div>
                                                                <div className="info-box">
                                                                    <span>ADIDAS <label htmlFor=""><input type="checkbox"/></label></span>
                                                                    <span>아디다스</span>
                                                                </div>                                                                
                                                            </Link>
                                                            <a href="!#">
                                                                <div className="img-box">
                                                                    <img src="./img/brand/1629844323216.jpg" alt="" />
                                                                </div>
                                                                <div className="info-box">
                                                                    <span>CONVERSE <label htmlFor=""><input type="checkbox"/></label></span>
                                                                    <span>컨버스</span>
                                                                </div>                                                                
                                                            </a>
                                                            <a href="!#">
                                                                <div className="img-box">
                                                                    <img src="./img/brand/1629844226333.jpg" alt="" />
                                                                </div>
                                                                <div className="info-box">
                                                                    <span>VANS <label htmlFor=""><input type="checkbox"/></label></span>
                                                                    <span>반스</span>
                                                                </div>                                                                
                                                            </a>
                                                            <a href="!#">
                                                                <div className="img-box">
                                                                    <img src="./img/brand/1629844162667.jpg" alt="" />
                                                                </div>
                                                                <div className="info-box">
                                                                    <span>NEW BALANCE<label htmlFor=""><input type="checkbox"/></label></span>
                                                                    <span>뉴발란스</span>
                                                                </div>                                                                
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="back"></div>
                                        </li>
                                        <li className={`hidden2 ${isShow==='MEN'?' on':''}`}></li>
                                        <li className={`hidden3 ${isShow==='WOMEN'?' on':''}`}></li>
                                        <li className={`hidden4 ${isShow==='KIDS'?' on':''}`}></li>
                                    </ul>
                                </div>
                                <div className="box2_2">
                                    <ul>
                                        <li><a href="/EVENT">기획전</a></li>
                                        <li><a href="!#">KIDS마트</a></li>
                                        <li><a href="!#">ONLY ABC</a></li>
                                        <li><a href="!#">이벤트/쿠폰</a></li>
                                    </ul>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <Outlet/>
        </>
    );
};