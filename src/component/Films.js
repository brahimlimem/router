
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
export default function Films({data}) {
  return (
    <div>
        <div className="container" >
             <div className="row">
                {data.map((data)=>(
                <div className="col">
<div className="card-group">
<div className="card" >
        <img src={data.url}  className="card-img-top" alt="..." width="200px" height="300px"/>
<div className="card" width="18rem;">
        <h5 className="card.title">{data.titre}</h5>
          <p className="card-text">{data.description.substring(0, 80)}...</p>
          <Link to="/card" className="btn btn-primary">
<button type="button" className="btn btn-primary"  >Show</button></Link>
          </div>   
</div>
</div>
</div>
                ))}
  </div>
  </div>
  </div>
  )
}