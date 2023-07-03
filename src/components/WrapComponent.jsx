import React from 'react';
import FooterComponent from './wrap/FooterComponent';
import HeaderComponent from './wrap/HeaderComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IntroComponent from './wrap/main/IntroComponent';
import BrandComponent from './wrap/main/BrandComponent';
import ProductDetailComponent from './wrap/main/ProductDetailComponent';
import NotFoundComponent from './wrap/main/NotFoundComponent';
import EventComponent from './wrap/main/EventComponent';
import CartComponent from './wrap/main/CartComponent';
import LoginComponent from './wrap/main/LoginComponent';
import ProductComponent from './wrap/main/ProductComponent';
import ServiceComponent from './wrap/main/ServiceComponent';
import MypageComponent from './wrap/main/MypageComponent';



export default function WrapComponent(){

    const [selectButton, setSelectButton ]= React.useState(null);
    
    //브랜드
    const [adidas, setAdidas] = React.useState(
        localStorage.getItem('ADIDAS') === 'true' ? true : false
    );
    const [nike, setNike] = React.useState(
      localStorage.getItem('NIKE') === 'true' ? true : false
    );
    const [converse, setConverse] = React.useState(
      localStorage.getItem('CONVERSE') === 'true' ? true : false
    );
    const [vans, setVans] = React.useState(
      localStorage.getItem('VANS') === 'true' ? true : false
    );
    const [newbalance, setNewbalance] = React.useState(
      localStorage.getItem('NEW BALANCE') === 'true' ? true : false
    );

    //men,women,kids
    const [running1, setRunning1] = React.useState(
        localStorage.getItem('런닝화M') === 'true' ? true : false
    );
    const [running2, setRunning2] = React.useState(
        localStorage.getItem('런닝화W') === 'true' ? true : false
    );
    const [running3, setRunning3] = React.useState(
        localStorage.getItem('런닝화K') === 'true' ? true : false
    );

    React.useEffect(()=>{

        //브랜드
        if(selectButton==='ADIDAS'){
            setAdidas(true);

            setNike(false);   
            setConverse(false); 
            setVans(false);  
            setNewbalance(false);       
        }
        else if(selectButton==='NIKE'){
            setNike(true);  

            setAdidas(false);
            setConverse(false); 
            setVans(false);  
            setNewbalance(false); 
        }
        else if(selectButton==='CONVERSE'){
            setConverse(true);

            setAdidas(false);
            setNike(false);   
            setVans(false);  
            setNewbalance(false); 
        }
        else if(selectButton==='VANS'){
            setVans(true);     

            setAdidas(false);
            setNike(false);   
            setConverse(false);
            setNewbalance(false); 
        }
        else if(selectButton==='NEW BALANCE'){
            setNewbalance(true);  

            setAdidas(false);
            setNike(false);   
            setConverse(false); 
            setVans(false);  
        }

        // 남성, 여성, 아동
        else if(selectButton==='런닝화M'){
            setRunning1(true);

            setRunning2(false);
            setRunning3(false);
            setNewbalance(false);  
            setAdidas(false);
            setNike(false);   
            setConverse(false); 
            setVans(false);  
        }
        else if(selectButton==='런닝화W'){
            setRunning2(true);

            setRunning1(false);
            setRunning3(false);
            setNewbalance(false);  
            setAdidas(false);
            setNike(false);   
            setConverse(false); 
            setVans(false);  
        }
        else if(selectButton==='런닝화K'){
            setRunning3(true);

            setRunning1(false);
            setRunning2(false);
            setNewbalance(false);  
            setAdidas(false);
            setNike(false);   
            setConverse(false); 
            setVans(false);  
        }

    },[selectButton])

    React.useEffect(() => {
        localStorage.setItem('ADIDAS', adidas);
        localStorage.setItem('NIKE', nike);
        localStorage.setItem('CONVERSE', converse);
        localStorage.setItem('VANS', vans);
        localStorage.setItem('NEW BALANCE', newbalance);

        //남성,여성, 아동
        localStorage.setItem('런닝화M', running1);
        localStorage.setItem('런닝화W', running2);
        localStorage.setItem('런닝화K', running3);
    }, [adidas, nike, converse, vans, newbalance, running1, running2, running3 ]);


    // 상품클릭 시 ProductDetail화면으로 이동
    const [productDetail, setProductDetail] = React.useState({
        d_key: 'PRODUCTDETAILKEY',
        sign: false,
        getProductDetail : []
    });

    // 비구조화
    const {d_key, sign, getProductDetail} = productDetail;

    const setViewProductDetail=(value)=>{
        let arr = [];
        console.log('value  ' +value);
        if(localStorage.getItem(d_key)!==null){

            arr = JSON.parse(localStorage.getItem(d_key));
            arr = [value, ...arr]
            localStorage.setItem(d_key, JSON.stringify(arr));
            setProductDetail({
                ...productDetail,
                sign: !sign,
                getProductDetail: arr
            });
        }
        else{
            arr = [value]
            localStorage.setItem(d_key, JSON.stringify(arr));
            setProductDetail({
                ...productDetail,
                sign: !sign,
                getProductDetail: arr
            });
        }
      
    }







    return (
        <div id='wrap'>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>                    
                    <Route path='/' element={<HeaderComponent setSelectButton={setSelectButton} />}>
                        <Route index element={<IntroComponent/>}/>
                        <Route path='/INTRO' element={<IntroComponent />}/>                        
                        <Route path='/BRAND' element={<BrandComponent  adidas={adidas} nike={nike}  converse={converse}  vans={vans}  newbalance={newbalance} setViewProductDetail={setViewProductDetail} />}/>
                        <Route path='/PRODUCT' element={<ProductComponent running={running1}  setViewProductDetail={setViewProductDetail} />}/>
                        <Route path='/PRODUCTDETAIL' element={<ProductDetailComponent/>}/>
                        <Route path='/EVENT' element={<EventComponent/>}/>
                        <Route path='/CART' element={<CartComponent/>}/>
                        <Route path='/LOGIN' element={<LoginComponent/>}/>
                        <Route path='/MYPAGE' element={<MypageComponent/>}/>
                        <Route path='SERVICE' element={<ServiceComponent/>}/>

                        <Route path='/*' element={<NotFoundComponent/>}/>
                        
                    </Route>
                </Routes>

            </BrowserRouter>
            
            
            <FooterComponent/>
        </div>
    );
};

