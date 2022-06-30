import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CreatPost from './components/CreatPost.jsx';
import ListPosts from  './components/ListPosts.jsx';
import OnePost from './components/OnePost.jsx';
import axios from "axios"
import Look from './components/look.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      onePost:{},
      look:[],
      view:'allLists'
    }
    this.selectOne = this.selectOne.bind(this);
    // this.handelelook = this.handelelook.bind(this)
  }
  selectOne(index){
    this.handleview("oneRecipe")
    this.setState({
      onePost:this.state.recipe[index]
    })
  }

  componentDidMount() {
    $.ajax({
      url: '/',
      type:"get",
      success: (data) => {
        this.setState({
          get: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  // componentDidMount(){
  //   fetch("http://localhost:3000/get").then(response =>
  //     response.json()
  //   ).then(data =>{
  //     this.setState({
  //       name:data,
  //       des:data,
  //       Image:data
  //     })
  //     })
  // }


  handleview(view){
    this.setState({
      view: view
    })
  }
  // handelelook(term){
  //   axios.get(`http://localhost:3000/api/${term}`).then(response =>{
  //     this.setState({
  //       view:'look',
  //       look:response.data
  //     })
  //   })
    
  // }
  
  renderView(){
    if(this.state.view === 'listPost'){
    return <ListPosts Posts = {this.state.Post}  selectOne={this.selectOne  } deleteOne={this.deleteOne} />
    }else if(this.state.view ==='CreatPost'){
      return  <CreatPost success={this.state.success === "success"? "Data Saved" : ''} /> 
    }else if(this.state.view ==='onePost'){
      return <center><OnePost Post={this.state.OnePost}/></center>
    }
    
  }
    
    
  render () {
    return (
    <div  className='body'>
      <div>
        <nav className='nav'>
          <div 
          
          > Create Product<CreatPost/></div>
          <div className={
            this.state.view !=='listPost' ?
            "nav-unselected" : "nav-selected"
          }
          onClick={()=>{
            this.handleview('listPost')
          }}
          > All Product
          
          </div>
          </nav>
          {this.renderView()}
          
      </div>
      <div className={
            this.state.view !=='search' ?
            "nav-unselected" : "nav-selected"
          }><Look onSearch ={this.handelelook}/></div>
        
      
    </div>
    
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));