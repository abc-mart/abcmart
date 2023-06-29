import React from 'react';
import FooterComponent from './wrap/FooterComponent';
import HeaderComponent from './wrap/HeaderComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IntroComponent from './wrap/main/IntroComponent';
import BrandComponent from './wrap/main/BrandComponent';
import ProductDetailComponent from './wrap/main/ProductDetailComponent';
import NotFoundComponent from './wrap/main/NotFoundComponent';
import EventComponent from './wrap/main/EventComponent';


export default function WrapComponent(){

    const [selectButton, setSelectButton ]= React.useState(null);
    
    //브랜드
    const [adidas, setAdidas]=React.useState(false);
    const [nike, setNike]=React.useState(false);

    


    React.useEffect(()=>{
        if(selectButton==='adidas'){
            setAdidas(true);

            setNike(false);
            
        }
        else if(selectButton==='nike'){
            setNike(true);
            
            setAdidas(false);
        }
    },[selectButton])

    return (
        <div id='wrap'>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>                    
                    <Route path='/' element={<HeaderComponent setSelectButton={setSelectButton}/>}>
                        <Route index element={<IntroComponent/>}/>
                        <Route path='/INTRO' element={<IntroComponent/>}/>                        
                        <Route path='/BRAND' element={<BrandComponent adidas={adidas} nike={nike}/>}/>
                        <Route path='/PRODUCT' element={<ProductDetailComponent/>}/>
                        <Route path='/EVENT' element={<EventComponent/>}/>
                        <Route path='/*' element={<NotFoundComponent/>}/>
                        
                    </Route>
                </Routes>

            </BrowserRouter>
            
            
            <FooterComponent/>
        </div>
    );
};

