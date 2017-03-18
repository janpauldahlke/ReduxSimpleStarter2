import React, { Component } from 'react';
//this wires react and redux
// {} pulls of the connect method we need
import { connect } from 'react-redux';

//import action here
import { selectBook } from '../actions/index';
//import binAction here
import { bindActionCreators } from 'redux';

//-----
/*
  needs to be aware of state of redux, so we use connect
  this is what we call "promote component to container"
  1.  import { connect }
  2.  write mapStateToProps function to map it
  3.  export connect and element like below to bind them
  ->  so, whenever the state change, the component will be noticed and re-renders itself, because its depending
*/
//-----

class BookList extends Component {

  renderList () {
    // we want props here // wire them
    //use node_module react-redux (rect and redux need to get toghter, they are not until now)
    //to do so: promote a component to container (smart components), container has react and redux
    //use different dir 'containers' to not be confused // structure helps here a lot
    return this.props.books.map((book) => {

      return(
          <li key={book.title} className="list-group-item">
            <div>{ book.title }</div>
            <div>{ book.author }</div>
          </li>
    );
  });
}

  render () {
    return(
      <ul className="list-group col-sm-4">
        { this.renderList()}
      </ul>
    )
  }
}

//whenever applikation state changes this function will be updated and so the event is known
//containerize redux/react here like this
function mapStateToProps ( state ) {
  //the return here will show up as props in book_list.js
  return {
    books: state.books
  };
}

//map action //dispatch(versenden)
//anything rreturnedhere will end up as props on BookList container
function mapDispatchToProps ( dispatch ){
  //whenever selectBook is called, the result should be passed to all reducers
              //key: importet action creator            //pass dispacth, after obejct as 2nd arg
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//promote // connect them
//in export
// export foo (reducer)(component)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
