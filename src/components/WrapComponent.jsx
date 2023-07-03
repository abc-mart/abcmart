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

    React.useEffect(()=>{
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

    },[selectButton])

    React.useEffect(() => {
        localStorage.setItem('ADIDAS', adidas);
        localStorage.setItem('NIKE', nike);
        localStorage.setItem('CONVERSE', converse);
        localStorage.setItem('VANS', vans);
        localStorage.setItem('NEW BALANCE', newbalance);
    }, [adidas, nike, converse, vans, newbalance]);


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
                        <Route path='/BRAND' element={<BrandComponent  adidas={adidas} nike={nike}  converse={converse}  vans={vans}  newbalance={newbalance} setViewProductDetail={setViewProductDetail} d_key={d_key} />}/>
                        <Route path='/PRODUCT' element={<ProductComponent setViewProductDetail={setViewProductDetail} d_key={d_key} />}/>
                        <Route path='/PRODUCTDETAIL' element={<ProductDetailComponent d_key={d_key} />}/>
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

