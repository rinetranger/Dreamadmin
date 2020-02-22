import React from 'react';
import {connect} from 'react-redux';
import addMemo from './Store';

class AddForm extends React.Component{
    input={
        fontSize:'16pt',
        color:'#006',
        padding:'1px',
        margin:'5px 0px',
        borderRadius:'2px'
    }
    btn={
        fontSize:'14pt',
        color:'white',
        padding:'2px 10px',
    }

    constructor(props){
        super(props);
        this.state={
            dream:''
        }
        this.doAction=this.doAction.bind(this)
        this.doChange=this.doChange.bind(this)
    }
    doChange(e){
        this.setState({
            dream:e.target.value
        });
    }
    doAction(e){
        e.preventDefault();
        let action=addMemo(this.state.dream);
        this.props.dispatch(action);
        this.setState({
            dream:''
        });
    }
 

     render(){
         return(
             <div>
               <p style={this.input}>{this.props.dream}</p>
               <form onSubmit={this.doAction}>
                   <input type="text" size="40" onChange={this.doChange} style={this.input} value={this.state.dream} required/>
                   <input type="submit" style={this.btn} value="added"/>
               </form>
             </div>
         )
     }
}


export default connect((state)=>state)(AddForm);