import React from "react";



const ListPosts =(props)=>{
    <div>
    {props.list.map((element,i)=>{
        return(
            <div key={i}>
                <h1>{element.name}</h1>
                <center><img src={element.image} onClick={()=>{props.selectOne(i)}} ></img></center>
                <center><button className="delete" onClick={()=>{props.deleteOne(i)}}>Delete</button>  </center>
                </div>
            
        )
        
    })}
    </div>
}

export default ListPosts;