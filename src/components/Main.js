import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Form from 'react-bootstrap/Form'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           data: data,
           filterData : data
        }
    }
   

   render() {
        return (
            <>

                
            {this.state.filterData.map((item, index) => {
            return (
              <HornedBeast
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
                getArr={this.props.getArr}
                key={index}
              />
            )
          })
          }

            </>
        )
    }
}
export default Main;