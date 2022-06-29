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
        this.handleChange = this.handleChangename.bind(this)
        this.handleChange = this.handleChangeimg.bind(this)
        this.handleChange = this.handleChangedess.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChangename(e) {
        let namme=e.target.value
        this.setState({
            name:namme
        })
    }
    handleChangedess(e) {
        let dess=e.target.value
        this.setState({
            des:dess
        })
    }
    handleChangeimg(e) {
        let img=e.target.value
        this.setState({
            name:img
        })
    }
    handleSubmit(input){
        axios.post("http://localhost:3000/api/post",{
            name: input.target.name.value,
            des:input.target.des.value,
            image: input.target.image.value,        
        }).then(response =>{
            console.log(response.data)
            this.setState({
            recipe:response.data
            })
        })
        }
    render(){
        return(
        <div>
            <center><h2>Creat Product</h2>
            <div>
                <form >
                    <label >Creat Name
                    <input type="text"  onChange={this.handleChangename} />
                    </label><br />
                    
                    <label >Description
                            <textarea    onChange={this.handleChangedess}></textarea>
                    </label><br />
                    <label>Insert Image
                        <input type="url" onChange={this.handleChangeimg}/>
                    </label><br />
                    <input type="submit"  value='ADD PRODUCT' onClick={()=>{this.handleSubmit(this.state.name,this.state.des,this.state.image)}}/> 

                </form>
            </div>
            </center>
        </div>
            
        )
    }
}


export default CreatPost