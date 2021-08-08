import React from 'react'
class HornedBeast extends React.Component{
    render(){
        return(
            <>
            <h2> {this.props.titel } </h2>

            <img src={this.props.imageUrl } alt ={this.props.titel} titel ={this.props.titel}/>

           <p> {this.props.discription } </p>

           </>
           
        )
    }
}

export default HornedBeast ;