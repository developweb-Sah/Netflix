import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';

// function ncard(val){
// return (
//   <Card
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}
//   />
// );
// }

ReactDOM.render(
  <>
     <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>    
  
    {/* <Card
    
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    />
    <Card 
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    />
    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].link}/>
    <Card 
      imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      link={Sdata[3].link}/> */}
      {/* {Sdata.map(ncard)} */}
      {Sdata.map((val)=>{
          return (
            <Card
            key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
            />
          );
      })}
</>, document.getElementById('root')
);


function myname(saheen){

}