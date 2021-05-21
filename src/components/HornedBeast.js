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

    numOfVotes = () => {
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1,
        })
    }

    callShowModel =()=>{
        this.props.showModel();
    }
    render() {
        return (
            <div  >

                <Card key={this.props.indx} style={{ width: '18rem' }}>
                    <Card.Img onClick={this.props.handleShow} variant="top" src={this.props.image_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Text>Number of votes : {this.state.numberOfVotes} </Card.Text>
                    <Button variant="primary" onClick={this.numOfVotes}>Votes</Button>

                </Card>

            </div>
 
            // <div><p>{this.props.title}</p>
            //     <img src={this.props.image_url} alt={this.props.title} />
            //     <p>{this.props.description}</p>
            //     <p> Number of votes :{this.state.numberOfVotes}</p>
            //     <button onClick={this.numOfVotes}>Votes</button>
            // </div>






        )
    }
}

export default HornedBeast;