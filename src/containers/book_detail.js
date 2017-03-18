import React, { Component } from 'react';
//create container
import { connect } from 'react-redux';


class BookDetail extends Component {
  render () {

    //how to deal with inital load if props...title is null?
    if(!this.props.book){
      return <div>Select a book please...</div>
    }

    return(
      <div>
        <h3>Details for:</h3>
        <div>{ this.props.book.title }</div>
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return{
    book: state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetail);
