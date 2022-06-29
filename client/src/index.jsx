import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CreatPost from './components/CreatPost.jsx';
import ListPosts from  './components/ListPosts.jsx';
import OnePost from './components/OnePost.jsx';
import axios from "axios"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: []
    }
    
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
  handleview(view){
    this.setState({
      view: view
    })
  }
  renderView(){
    if(this.state.view === 'listPost'){
    return <ListPosts Posts = {this.state.Post}  selectOne={this.selectOne} deleteOne={this.deleteOne} />
    }else if(this.state.view ==='CreatPost'){
      return  <CreatPost success={this.state.success === "success"? "Data Saved" : ''} /> 
    }else if(this.state.view ==='onePost'){
      return <center><OnePost Post={this.state.OnePost}/></center>
    }
    
  }
    
    
  render () {
    return (
    <div>
      <div>
        <nav className='nav'>
          <div className={
            this.state.view !=="CreatPost" ?
            "nav-unselected" : "nav-selected"
          }
            onClick={()=>{
              this.handleview('CreatPost')
            }}
          > <CreatPost/>Create Product</div>
          <div className={
            this.state.view !=='listPost' ?
            "nav-unselected" : "nav-selected"
          }
          onClick={()=>{
            this.handleview('listPost')
          }}
          ><ListPosts/> All Product</div>
          </nav>
          {this.renderView()}
          
      </div>
      
    </div>
    
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));