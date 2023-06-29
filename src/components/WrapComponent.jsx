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



export default function WrapComponent(){

    const [selectButton, setSelectButton ]= React.useState(null);
    
    //브랜드
    const [adidas, setAdidas] = React.useState(
        localStorage.getItem('ADIDAS') === 'true' ? true : false
      );
      const [nike, setNike] = React.useState(
        localStorage.getItem('NIKE') === 'true' ? true : false
      );

   

    


    React.useEffect(()=>{
        if(selectButton==='ADIDAS'){
            setAdidas(true);

            setNike(false);
            
        }
        else if(selectButton==='NIKE'){
            setNike(true);
            
            setAdidas(false);
        }

    },[selectButton])

    React.useEffect(() => {
        localStorage.setItem('ADIDAS', adidas);
        localStorage.setItem('NIKE', nike);
    }, [adidas, nike]);

    return (
        <div id='wrap'>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>                    
                    <Route path='/' element={<HeaderComponent setSelectButton={setSelectButton} />}>
                        <Route index element={<IntroComponent/>}/>
                        <Route path='/INTRO' element={<IntroComponent />}/>                        
                        <Route path='/BRAND' element={<BrandComponent  adidas={adidas} nike={nike}/>}/>
                        <Route path='/PRODUCT' element={<ProductDetailComponent/>}/>
                        <Route path='/EVENT' element={<EventComponent/>}/>
                        <Route path='/CART' element={<CartComponent/>}/>
                        <Route path='/LOGIN' element={<LoginComponent/>}/>
                        <Route path='/*' element={<NotFoundComponent/>}/>
                        
                    </Route>
                </Routes>

            </BrowserRouter>
            
            
            <FooterComponent/>
        </div>
    );
};

