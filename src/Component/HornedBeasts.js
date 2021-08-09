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



    render() {


        return (

            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imageUrl} alt="" />
                    <Card.Body>
                        <Card.Title>{this.props.titel}</Card.Title>
                        <Card.Text>
                        🖤    NUMBER OF TRAK ={this.state.number}
                        </Card.Text>
                        <Button onClick={this.increasnumber} variant="primary"> voit to </Button>
                    </Card.Body>
                </Card>






                {/* <h2> {this.props.titel } </h2>

            <img  onClick={this.increasnumber} src={this.props.imageUrl } alt ={this.props.titel} titel ={this.props.titel}/>

           <p> {this.props.discription } </p>

           <p> NUMBER OF TRAK ={this.state.number}</p> */}

            </>

        )
    }
};

export default HornedBeast;