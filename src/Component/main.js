import React from 'react'
import HornedBeast from './HornedBeasts'
import datajson from './data.json'
// import { element } from 'prop-types';

class Main extends React.Component {
    render() {
        return (<>


            {datajson.map(element => {

                return <HornedBeast titel={element.title} imageUrl={element.image_url} discription={element.description} />

            }
            )}


        </>)
  };
};












export default Main;