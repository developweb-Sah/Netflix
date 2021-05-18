import React from 'react';
import Amazon from './Amazon';
import Card from './Cards';
import Netflix from './Netflix';
import Sdata from './Sdata';

const favSeries = 'amazon';

// const FavS= ()=>{
// if(favSeries === 'netflix'){
//   return <Netflix/>
// }
// else{
//   return <Amazon/>
// }
// };
const App = () => (
  <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
    {/* <FavS/> */}
    {(favSeries === 'netflix')? <Netflix/> :<Amazon/> }
  </>
)
 
export default App;