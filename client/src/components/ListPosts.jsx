import React from "react";



const ListPosts =(props)=>{
        
    return(props.list.map((element,i)=>{
        return(
            <div>
                <h1>{element.name}</h1>
                <center><img src={element.image} onClick={()=>{props.selectOne(i)}} ></img></center>
                
            </div>
        )
    }))
}

export default ListPosts;