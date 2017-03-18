// state as arg is not app state, but only the state this reducers
// is responsible for

  //needs to be null, due redux does not allow us to pass undefined
  //and in the inital load, when nothing is selected the state would
  //be undefined so we set it to NULL with ES6 syntax
export default function ( state=null, action ) {

  switch( action.type ) {
    case 'BOOK_SELECTED':
      return action.paylod;
  }

  return state;
}
