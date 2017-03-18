import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';


//this index combines all reducers
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
