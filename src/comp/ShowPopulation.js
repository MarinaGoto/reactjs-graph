import React from "react";
import { connect } from "react-redux";
import {showlist, hidelist, showelse, hideelse } from '../actions/user';

class First extends React.Component {

  constructor() {
        super();
      this.reactmethod=this.reactmethod.bind(this);

    }


    reactmethod(){
this.props.showlist();

    //    setTimeout(() =>  this.props.hidelist(), 1000);


}

  render() {
    return (
      <div>
        <h1> Show Population chart</h1>
        <button onClick={this.reactmethod}>
        Click here to show Chart
        </button>
          <button onClick={this.props.showelse}>
              Show something else
          </button>
      </div>
    );
  }
}




export default connect(null, {showlist, hidelist, showelse, hideelse})(First);
