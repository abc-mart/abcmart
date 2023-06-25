import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './scss/section9.scss';

export default function Section9Component(){

    const [state, setState] = React.useState({
        mainBanner: [],
        n: 0
    });

    React.useEffect(()=>{

        axios({
            url: './data/intro/section9.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    mainBanner: res.data.main_banner,
                    n: res.data.main_banner.length
                });
            }
        })
        .catch((err)=>{
            console.log(`err` + err);
        });

    },[]);


    return (
        <section id="section9">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        {
                            state.mainBanner.map((item, idx)=>{
                                return(
                                    <a className='left' href="!#" key={idx}><img src={item.src} alt="" /></a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};