import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = { number: 0 }
    }
    increasnumber = () => {
        this.setState({
            number: this.state.number + 1
        })
    }


    showfunction = () =>{
             this.props.showfunction(this.props.titel)
    }
    render() {


        return (

            <>
        
                <Card onClick={this.showfunction}style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imageUrl} alt="" />
                    <Card.Body>
                        <Card.Title>{this.props.titel}</Card.Title>
                        <Card.Text>
                        🖤    NUMBER OF TRAK ={this.state.number}
                        </Card.Text>
                        <Button onClick={this.increasnumber} variant="primary"> voit to </Button>
                    </Card.Body>
                </Card>
             



               

            </>

        )
    }
};

export default HornedBeast