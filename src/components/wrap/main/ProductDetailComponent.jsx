import React from 'react';
import { useState } from 'react';
import './scss/productdetail.scss';
import Section1Component from './product/Section1Component';
import Section2Component from './product/Section2Component';
import Section3Component from './product/Section3Component';
import Section4Component from './product/Section4Component';
import Section5Component from './product/Section5Component';
import Section6Component from './product/Section6Component';

export default function ProductDetailComponent(){




    return (
        <div id='ProductDetail'>

            <Section1Component/>
            <Section2Component/>
            <Section3Component/>
            <Section4Component/>
            <Section5Component/>
            <Section6Component/>

        </div>
    );
};

 