import React from "react";
import axios from "axios";

class CreatPost extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            des:"",
            image:""
        }

        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(){
        axios.post("http://localhost:3000/api/post",this.state).then(response =>{
            console.log(response.data)
            this.setState({
            data:response.data
            })
        })
        }
    render(){
        return(
        <div>
            <center><h2>Creat Product</h2>
            <div>
                {console.log(this.state)}
                <form >
                    <label >Creat Name
                    <input type="text"  onChange={(e)=>this.setState({name:e.target.value})} />
                    </label><br />
                    
                    <label >Description <br />
                            <textarea    onChange={(e)=>this.setState({des:e.target.value})}></textarea>
                    </label><br />
                    <label>Insert Image
                        <input type="url" onChange={(e)=>this.setState({image:e.target.value})}/>
                    </label><br />
                    <input type="submit"  value='ADD PRODUCT' onClick={()=>{this.handleSubmit}}/> 

                </form>
            </div>
            </center>
        </div>
            
        )
    }
}


export default CreatPost