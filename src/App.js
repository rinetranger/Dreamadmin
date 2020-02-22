import React from 'react';

import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DeleteForm from './memo/DeleteForm';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component{
  td={
    width:'250px',
  }
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h2>さあ、入力してみましょう。</h2>
        <AddForm />
        <table>
          <tbody>
            <tr>
              <td style={this.td}><FindForm /></td>
              <td style={this.td}><DeleteForm /></td>   
            </tr>
          </tbody>
        </table>
        <Memo />
      </div>
    )
  }
}

export default connect()(App);