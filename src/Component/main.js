import React from 'react'
import HornedBeast from './HornedBeasts'
import datajson from './data.json'
import SelectedBeast from './SelectedBeast'
// import { element } from 'prop-types';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statues: false,
            shwonelemnt: {},

        }

    }

    showfunction = (title) => {

        

        let   selected;
        datajson.filter(obj => {

         if(obj.title === title){
            selected =obj
            return selected;
         }
         return null;
        });


        this.setState(
           {
            statues : true,
            shwonelemnt : selected
        }
        )
        
    }


    close =() =>{
        this.setState({
            statues : false, 
        })
         }

    render() {

        return (<>
            {datajson.map((element, index) => {

                return <HornedBeast index={index} titel={element.title} imageUrl={element.image_url} discription={element.description} showfunction={this.showfunction} />
            }
            )}
            <SelectedBeast elem={this.state.shwonelemnt} close={this.close} show={this.state.statues} />
        </>)
    };
};

export default Main;