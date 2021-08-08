import React from 'react'
class HornedBeast extends React.Component{
    render(){
        return(
            <>
            <h2> {this.props.titel } </h2>

            <imag src={`${this.props.imageUrl }`}/>

           <p> {this.props.discription } </p>

           </>
           
        )
    }
}

export default HornedBeast ;