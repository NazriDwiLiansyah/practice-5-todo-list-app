import React, {Component} from 'react';
import {Button, Table} from 'reactstrap';
import axios from 'axios';
export default class ListUser extends Component {

    state={
        data:[],
        barang:[]
    }
      handleChange = (event) => {
        // console.log(event);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    componentDidMount(){
        axios.get('http://localhost:3000/user')
            .then(response =>{
                this.setState({
                    data:response.data
                })
            })
    }
    onPut=(id)=>{
        axios.put(`http://localhost:3000/user/${id}`)
        .then(response => {
            let newBarang = window.prompt('write it!');
            this.setState({
                barang:newBarang
            })
            console.log(response);
            alert('Succes Update item');
        })
        .catch(error => {
            console.log(error)
            alert('fail to Update item');
        })

    }


    onDelete= (id) => {
        axios.delete(`http://localhost:3000/user/${id}`)
        .then(response=>{

            let newData= this.state.data.filter(item=>{
                return item.id != id
            })
            this.setState({
                data: newData
            })
            console.log(response);
            alert('Succes Delete item')
        })
        .catch(error=>{
            console.log(error);
            alert('fail delete item')

        })
    }
    
    render() {
        const list= this.state.data.map( item =>{
            return (
                <tr key={item.id}>
                    <td> {item.namabarang}</td>
                    <td><Button color="danger" onClick={()=>this.onDelete(item.id)}>Delete</Button></td>
                    <td><Button color="primary" onClick={()=>this.onPut(item.id)}>Edit</Button></td>
                    {/* <td><Button color="primary" onClick={()=>this.onPut(item.id)}>nanti</Button></td> */}
                </tr>
            )
        })
        
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Nama Barang</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </Table>
        )
    }
}