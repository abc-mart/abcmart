import React from 'react';
import BrandComponent from './main/BrandComponent';
import IntroComponent from './main/IntroComponent';
import KidsComponent from './main/KidsComponent';
import MenComponent from './main/MenComponent';
import SaleComponent from './main/SaleComponent';
import WomenComponent from './main/WomenComponent';

export default function MainComponent(){
    return (
        <div id='main'>
            <IntroComponent/>
            <BrandComponent/>
            <MenComponent/>
            <WomenComponent/>
            <KidsComponent/>
            <SaleComponent/>
        </div>
    );
};
