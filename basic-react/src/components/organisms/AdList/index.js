import React, {Component} from 'react';
import { Form,FormGroup,Input,Label,Button} from 'reactstrap';

import axios from 'axios';

// src/components/organisms/Form/index.js
export default class AdList extends Component {
    state = {
        namabarang: '',
    }
    // cliked=() =>{     window.alert('I/m cliked') }
    handleChange = (event) => {
        // console.log(event);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // console.log('state',this.state)
        axios
        .post('http://localhost:3000/user', this.state)
        .then(response => {
            console.log(response);

            alert('Succes add item');
        })
        .catch(error => {
            console.log(error)
            alert('fail to add item');
        })
    }
    render() {
        return (
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label htmlFor="namabarang">Nama Barang</Label>
                            <Input type="namabarang" name="namabarang" id="namabarang" onChange={this.handleChange}/>
                            <Button type="submit">Add</Button>
                        </FormGroup>
                    </Form>
        )
    }
}
