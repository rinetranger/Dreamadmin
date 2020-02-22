import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';



class Memo extends React.Component{
    render(){
        let data;
        let n=0;
        switch(this.props.mode){
            case 'default':
                data=this.props.data.map((value)=>(
                    <Item key={value.dream} value={value} index={n++} />
             
                ));
                break;
                
            case 'find':
                data=this.props.data.map((value)=>(
                    <Item key={value.dream} value={value} index={n++} />
             
                ));
                break;
            case 'delet':
                data=this.props.data.map((value)=>(
                    <Item key={value.dream} value={value} index={n++} />
             
                ));
                break;
             default :
                data=this.props.data.map((value)=>(
                    <Item key={value.dream} value={value} index={n++} />
             
                ));
          return(
          <table><tabody>{data}</tabody></table>
          )

        }

    }
}
export default connect((state)=>state)(Memo);