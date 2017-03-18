import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';


//this index combines all reducers

//key is books, that can be used later and its = BooksReducer
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
