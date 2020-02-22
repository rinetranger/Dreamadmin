import React from 'react';
import { connect } from 'react-redux'


class Item extends React.Component{
    th={
        fontSize:'14pt',
        backgroundColor:'lightblue',
        color:'white',
        padding:'5px 10px',
        width:'50px',
        borderRadius:'5px'
    }
    td={
        fontSize:'14pt',
        backgroundColor:'white',
        color:'darkblue',
        padding:'5px 10px',
        minWidth:'300px',
        borderRadius:'5px',
        border:'1px solid lightblue',
    }
    render(){
        return(
        <tr><th style={this.th}>No,{this.props.index}</th>
        <td style={this.td}>{this.props.value.dream}</td>
        </tr>
        );
    }



}
export default connect()(Item);