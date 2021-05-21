import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: 'Sherry',
    //         imgUrl: sherry
    //     }
    // }

    constructor(props) {
        super(props);
        this.state = {
            numberOfVotes: 0,
        }
    }
  

    numberOfVotes = () => {
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1,
        })
    }
    getArray=()=>{
        this.props.getArr(this.props.title)
    }
 

    render() {
        return (
            <div  >

                <Card key={this.props.indx} style={{ width: '18rem' }}>
                    <Card.Img onClick={this.getArray} variant="top" src={this.props.imageUrl} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Text>Number of votes : {this.state.numberOfVotes} </Card.Text>
                    <Button variant="primary" onClick={this.numberOfVotes}>Votes</Button>

                </Card>
              

            </div>
 

        )
    }
}

export default HornedBeast;

