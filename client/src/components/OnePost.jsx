import React from "react";

const OnePost =(props)=>{
  return(
    <div>
      <h1>{props.name}</h1>
      <div>
        <img src={props.image}  />
      </div>
      <div>
        <p >{props.des}</p>
      </div>
    </div>
  )
}
export default OnePost;