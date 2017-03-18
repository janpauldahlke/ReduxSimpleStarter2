import React, { Component } from 'react';
//this wires react and redux
// {} pulls of the connect method we need
import { connect } from 'react-redux';


//
class BookList extends Component {

  renderList () {
    // we want props here // wire them
    //use node_module react-redux (rect and redux need to get toghter, they are not until now)
    //to do so: promote a component to container (smart components), container has react and redux
    //use different dir 'containers' to not be confused // structure helps here a lot
    return this.props.books.map((book) => {

      return(
          <li key={book.title} className="list-group-item">{ book.title }</li>
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
function mapStateToProps (state) {
  //the return here will show up as props in book_list.js
  return {
    books: state.books
  };
}
//connect them
//in export
// export foo (reducer)(component)
export default connect(mapStateToProps)(BookList);
