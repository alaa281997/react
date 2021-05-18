import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import SelectedBeast from './SelectedBeast';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           data: data,
            show : false 
        }
    }
   
     setShow = (active) => {
         this.setState ({
             show : active 
         })
    }
         handleClose = () => this.setShow(false);
         handleShow = () => this.setShow(true);

    render() {
        return (
            <>
                {
                    data.map((item,indx) => {
                        return (
                            <HornedBeast
                                title={item.title}
                                image_url={item.image_url}
                                handleShow = {this.handleShow}
                                description= {item.description}
                                indx = {indx}
                           
                            />
                        )
                    })
                }
                <SelectedBeast
                    beastArr={this.state.data}
                    handleClose = {this.handleClose}
                    handleShow = {this.handleShow}
                    show = {this.state.show}
                />
                
            </>
        )
    }
}
export default Main;