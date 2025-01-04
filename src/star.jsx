import { use, useState } from 'react';
import './star.css';
export default function star(){
    const[Num,setNum]=useState(0);
    return(
        <div className="outer-container">
            <div className="inner-container">
            <h2>Star-Rating</h2>
            <div>{[...Array(5)].map((_,index)=><span key={index} onClick={()=>{setNum(index+1)}} className={`${index<Num?"Selected":""}`} >&#9734;</span>)}</div>
            <h1>Star Rating:{Num}</h1>
            </div>
        </div>
    )
}