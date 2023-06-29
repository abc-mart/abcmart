import React from 'react';
import BrandSection1Component from './brand/BrandSection1Component';
import BrandSection2Component from './brand/BrandSection2Component';
import BrandSection3Component from './brand/BrandSection3Component';
import axios from 'axios';
export default function BrandComponent({adidas, nike}) {

   

    const[abcGrand, setAbcGrand]=React.useState(true);

    const abcChange =()=>{
        setAbcGrand(true);
    }
    const grandChange =()=>{
        setAbcGrand(false);
    }

    React.useEffect(()=>{
        if(adidas){
            setAbcGrand(true);
        }
        else{
            setAbcGrand(true);
        }
    },[adidas,nike])

    const [state, setState] = React.useState({
        아디다스ABC: [],
        아디다스GRAND: [],
        나이키ABC: [],
        나이키GRAND: []
    });
    React.useEffect(()=>{
        axios({
            url:'./data/brand/brand.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    아디다스ABC:res.data.adidas_abc,
                    아디다스GRAND:res.data.adidas_grand,
                    나이키ABC:res.data.nike_abc,
                    나이키GRAND:res.data.nike_grand,
                })
            }
        })
        .catch()
    },[])


    

    

    return (
        <main id='brand'>
            <BrandSection1Component adidas={adidas} nike={nike} 나이키ABC={state.나이키ABC} 나이키GRAND={state.나이키GRAND} 아디다스ABC={state.아디다스ABC} 아디다스GRAND={state.아디다스GRAND} abcGrand={abcGrand}/>
            <BrandSection2Component adidas={adidas} nike={nike} 나이키ABC={state.나이키ABC} 나이키GRAND={state.나이키GRAND} 아디다스ABC={state.아디다스ABC} 아디다스GRAND={state.아디다스GRAND} abcChange={abcChange} grandChange={grandChange} abcGrand={abcGrand}/>
            <BrandSection3Component adidas={adidas} nike={nike} 나이키ABC={state.나이키ABC} 나이키GRAND={state.나이키GRAND} 아디다스ABC={state.아디다스ABC} 아디다스GRAND={state.아디다스GRAND} abcGrand={abcGrand} />
        </main>
    );
}

