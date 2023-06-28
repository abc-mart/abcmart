import React from 'react';
import './scss/brandSection1.scss';

export default function BrandSection1Component({abcGrand, adidas, 아디다스ABC, 아디다스GRAND, nike, 나이키ABC, 나이키GRAND}) {
    const [favorite, setFavorite] = React.useState(false);

    const onClickOn =()=>{
        setFavorite(on => !on);
    }

    return (
        <section id='brandSection1'>

            {adidas &&

            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="row1">
                            <ul>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">BRAND</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">ADIDAS</a></li>
                            </ul>
                        </div>
                        <div className="row2">
                            <h1>
                                ADIDAS
                                <span>
                                    <button onClick={onClickOn} className={`${favorite?'on':''}`}><img src="./img/brand/btn_icon_prod_favorite.png" alt="" /></button>
                                    <button ><img src="./img/brand/btn_icon_share.png" alt="" /></button>
                                </span>
                            </h1>
                        </div>                        
                    </div>
                    

                    <div className="content">                        
                        <div className="txt-box">
                            <h2>아디다스</h2>
                            <p>1949년부터,스토리와 스타일,스포츠를 이끌다.
                                <br/>세상의 모든 스포츠를 포용하는 브랜드
                                <br/>아디다스는 모두의 스포츠 브랜드입니다.
                            </p>
                        </div> 
                        <div className="logo-box">
                            <img src="./img/brand/adidas/logo.png" alt="" />
                        </div>
                        
                        {
                            abcGrand?
                            (
                                아디다스ABC.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                                })
                                )
                            :
                            (
                                아디다스GRAND.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                            })
                            )                                           
                        }
                        
                    </div>
                    

                    
                    
                </div>
            </div>
            
            }

            {nike &&

            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="row1">
                            <ul>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">BRAND</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">NIKE</a></li>
                            </ul>
                        </div>
                        <div className="row2">
                            <h1>
                                NIKE
                                <span>
                                    <button onClick={onClickOn} className={`${favorite?'on':''}`}><img src="./img/brand/btn_icon_prod_favorite.png" alt="" /></button>
                                    <button ><img src="./img/brand/btn_icon_share.png" alt="" /></button>
                                </span>
                            </h1>
                        </div>                        
                    </div>
                    

                    <div className="content">                        
                        <div className="txt-box">
                            <h2>나이키</h2>
                            <p>1964년에 설립된 전세계 1위 브랜드 나이키.
                                <br/>다양한 컬래버레이션과 두터운 매니아층을 통해 세계적으로 그 위치를 증명하고 있습니다.
                            </p>
                        </div> 
                        <div className="logo-box">
                            <img src="./img/brand/nike/logo.png" alt="" />
                        </div>
                        
                        {
                            abcGrand?
                            (
                                나이키ABC.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                                })
                                )
                            :
                            (
                                나이키GRAND.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                            })
                            )                                           
                        }
                        
                    </div>
                    

                    
                    
                </div>
            </div>
            
            }
        </section>
    );
}

