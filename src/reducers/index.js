import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//this index combines all reducers

//key is books, that can be used later and its = BooksReducer
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook : ActiveBook
});

export default rootReducer;
