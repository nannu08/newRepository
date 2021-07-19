import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';
import Sdata from './Sdata';



ReactDOM.render(
  <>
  
    <h1 className="heading_style" >List of top Netflix Series</h1>

 { Sdata.map((val,index)=>{
   console.log(index);
   return(
    <Card imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link} />


  );

 })}
     
  </>,
  document.getElementById('root')
);

