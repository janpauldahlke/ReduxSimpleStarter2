//what happens:
//action createor = returns an object/ an action(terminology)
//type is an action
//obecjt is send to all reducers in application
//reducers choose to return a new state of action if(true)
//this newly state is piped into application state
//app state forces re-render

// connect
//import from '';

export function selectBook (book) {
  console.log('A book has been selected', book.title);
}
