import React from 'react'
import Form from 'react-bootstrap/Form'


class Forms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          horns: 0

        }

    }

    formfunction = async (event) => {
        event.preventDefault();
        await this.setState(
            {
                horns: Number(event.target.value)

            }
        )

        this.props.sentselctor(this.state.horns)
    }



    render() {

        return (<>

<Form.Label>what is your fav cat breed?</Form.Label>
<Form.Select aria-label="Default select example" name='selectnum' onChange={ this.formfunction }>
    <option value="0">all</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="100">woooo</option>
</Form.Select>   
</>
        )}


}


export default Forms;