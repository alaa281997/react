import React from 'react';
import Headerss from './components/Headerss';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import data from './components/data.json'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
   
    show:false,
    myarr:{},
    data:data
    }
  }
  
  
    handleShow = () => {
      this.setState({
        show: true,
      })
    
    }
    handleClose = () => {
      this.setState({
        show: false,
      })
    }
  
  getArr=(title)=>{
  const myarr= data.find(val=>{
  
    if (val.title === title) {
      return val;
  
    }
  
  })
  this.setState({
    show: true,
    myarr:myarr,
  })
  
  }
  
  render() {
    return (
      <div>
        <Headerss/>
        <Main data={this.state.data}  handleShow={this.handleShow}getArr={this.getArr}   />
        <Footer/>
        <SelectedBeast  show={this.state.show} handleClose={this.handleClose}  myarr={this.state.myarr} />
      </div>
    )
  }

}

export default App;