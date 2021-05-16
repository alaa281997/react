import React from 'react';
import Headerss from './components/Headerss';
import Main from './components/Main';
import Footer from './components/Footer';



class App extends React.Component {

  render() {
    return (
      <div>
        <Headerss/>
        <Main/>
        <Footer/>
      </div>
    )
  }

}

export default App;